'use strict';

/**
 * The parent class that has database methods
 * @constructor
 * @param {object} schema - the schema of the model
 */

class Model {
  constructor(schema) {
    this.schema = schema;
  }
  /** a method to get the data from mongodb  */
  read(_id) {
    const bjectId = _id ? { _id } : {};
    return this.schema.find(bjectId);
  }
  /** a method to create data in mongodb  */
  create(record) {
    const newRecord = new this.schema(record);
    return newRecord.save();
  }
  /** a method to update data in mongodb by passing an id */
  update(_id, record) {
    return this.schema.findByIdAndUpdate(_id, record, { new: true });
  }
  /** a method to delete data in mongodb by passing an id */
  delete(_id) {
    return this.schema.findByIdAndDelete(_id);
  }
}

/**
 *  Model parent class module 
 * @module Model
 */

module.exports = Model;