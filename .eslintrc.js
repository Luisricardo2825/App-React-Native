module.exports = {
  root: true,
  env: {
    browser: true,
    es6: true,
  },
  extends: '@react-native-community',
  parser: '@typescript-eslint/parser',
  plugins: ['@typescript-eslint'],
  rules: {
    'no-shadow': 'off',
    '@typescript-eslint/no-shadow': ['error'],
  },
};
