module.export = {
  "extends": [
    "eslint-config-leosingleton"
  ],
  "rules": {
    // When using terser's --mangle-props "keep_quoted" setting, the following rules need to be disabled as they are
    // needed to create valid code to prevent mangling...
    "dot-notation": "off",
    "quote-props": "off"
  }
};
