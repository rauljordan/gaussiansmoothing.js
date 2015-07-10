# GaussianSmoothing.js

Implements gaussian kernel regression smoothing in pure javascript

[![Build Status](https://travis-ci.org/rauljordan/gaussiansmoothing.js.svg?branch=master)](https://travis-ci.org/rauljordan/gaussiansmoothing.js)

# Usage


function gaussiansmooth (xs, x, y, h)
  - xs: a current x point being evaluated at
  - x: the array holding all of the data in x
  - y: the array holding all the data in y
  - h: the hyperparameter controlling the width of the RBF kernel

  - return ys: returns a predicted point in y around the given x 


```
> var gaussiansmooth = require('gaussiansmoothing');

```


# Install

With [npm](http://npmjs.org) do:

```
npm install gaussiansmoothing
```


# License - MIT
