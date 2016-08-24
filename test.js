var test = require('tape')
var build = require('./index')

var output
var NIL = { passthru: true }

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
  t.equal(output, 0, '"reset" action')

  output = red(5, { type: 'add', payload: 10 })
  t.equal(output, 15, '"add" action')

  output = red(NIL, { type: '@@redux/INIT' })
  t.equal(output, NIL, 'passthru')

  output = red(NIL, { type: 'toString' })
  t.equal(output, NIL, 'dont call builtins')

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
