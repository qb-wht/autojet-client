import effectorFactories from './rules/effector-factories.mjs';

const plugin = {
  meta: {
    name: '@qb_wht/eslint-plugin',
    version: '1.0.0',
  },
  rules: {
    'effector-factories': effectorFactories,
  },
};

export default plugin;
