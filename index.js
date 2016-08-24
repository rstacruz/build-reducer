module.exports = function buildReducer (reducers, defaultState) {
  var useDefaultState = arguments.length > 1

  return function (state, action) {
    if (useDefaultState && state === undefined) {
      state = defaultState
    }

    if (!reducers.hasOwnProperty(action.type)) return state

    var fn = reducers[action.type]
    return fn(state, action)
  }
}
