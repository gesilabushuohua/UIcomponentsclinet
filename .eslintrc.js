module.exports = {
  root: true,
  env: {
    browser: true,
    es6: true,
    node: true
  },
  parserOptions: {
    parser: "@typescript-eslint/parser",
    ecmaVersion: 2018,
    sourceType: "module"
  },
  extends: [
    "plugin:vue/recommended" /* eslint应用在vue的必须配置 */
  ],
  rules: {
    "no-console": process.env.NODE_ENV === "production" ? "warn" : "off",
    "no-debugger": process.env.NODE_ENV === "production" ? "warn" : "off",
    "no-unused-vars": 1
  }
};
