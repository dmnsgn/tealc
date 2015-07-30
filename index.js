'use strict';

// https://lodash.com/docs#isEqual
var isEqual = require('lodash.isequal');

module.exports = function (value, other, customizer, thisArg) {
  if (isEqual.apply(this, arguments)) {
    return 'indeed';
  } else {
    return false;
  }
};
