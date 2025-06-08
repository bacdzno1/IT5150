// eslint.config.js
import js from '@eslint/js';
import pluginUnusedImports from 'eslint-plugin-unused-imports';

export default [
  js.configs.recommended,
  {
    plugins: {
      'unused-imports': pluginUnusedImports,
    },
    rules: {
      'no-unused-vars': 'off',
      'unused-imports/no-unused-imports': 'error',
      'unused-imports/no-unused-vars': [
        'warn',
        {
          vars: 'all',
          varsIgnorePattern: '^_',
          args: 'after-used',
          argsIgnorePattern: '^_',
        },
      ],
      'no-console': 'off',
    },
  },
];
