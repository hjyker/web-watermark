module.exports = {
  root: true,
  parser: 'babel-eslint',
  parserOptions: {
    sourceType: 'module'
  },
  env: {
    browser: true,
  },
  extends: 'airbnb-base',
  rules: {
    'import/prefer-default-export': 0,
    'no-debugger': process.env.NODE_ENV === 'production' ? 2 : 0,
    'no-console': process.env.NODE_ENV === 'production' ? 2 : 0,
    'semi': ['error', 'never'],
    'arrow-body-style': 0,
    'arrow-parens': 0,
    'func-names': 0
  },
}
