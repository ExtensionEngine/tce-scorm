const find = require('lodash/find');
const xmlParser = require('fast-xml-parser');

async function setLaunchUrl(element, { config, storage, storageProxy }) {
  const { protocol } = config.storage;
  const { root, assets } = element.data;
  if (!root) return element;
  const manifestKey = find(assets, it => it.endsWith('imsmanifest.xml'));
  const manifest = await storage.getFile(manifestKey.substr(protocol.length, manifestKey.length));
  const options = { ignoreAttributes: false, attributeNamePrefix: '$_' };
  const { manifest: parsedManifest } = xmlParser.parse(manifest.toString(), options);
  const { $_href: resourcePath } = parsedManifest.resources.resource;
  const prefix = storage.getAssetsPath(element.repositoryId);
  const launchKey = `${prefix}/${root}/${resourcePath}`;
  element.data.launchUrl = storageProxy.getFileUrl(launchKey);
  return element;
}

module.exports = { beforeSave: setLaunchUrl };
