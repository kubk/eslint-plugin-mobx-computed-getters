const messages = {
  getterRequired: "Computed methods should always be getters. Did you miss 'get' keyword?"
};

module.exports = {
  name: 'computed-getters',
  meta: {
    docs: {
      description: 'Ensure that computed methods are always getters',
      category: 'Possible Errors',
      recommended: true
    },
    messages: messages
  },
  create(context) {
    return {
      MethodDefinition: function(node) {
        if (node.decorators) {
          if (node.decorators[0].expression.name === 'computed' && node.kind === 'method') {
            context.report({
              node: node.decorators[0],
              message: messages.getterRequired
            });
          }
        }
      }
    };
  }
};
