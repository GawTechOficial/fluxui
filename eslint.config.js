import { createRequire } from 'node:module';

const require = createRequire(import.meta.url);

const prettierPlugin = require('eslint-plugin-prettier');
const typescriptPlugin = require('@typescript-eslint/eslint-plugin');
const typescriptParser = require('@typescript-eslint/parser');
const importPlugin = require('eslint-plugin-import');

export default [
  {
    ignores: ['**/dist/**', '**/node_modules/**', '*.config.js', 'packages/*/dist/'],
  },
  {
    files: ['**/*.{js,mjs,ts,mts,d.ts}'],
    plugins: {
      prettier: prettierPlugin,
      import: importPlugin,
    },
    rules: {
      'padding-line-between-statements': [
        'error',
        { blankLine: 'always', prev: ['const', 'let', 'var'], next: '*' },
        { blankLine: 'any', prev: ['const', 'let', 'var'], next: ['const', 'let', 'var'] },
        { blankLine: 'any', prev: ['case', 'default'], next: 'break' },
        { blankLine: 'any', prev: 'case', next: 'case' },
        { blankLine: 'always', prev: '*', next: 'return' },
        { blankLine: 'always', prev: '*', next: 'block' },
        { blankLine: 'always', prev: 'block-like', next: '*' },
        { blankLine: 'always', prev: '*', next: 'block-like' },
        { blankLine: 'always', prev: ['import'], next: ['const', 'let', 'var'] },
      ],
      'import/order': ['error', { 'newlines-between': 'always' }],
      'import/no-unresolved': 'off',
      'import/no-duplicates': 'error',
    },
  },
  {
    files: ['**/*.ts'],
    languageOptions: {
      parser: typescriptParser,
      parserOptions: {
        project: ['./tsconfig.base.json', './packages/*/tsconfig.json', './playgrounds/*/tsconfig.json'],
        tsconfigRootDir: process.cwd(),
        sourceType: 'module',
      },
    },
    plugins: {
      '@typescript-eslint': typescriptPlugin,
    },
    rules: {
      '@typescript-eslint/ban-types': 'off',
      '@typescript-eslint/no-explicit-any': 'off',
      '@typescript-eslint/no-inferrable-types': 'off',
      'arrow-body-style': ['error', 'as-needed'],
      curly: 'warn',
      '@typescript-eslint/member-ordering': [
        'error',
        {
          default: [
            'public-static-field',
            'static-field',
            'instance-field',
            'public-instance-method',
            'public-static-field',
          ],
        },
      ],
      'no-console': 'off',
      'prefer-const': 'error',
    },
  },
  {
    files: ['**/*.js'],
    languageOptions: {
      sourceType: 'module',
    },
    plugins: {
      prettier: prettierPlugin,
    },
    rules: {
      'prettier/prettier': 'error',
    },
  },
];
