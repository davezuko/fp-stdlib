const test     = require('ava')
    , { keys } = require('../dist/redash')

test('returns all own properties of an object.', (t) => {
  t.deepEqual(keys({
    foo: true
  , bar: function () {}
  , baz: []
  }), ['foo', 'bar', 'baz'])
})

test('excludes inherited properties', (t) => {
  function SomeClass () {}
  SomeClass.prototype.foo = 'foo'

  const obj = new SomeClass()
  obj.baz = true
  obj.bar = true

  t.deepEqual(keys(obj), ['baz', 'bar'])
})
