'use strict';

const { server } = require('../lib/server'); //this will take only the server method
const supertest = require('supertest');
const mockRequest = supertest(server);



describe('404 error Module', () => {
  it('should respond with 404 on an invalid route', () => {
    return mockRequest.get('/abcd').then(data=> {        
      expect(data.status).toEqual(404); 
    });
  });

  it('should respond with 404 on an invalid method', () => {
    return mockRequest.patch('/abcd').then((results) => {
      expect(results.status).toBe(404);
    });
  });

});
