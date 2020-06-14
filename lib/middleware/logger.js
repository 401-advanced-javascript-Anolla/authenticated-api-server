'use strict';

/**
 * logger function Module
 * @module logger
 */

module.exports = (req, res, next) => {
  req.requestTime = Date.now();
  // console.log(req.requestTime);
  console.log('Request', req.method, req.path, req.requestTime);
  next();
};