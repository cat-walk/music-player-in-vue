module.exports = {
  root: true,
  // 要启用的环境
  env: {
    browser: true,
    es6: true,
    node: true,
  },
  // 启用 airbnb 规则
  // extends: 'airbnb-base','@vue/airbnb', 
  extends: ['plugin:vue/essential', 'airbnb-base'],
  // 个人自定义规则
  rules: {
    'no-console': process.env.NODE_ENV === 'production' ? 'error' : 'off',
    'no-debugger': process.env.NODE_ENV === 'production' ? 'error' : 'off',
  },
  // 使用语言及版本
  parserOptions: {
    parser: 'babel-eslint',
    ecmaVersion: 2017,
    sourceType: 'module',
  },
  // parserOptions: {
  //   parser: 'babel-eslint',
  // },
};
