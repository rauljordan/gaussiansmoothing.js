
var math = require('mathjs');

function kernel (z) {
  return z.map(function (num) {
    return math.exp(-num*num/2) / math.sqrt(2*math.pi);
  });
}

function gaussianRegression (xs, x, y, h) {
  var z = kernel(math.divide(math.subtract(xs, x), h));
  return math.sum(math.multiply(z, y)) / math.sum(z);
}


console.log(gaussianRegression([1,2], [0,1], [9, 3], 1))
