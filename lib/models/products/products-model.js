'use strict';

const schema = require('../products/products-schema');
const Model = require('../mongo');

/**
 * A product class extended from Model parent class
 * @extends Model 
 */

class Product extends Model {
  constructor() {
    super(schema);
  }
}

/**
 * product model module
 * @module products
 */

module.exports = new Product();