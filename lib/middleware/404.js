'use strict';

/**
 * Not found function Module
 * @module notFoundHandler
 */

module.exports = (req, res) => {
  res.status(404);
  res.statusMessage = 'Not Found';
  res.json({ error: 'Route Not Found' });
};