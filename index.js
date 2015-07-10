
var math = require('mathjs');

function kernel (z) {
  z.map(function (num) {
    return math.exp(-num*num/2) / math.sqrt(2*math.pi);
  });
}

function gaussianRegression (xs, x, h) {
  return math.divide(math.subtract(xs, x), h);
}

console.log(gaussianRegression([3.0,1.0], [3.0, 0.8], 1.0))
