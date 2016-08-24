# build-reducers

> Write Redux reducers with simpler syntax

build-reducers lets you write [Redux] reducers as individual functions, rather than one huge `switch` block.

[![Status](https://travis-ci.org/rstacruz/build-reducer.svg?branch=master)](https://travis-ci.org/rstacruz/build-reducer "See test builds")

```js
import buildReducers from 'build-reducers'
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

If you were to write this without build-reducers, you'd have to use a big `switch` block.

<details>
<summary>Traditional Redux example</summary>

```js
/* Traditional Redux reducer without build-reducers */
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

## More examples

- You can use the implicit return arrow syntax to build shorter functions.

  <details>
  <summary>See example</summary>

  ```js
  /* build-reducers reducer */
  const reducer = buildReducer({
    'reset': () => {}
    'profile:load': (state, {payload}) => { ...state, profile: payload }
    'profile:reset': (state, action) => { ...state, profile: {} }
  })
  ```
  </details>

- build-reducers doesn't need ES2015. You can write your reducers in plain ES5.

  <details>
  <summary>See example</summary>

  ```js
  /* build-reducers */
  const reducer = buildReducer({
    'reset': function () {
      return {}
    },
    'profile:load': function (state, {payload}) {
      return Object.assign({}, state, { profile: payload })
    },
    'profile:reset': function (state, action) {
      return Object.assign({}, state, { profile: {} })
    }
  })
  ```
  </details>

[Redux]: http://redux.js.org

## Thanks

**build-reducer** © 2016+, Rico Sta. Cruz. Released under the [MIT] License.<br>
Authored and maintained by Rico Sta. Cruz with help from contributors ([list][contributors]).

> [ricostacruz.com](http://ricostacruz.com) &nbsp;&middot;&nbsp;
> GitHub [@rstacruz](https://github.com/rstacruz) &nbsp;&middot;&nbsp;
> Twitter [@rstacruz](https://twitter.com/rstacruz)

[MIT]: http://mit-license.org/
[contributors]: http://github.com/rstacruz/build-reducer/contributors
