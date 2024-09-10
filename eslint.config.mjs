import globals from 'globals';
import pluginJs from '@eslint/js';
import tseslint from 'typescript-eslint';
import eslintConfigPrettier from 'eslint-config-prettier';
import playwright from 'eslint-plugin-playwright';

const { rules: prettierRules } = eslintConfigPrettier;
export default [
  {
    files: ['**/*.{js,mjs,cjs,ts}'],
  },
  { languageOptions: { globals: globals.browser } },
  {
    ignores: ['playwright-report/', 'node_modules/'],
  },
  pluginJs.configs.recommended,
  ...tseslint.configs.recommended,
  eslintConfigPrettier,
  {
    ...playwright.configs['flat/recommended'],
  },
  {
    rules: {
      ...prettierRules,
      'playwright/no-conditional-expect': 'off',
      'playwright/expect-expect': 'off',
      'playwright/no-conditional-in-test': 'off',
    },
  },
];
