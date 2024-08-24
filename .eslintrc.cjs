const WARN = 'warn';
const ERROR = 'error';
const OFF = 'off';

module.exports = {
  env: {
    browser: true,
    es2020: true,
    node: true,
  },
  plugins: ['prettier'],
  extends: ['expo', 'prettier', 'plugin:prettier/recommended'],
  settings: {
    react: {
      version: 'detect',
    },
  },
  parser: '@typescript-eslint/parser',
  parserOptions: {
    project: true,
    tsconfigRootDir: __dirname,
    ecmaVersion: 'latest',
    sourceType: 'module',
  },
  rules: {
    'react/display-name': 'off',
    'prettier/prettier': ERROR,
  },
};
