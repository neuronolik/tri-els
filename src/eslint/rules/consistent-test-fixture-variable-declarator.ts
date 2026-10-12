import { AST_NODE_TYPES, ESLintUtils } from '@typescript-eslint/utils';

const createRule = ESLintUtils.RuleCreator(
  (name) =>
    `https://github.com/ynotdraw/slab-elements/blob/main/src/eslint/rules/${name}.ts`,
);

export const consistentTestFixtureVariableDeclarator = createRule({
  name: 'consistent-test-fixture-variable-declarator',
  meta: {
    docs: {
      description:
        'Standardizes variable declarators in test files using fixture().',
    },
    type: 'suggestion',
    messages: {
      consistentNaming:
        'Prefer the variable name for the fixture to be "host".',
    },
    schema: [],
  },
  defaultOptions: [],
  create(context) {
    return {
      VariableDeclarator(node) {
        const isFixture =
          node.init?.type === AST_NODE_TYPES.AwaitExpression &&
          node.init.argument?.type === AST_NODE_TYPES.CallExpression &&
          node.init.argument.callee?.type === AST_NODE_TYPES.Identifier &&
          node.init.argument.callee.name === 'fixture' &&
          node.init.argument.arguments.length > 0;

        if (!isFixture) {
          return;
        }

        if (
          node.id.type === AST_NODE_TYPES.Identifier &&
          node.id.name !== 'host'
        ) {
          context.report({
            node: node.id,
            messageId: 'consistentNaming',
          });
        }
      },
    };
  },
});
