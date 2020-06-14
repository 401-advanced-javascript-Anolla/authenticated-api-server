'use strict';

require('@code-fellows/supergoose');
const categoriesModel = require('../lib/models/categories/categories-model');
const obj = { name: 'creams', display_name: 'creams', description: 'face cream' };
const editedObj =  {  name: 'creams', display_name: 'creams', description: 'hand cream' };

describe('products Model', () => {
  it('create', () => {
    return categoriesModel.create(obj).then((result) => {
      Object.keys(obj).forEach((key) => {
        expect(result[key]).toEqual(obj[key]);
      });
    });
  });

  it('get', () => {
    return categoriesModel.read().then((result) => {
      Object.keys(obj).forEach((key) => {
        expect(result[0][key]).toEqual(obj[key]);
      });
    });
  });

  it('put', () => {
    return categoriesModel.read().then((result) => {
      const id = result[0]._id;
      return categoriesModel.update(id,editedObj).then((result) => {
        Object.keys(editedObj).forEach((key) => {
          expect(result[key]).toEqual(editedObj[key]);
        });
      });
    });
  });

  it('delete', () => {
    return categoriesModel.read().then((result) => {
      const id = result[0]._id;
      return categoriesModel.delete(id).then((result) => {
        return categoriesModel.read().then((result2) => {
          expect(result2).toEqual([]);
        });
      });
    });
  });

});