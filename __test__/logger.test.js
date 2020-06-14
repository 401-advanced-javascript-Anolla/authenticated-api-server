'use strict';

const loggerMiddleware = require('../lib/middleware/logger'); 


describe('logger Middleware Module', () => {
  let consoleSpy;
  const req = {};
  const res = {};
  const next = jest.fn(); // will create a function


  beforeEach(() => {
    consoleSpy = jest.spyOn(console, 'log').mockImplementation();
  });
  afterEach(() => {
    consoleSpy.mockRestore();
  });

  
  it('logs the output', () => {
    loggerMiddleware(req, res, next);
    expect(consoleSpy).toHaveBeenCalled();
  });

});
