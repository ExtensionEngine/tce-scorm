'use strict';

module.exports = {
  root: true,
  extends: '@extensionengine',
  overrides: [{
    files: ['src/**'],
    parserOptions: {
      parser: 'babel-eslint',
      sourceType: 'module'
    },
    rules: {
      'vue/component-definition-name-casing': ['error', 'kebab-case']
    }
  }]
};
