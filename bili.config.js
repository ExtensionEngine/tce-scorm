'use strict';

const path = require('path');

/** @type {import('bili').Config} */
module.exports = {
  input: {
    'tce-scorm': 'src/index.js'
  },
  output: {
    format: ['cjs', 'es', 'umd', 'umd-min'],
    moduleName: 'TceScorm'
  },
  bundleNodeModules: ['rollup-plugin-vue', 'vue-runtime-helpers'],
  plugins: {
    vue: true,
    'tailor-ce': true,
    postcss: {
      extract: 'tce-scorm.css'
    },
    babel: {
      sourceMap: true,
      extensions: ['.js', '.vue']
    },
    '@rollup/plugin-alias': {
      resolve: ['.vue', '.js'],
      entries: [
        { find: '@', replacement: path.resolve(__dirname, './src') }
      ]
    },
    visualizer: {
      sourceMap: true,
      open: false
    }
  },
  resolvePlugins: {
    'tailor-ce': require('@extensionengine/rollup-plugin-tailor-ce')
  }
};
