import { FlatCompat } from '@eslint/eslintrc';
import { dirname } from 'path';
import { fileURLToPath } from 'url';
import qbWhtEslintPluginFSD from './.eslint/qb-wht/index.mjs';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const compat = new FlatCompat({
  baseDirectory: __dirname,
});

const eslintConfig = [
  ...compat.extends('next/core-web-vitals', 'next/typescript'),
  {
    plugins: {
      '@qb_wht/eslint-plugin': qbWhtEslintPluginFSD,
    },

    rules: {
      '@qb_wht/eslint-plugin/effector-factories': [
        'error',
        [
          { factoryName: 'testFactory', returnPattern: { $store: 'Store', effectFx: 'Effect', event: 'Event' } },
          { factoryName: 'testFactory2', returnPattern: ['Store', 'Event', 'Effect'] },
        ],
      ],
    },
  },
];

export default eslintConfig;
