'use strict';

var normalize = require('../normalize');
var debug = require('../debug');
var utils = require('../utils');

module.exports = function(app, options) {
  return function(val, key, config, schema) {
    if (!val || utils.isEmpty(val)) return null;
    debug.field(key, val);
    return normalize(val, key, config, schema);
  };
};
