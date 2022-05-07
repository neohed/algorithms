module.exports = {
  parser: '@typescript-eslint/parser',
  parserOptions: {
    project: 'tsconfig.json',
    sourceType: 'module',
  },
  plugins: ['@typescript-eslint/eslint-plugin'],
  extends: [
    'plugin:@typescript-eslint/recommended',
    'airbnb-base',
    'airbnb-typescript/base'
  ],
  root: true,
  env: {
    node: true,
  },
  ignorePatterns: ['.eslintrc.js'],
  rules: {
    '@typescript-eslint/interface-name-prefix': 'off',
    '@typescript-eslint/explicit-function-return-type': 'off',
    '@typescript-eslint/explicit-module-boundary-types': 'off',
    '@typescript-eslint/no-explicit-any': 'off',
    '@typescript-eslint/object-curly-spacing': 'off',
    '@typescript-eslint/comma-dangle': 'off',
    '@typescript-eslint/semi': 'off',
    'no-trailing-spaces': 'off',
    'function-paren-newline': 'off',
    'no-console': 'off',
    'prefer-template': 'off',
    'arrow-parens': 'off',
    'class-methods-use-this': 'off',
  },
};
