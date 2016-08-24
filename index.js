module.exports = function buildReducer (reducers) {
  return function (state, action) {
    var fn = reducers[action.type]
    return fn ? fn(state, action) : state
  }
}
