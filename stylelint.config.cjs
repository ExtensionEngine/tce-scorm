module.exports = {
  extends: [
    '@extensionengine/stylelint-config'
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
