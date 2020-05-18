module.exports = {
  plugins: ["jquery"],
  extends: ["eslint:recommended", "plugin:prettier/recommended"],
  env: {
    browser: true,
    es6: true,
    jquery: true,
  },
  parseOptions: {
    ecmaVersion: 6,
    sourceType: "module",
  },
};
