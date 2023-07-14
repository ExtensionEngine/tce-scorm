import find from 'lodash/find.js';
import xmlParser from 'fast-xml-parser';

async function setLaunchUrl(element, { config, storage, storageProxy }) {
  const { protocol } = config.storage;
  const { root, assets } = element.data;
  if (!root) return element;
  const manifestKey = find(assets, it => it.endsWith('imsmanifest.xml'));
  const manifest = await storage.getFile(
    manifestKey.substr(protocol.length, manifestKey.length)
  );
  const options = { ignoreAttributes: false, attributeNamePrefix: '$_' };
  const { manifest: parsedManifest } = xmlParser.parse(
    manifest.toString(),
    options
  );
  const { $_href: resourcePath } = parsedManifest.resources.resource;
  const storagePath = storage.getPath(element.repositoryId);
  const launchKey = `${storagePath}/${root}/${resourcePath}`;
  element.data.launchUrl = storageProxy.getFileUrl(launchKey);
  return element;
}

export const beforeSave = setLaunchUrl;
