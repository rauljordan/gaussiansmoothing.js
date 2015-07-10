var test = require('tape');
var gaussianSmooth = require('../');

test('timing test', function (t) {
  var x = [1,2,3,4,5,6,7,8,9,10];
  var y = x.map(function(el) { return math.pow(el, 2) + math.randomInt(-10, 10); });
  var h = 5;

  var xs = [];
  var ys = [];

  x.map(function (el) {
    xs.push(el);
    ys.push(gaussianSmooth(el, x, y, h));
  });



    t.equal(typeof Date.now, 'function');
    t.end();
});
