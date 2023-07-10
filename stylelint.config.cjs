module.exports = {
  extends: [
    'stylelint-config-recommended-vue', // add overrides for .Vue files
    '@extensionengine/stylelint-config' // override with ExtensionEnigine custom rules
  ],
  overrides: [
    {
      files: ['src/**'],
      rules: {
        'selector-pseudo-class-no-unknown': null,
        'selector-class-pattern': null
      }
    }
  ]
};
