var test = require('tape')
var build = require('./index')

test('buildReducer()', function (t) {
  var red = build({
    'reset': function () {
      return 0
    },
    'add': function (state, action) {
      return state + action.payload
    }
  })

  var output

  output = red({}, { type: 'reset' })
  t.deepEqual(output, 0)

  output = red(5, { type: 'add', payload: 10 })
  t.deepEqual(output, 15)

  t.end()
})
