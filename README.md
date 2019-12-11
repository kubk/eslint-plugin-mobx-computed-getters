# eslint-plugin-mobx-computed-getters [![Build Status](https://travis-ci.org/kubk/eslint-plugin-mobx-computed-getters.svg?branch=master)](https://travis-ci.org/kubk/eslint-plugin-mobx-computed-getters)  [![code style: prettier](https://img.shields.io/badge/code_style-prettier-ff69b4.svg?style=flat-square)](https://github.com/prettier/prettier)

ESLint plugin that ensures MobX's computed methods are always getters.

```js
class UserStore {
  @observable firstName = '';
  @observable lastName = '';
  
  // ESLint error: Computed methods should always be getters. Did you miss 'get' keyword?
  @computed fullName() {
    return `${this.firstName} ${this.lastName}`;
  }
}
```

### Installation
1) `npm i eslint-plugin-mobx-computed-getters`
2) Then in your `.eslintrc.json` file add the following line:
```json
"plugins": ["mobx-computed-getters"]
```
Now you can add the rule like so:
```json
{
  "rules": {
    "mobx-computed-getters/computed-getters": "error",
  }
}
```

### Usage with Create React App:
1) Add `EXTEND_ESLINT=true` to your `.env` file
2) Extend your `.eslintrc.json` file from `react-app` config:
```json
{
  "extends": ["react-app"],
  "plugins": ["mobx-computed-getters"],
  "rules": {
    "getter-return": "error",
    "mobx-computed-getters/computed-getters": "error"
  }
}
```
