'use strict';

require('@code-fellows/supergoose');
const productsModel = require('../lib/models/products/products-model');
const obj = { category:'Cosmetics', name: 'creams', display_name: 'creams', description: 'face cream' };
const editedObj =  { category:'Cosmetics', name: 'creams', display_name: 'creams', description: 'hand cream' };

describe('products Model', () => {
  it('create', () => {
    return productsModel.create(obj).then((result) => {
      Object.keys(obj).forEach((key) => {
        expect(result[key]).toEqual(obj[key]);
      });
    });
  });

  it('get', () => {
    return productsModel.read().then((result) => {
      Object.keys(obj).forEach((key) => {
        expect(result[0][key]).toEqual(obj[key]);
      });
    });
  });

  it('put', () => {
    return productsModel.read().then((result) => {
      const id = result[0]._id;
      return productsModel.update(id,editedObj).then((result) => {
        Object.keys(editedObj).forEach((key) => {
          expect(result[key]).toEqual(editedObj[key]);
        });
      });
    });
  });

  it('delete', () => {
    return productsModel.read().then((result) => {
      const id = result[0]._id;
      return productsModel.delete(id).then((result) => {
        return productsModel.read().then((result2) => {
          expect(result2).toEqual([]);
        });
      });
    });
  });

});