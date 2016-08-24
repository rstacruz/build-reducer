module.exports = function buildReducer (reducers, defaultState) {
  var useDefaultState = arguments.length > 1

  return function (state, action) {
    if (useDefaultState && state === undefined) {
      state = defaultState
    }

    var fn = reducers[action.type]
    return fn ? fn(state, action) : state
  }
}
