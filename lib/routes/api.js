
'use strict';
const express = require('express');
const categories = require('../models/categories/categories-model');
const products = require('../models/products/products-model');
const router = express.Router();
const basic=require('../../auth/middleware/basic');
const bearer=require('../../auth/middleware/bearer');
const acl=require('../../auth/middleware/acl');

router.param('model', getModel);
function getModel(req, res, next) {
  const model = req.params.model;
  switch (model) {
  case 'categories':
    req.model = categories;
    next();
    return;
  case 'products':
    req.model = products;
    next();
    return;
  default:
    next('invalid model');
    return;
  }
}


router.get('/:model', bearer, acl('read') ,handleGetAll);

router.get('/:model/:id',  bearer, acl('read') , handleGetAllById);

router.post('/:model',  bearer, acl('create')  ,postHandler);

router.put('/:model/:id', bearer, acl('update'), updateByIdHandler);

router.delete('/:model/:id',bearer, acl('delete'), deleteByIdHandler);

/**
 * A function to handle get requests from all routes
 * @param {object} req 
 * @param {object} res 
 * @param {Function} next 
 */

async function handleGetAll (req,res,next){
  try {
    const data = await req.model.read();
    res.json(data);
  } catch (err) {
    next(err.message);
  }
}

/**
 * A function to handle get requests from all routes
 * @param {object} req 
 * @param {object} res 
 * @param {Function} next 
 */

async function handleGetAllById (req,res,next){
  try{
    let id = req.params.id;
    const data = await req.model.read(id);
    res.json(data);
  } catch (err){
    next(err.message);
  }
}

/**
 * A function to handle post requests from all routes
 * @param {object} req 
 * @param {object} res 
 * @param {Function} next 
 */
  
async function postHandler (req,res,next){
  try {
    const data = await req.model.create(req.body);
    res.json(data);
  } catch (e) {
    next(e.message);
  }
}

/**
 * A function to handle update requests from all routes
 * @param {object} req 
 * @param {object} res 
 * @param {Function} next 
 */
  
async function updateByIdHandler (req,res,next){
  try {
    let id = req.params.id;
    const data = await req.model.update(id,req.body);
    res.json(data);
  } catch (e) {
    next(e.message);
  }
}

/**
 * A function to handle delete requests from all routes
 * @param {object} req 
 * @param {object} res 
 * @param {Function} next 
 */
  
async function deleteByIdHandler (req,res,next){
  try {
    let id = req.params.id;
    await req.model.delete(id);
    res.json('Item Deleted');
  } catch (e) {
    next(e.message);
  }
  
}

/**
 * API Module
 * @module apiRouter
 */

module.exports = router;