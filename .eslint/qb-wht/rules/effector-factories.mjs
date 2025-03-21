const effectorFactories = {
  meta: {
    messages: {
      Store: 'Store "{{name}}" should be named with prefix "$"',
      Effect: 'Effect "{{name}}" should be named with suffix "Fx"',
    },
    schema: {
      type: 'array',
    },
  },
  create(context) {
    const factoriesPattern = context.options?.[0] || [];

    const reportNamingIssue = (node, messageId, name) => {
      context.report({
        node,
        messageId,
        data: { name },
      });
    };

    return {
      VariableDeclarator(node) {
        if (!node.init || node.init.type !== 'CallExpression' || !node.init.callee?.name) {
          return;
        }

        const factoryConfig = factoriesPattern.find((pattern) => pattern.factoryName === node.init.callee.name);

        if (!factoryConfig) return;

        const { returnPattern } = factoryConfig;

        if (Array.isArray(returnPattern) && node.id.type === 'ArrayPattern') {
          node.id.elements.forEach((element, i) => {
            const effectorEntity = returnPattern[i];
            if (!element?.name) return;

            if (effectorEntity === 'Store' && !element.name.startsWith('$')) {
              reportNamingIssue(element, 'Store', element.name);
            }
            if (effectorEntity === 'Effect' && !element.name.endsWith('Fx')) {
              reportNamingIssue(element, 'Effect', element.name);
            }
          });
        }

        if (
          returnPattern &&
          typeof returnPattern === 'object' &&
          !Array.isArray(returnPattern) &&
          node.id.type === 'ObjectPattern'
        ) {
          node.id.properties.forEach((property) => {
            const keyName = property.key?.name;
            const valueName = property.value?.name;
            if (!keyName || !valueName) return;

            const effectorEntity = returnPattern[keyName];

            if (effectorEntity === 'Store' && !valueName.startsWith('$')) {
              reportNamingIssue(property.value, 'Store', valueName);
            }
            if (effectorEntity === 'Effect' && !valueName.endsWith('Fx')) {
              reportNamingIssue(property.value, 'Effect', valueName);
            }
          });
        }
      },
    };
  },
};

export default effectorFactories;
