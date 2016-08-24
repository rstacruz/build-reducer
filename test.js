var test = require('tape')
var build = require('./index')

var output

test('buildReducer()', function (t) {
  var red = build({
    'reset': function () {
      return 0
    },
    'add': function (state, action) {
      return state + action.payload
    }
  })

  output = red({}, { type: 'reset' })
  t.equal(output, 0)

  output = red(5, { type: 'add', payload: 10 })
  t.equal(output, 15)

  output = red({ passthru: true }, { type: '@@redux/INIT' })
  t.deepEqual(output, { passthru: true })

  t.end()
})

test('default states', function (t) {
  var red = build({
    'add': function (state, action) {
      return state + action.payload
    }
  }, 100)

  output = red(undefined, { type: 'add', payload: 2 })
  t.equal(output, 102)

  output = red(null, { type: 'add', payload: 2 })
  t.equal(output, null + 2)

  output = red(200, { type: 'add', payload: 2 })
  t.equal(output, 202)

  t.end()
})
