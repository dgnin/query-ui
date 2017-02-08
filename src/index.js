'use strict';
import queryUI from './main';

/* globals define, module */
(function (factory, root = window) {
  if (typeof define === 'function' && define.amd) {
    define(function () {
      return (root.queryUI = factory());
    });
  } else if (typeof module === 'object' && module.exports) {
    let queryUI = factory();
    module.exports = queryUI;
    root.queryUI = queryUI;
  } else {
    root.queryUI = factory();
  }
}(function () {
  return queryUI;
}, this));
