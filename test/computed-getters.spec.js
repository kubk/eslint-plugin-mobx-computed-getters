const RuleTester = require('eslint').RuleTester;
const rule = require('../src//computed-getters');

const parserOptions = {
  ecmaVersion: 2018,
  sourceType: 'module'
};

const ruleTester = new RuleTester({ parserOptions });

ruleTester.run('computed-getters', rule, {
  valid: [
    {
      code: `
      import { computed } from "mobx-react";
      class A {
        @computed get someMethod() {}
      }
    `,
      parser: require.resolve('babel-eslint')
    },
    {
      code: `
      import { computed } from "mobx-react";
      class A {
        @computed property = 1;
      }
    `,
      parser: require.resolve('babel-eslint')
    },
    {
      code: `
      import { computed } from "mobx-react";
      class A {
        @computed set arg(arg) {}
      }
    `,
      parser: require.resolve('babel-eslint')
    }
  ],
  invalid: [
    {
      code: `
      import { computed } from "mobx-react";
      class A {
        @computed someMethod() {}
      }
    `,
      errors: [
        {
          message: "Computed methods should always be getters. Did you miss 'get' keyword?"
        }
      ],
      parser: require.resolve('babel-eslint')
    },

    {
      code: `
      import { computed } from "mobx-react";
      class A {
        @computed someMethod() {}
        @computed get anotherMethod() {}
        @computed thirdMethod() {}
      }
    `,
      errors: [
        {
          message: "Computed methods should always be getters. Did you miss 'get' keyword?"
        },
        {
          message: "Computed methods should always be getters. Did you miss 'get' keyword?"
        }
      ],
      parser: require.resolve('babel-eslint')
    }
  ]
});
