'use strict';

/**
 * Server Error handler Module
 * @module errorHandler
 */

module.exports = ( (err, req, res, next) => {
  res.status(500);
  res.statusMessage = `Enternal Server Error`;
  res.json({error: err});
});

