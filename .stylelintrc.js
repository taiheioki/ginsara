module.exports = {
  plugins: [
    'stylelint-order',
  ],
  extends: [
    "stylelint-prettier/recommended"
  ],
  rules: {
    'order/properties-alphabetical-order': true
  }
};
