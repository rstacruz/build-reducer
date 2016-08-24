# build-reducer

> Write Redux reducers with simpler syntax

build-reducer lets you write [Redux] reducers as individual functions, rather than one huge `switch` block.

[![Status](https://travis-ci.org/rstacruz/build-reducer.svg?branch=master)](https://travis-ci.org/rstacruz/build-reducer "See test builds")

<details open>
<summary>With build-reducer, writing reducers is fun using the ES2015 syntax!</summary>

```js
import buildReducer from 'build-reducer'
import {createStore} from 'redux'

const reducer = buildReducer({
  reset () {
    return {}
  },
  'profile:load' (state, {payload}) {
    return { ...state, profile: payload }
  },
  'profile:reset' (state, action) {
    return { ...state, profile: {} }
  }
})

let store = createStore(reducer)
```
</details>

<details>
<summary>If you were to write this without build-reducer, you'd have to use a big `switch` block.</summary>

```js
/* Traditional Redux reducer without build-reducer */
function reducer (state, action) {
  switch (action.type) {
    case 'reset':
      return {}
    case 'profile:load':
      return { ...state, profile: action.payload }
    case 'profile:reset':
      return { ...state, profile: {} }
    default:
      return state
  }
}

let store = createStore(reducer)
```
</details>

<br>

## Install

```
npm install --save build-reducer
```

build-reducer is available via npm.

```js
var buildReducer = require('build-reducer')    // ES5
import buildReducer from 'build-reducer'       // ES2015+
```

<br>

## API

### buildReducer

> `buildReducer(reducer, [defaultState])`

Creates a function that calls methods from `reducer` based on the given action type.

`defaultState` is optional; if given, it will be used as the state if the state is currently `undefined`.

<br>

## More examples

<details>
<summary>You can use the implicit return arrow syntax if you have very simple functions.</summary>

```js
const reducer = buildReducer({
  'reset':
    () => {}
  'profile:load':
    (state, {payload}) => ({ ...state, profile: payload })
  'profile:reset':
    (state, action) => ({ ...state, profile: {} })
})
```
</details>

<details>
<summary>If you prefer to use `CONSTANTS` instead of strings, you can do that with ES2015's computed property names syntax.</summary>

```js
const RESET = 'RESET'
const LOAD_PROFILE = 'LOAD_PROFILE'
const RESET_PROFILE = 'RESET_PROFILE'

const reducer = buildReducer({
  [RESET] () {
    return {}
  },
  [LOAD_PROFILE] (state, {payload}) {
    return { ...state, profile: payload }
  },
  [RESET_PROFILE] (state, action) {
    return { ...state, profile: {} }
  }
})
```
</details>

<details>
<summary>build-reducer doesn't need ES2015. You can write your reducers in plain ES5.</summary>

```js
const reducer = buildReducer({
  'reset': function () {
    return {}
  },
  'profile:load': function (state, action) {
    return Object.assign({}, state, { profile: action.payload })
  },
  'profile:reset': function (state, action) {
    return Object.assign({}, state, { profile: {} })
  }
})
```
</details>

[Redux]: http://redux.js.org

<br>

## Thanks

**build-reducer** © 2016+, Rico Sta. Cruz. Released under the [MIT] License.<br>
Authored and maintained by Rico Sta. Cruz with help from contributors ([list][contributors]).

> [ricostacruz.com](http://ricostacruz.com) &nbsp;&middot;&nbsp;
> GitHub [@rstacruz](https://github.com/rstacruz) &nbsp;&middot;&nbsp;
> Twitter [@rstacruz](https://twitter.com/rstacruz)

[MIT]: http://mit-license.org/
[contributors]: http://github.com/rstacruz/build-reducer/contributors
