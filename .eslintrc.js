module.exports = {
  extends: 'eslint-config-airbnb-base',
  rules: {
    'import/extensions': [
      "off",
    ],
  },
  env: {
    browser: true,
    node: true,
  }
};