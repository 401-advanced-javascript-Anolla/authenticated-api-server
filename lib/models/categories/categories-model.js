'use strict';

const schema = require('../categories/categories-schema');
const Model = require('../mongo');

/**
 * A category class extended from the parent Model class
 * @extends Model
 */

class Category extends Model {
  constructor() {
    super(schema);
  }
}

/**
 * A categories model module
 * @module categories
 */

module.exports = new Category();