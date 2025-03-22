/**
 * @type {import("prettier").Config}
 */
const config = {
  semi: true,
  trailingComma: 'es5',
  printWidth: 120,
  tabWidth: 2,
  singleQuote: true,
  useTabs: false,
  importOrder: [
    '<THIRD_PARTY_MODULES>',
    '^@/3_widgets/(.*)$',
    '^@/2_features/(.*)$',
    '^@/1_entities/(.*)$',
    '^@/0_shared/(.*)$',
    '^@/(.*)$',
    '^../(.*)',
    '^./(.*)',
  ],
  plugins: ['@trivago/prettier-plugin-sort-imports'],
};

export default config;
