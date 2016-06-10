import _curry2 from './internal/_curry2'

/**
 * @since v0.1.0
 */
var flatMap = _curry2(function flatMap (fn, xs) {
  var i   = 0
    , len = xs.length
    , bs  = []
    , _i
    , b

  for (; i < len; i++) {
    b = fn(xs[i])
    if (Array.isArray(b)) {
      for (_i = 0; _i < b.length; _i++) {
        bs.push(b[_i])
      }
    } else {
      bs.push(b)
    }
  }

  return bs
}, 'flatMap : (a -> b | [b]) -> [a] -> [b]')

export default flatMap