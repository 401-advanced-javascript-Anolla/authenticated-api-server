'use strict';

/**
 * timestamp function Module
 * @module timeStamp
 */

module.exports=(req,res,next)=>{
  req.requestTime=new Date().toLocaleDateString();
  console.log('Request', req.method, req.path, req.requestTime);
  next();

};