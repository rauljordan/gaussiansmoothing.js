
var math = require('mathjs');

function kernel (z) {
  return z.map(function (num) {
    return math.exp(-num*num/2) / math.sqrt(2*math.pi);
  });
}

module.exports = function (xs, x, y, h) {
  var z = kernel(math.divide(math.subtract(xs, x), h));
  return math.sum(math.multiply(z, y)) / math.sum(z);
};
