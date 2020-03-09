const error = 2;
const warn = 1;
const ignore = 0;

module.exports = {
  extends: [
    'airbnb',
    'plugin:@typescript-eslint/recommended',
    'plugin:prettier/recommended',
    'prettier/@typescript-eslint',
    'plugin:import/typescript',
    'prettier/react',
  ],
  parser: '@typescript-eslint/parser',
  plugins: ['@typescript-eslint', 'prettier', 'react', 'react-hooks'],
  settings: {
    'import/resolver': {
      node: {
        paths: ['src'],
      },
    },
  },
  rules: {
    'import/prefer-default-export': ignore,
    'react/jsx-props-no-spreading': ignore,
    'react/jsx-wrap-multilines': ignore,
    'import/no-extraneous-dependencies': ignore,
    'consistent-return': ignore,
    'react-hooks/rules-of-hooks': error,
    'react-hooks/exhaustive-deps': warn,
    '@typescript-eslint/explicit-function-return-type': ignore,
    'spaced-comment': [error, "always", { "markers": ["/"] }],
    'import/extensions': ignore,
    'react/jsx-filename-extension': [
      warn,
      {
        extensions: ['.js', '.jsx', '.tsx'],
      },
    ],
    '@typescript-eslint/no-unused-vars': [
      error,
      {
        ignoreRestSiblings: true,
      },
    ],
  },
  env: {
    browser: true,
    jest: true,
  },
  overrides: [
    {
      files: [
        '**/*.test.ts',
        '**/*.test.tsx',
      ],
      plugins: ['jest'],
      extends: ["plugin:jest/recommended"],
      env: {
        'jest/globals': true,
      },
      rules: {
        'react/prop-types': ignore,
      },
    },
    {
      files: ['**/*.tsx'],
      rules: {
        'react/prop-types': ignore,
      },
    },
  ],
};
