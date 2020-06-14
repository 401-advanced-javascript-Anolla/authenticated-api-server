'use strict';

const express = require('express');
const products = require('../models/products/products-model');
const router = express.Router();

router.get('/products', getproducts);
router.get('/products/:id', getproductsById);
router.post('/products', postproducts);
router.put('/products/:id', updateproducts);
router.delete('/products/:id', deleteproducts );

async function getproducts (req,res,next){
  try {
    const data = await products.read();
    res.json(data);
  } catch (err) {
    next(err.message);
  }
}

async function getproductsById (req,res,next){
  try{
    let id = req.params.id;
    const data = await products.read(id);
    res.json(data);
  } catch (err){
    next(err.message);
  }
}

async function postproducts (req,res,next){
  try {
    const data = await products.create(req.body);
    res.json(data);
  } catch (e) {
    next(e.message);
  }
}

async function updateproducts (req,res,next){
  try {
    let id = req.params.id;
    const data = await products.update(id,req.body);
    res.json(data);
  } catch (e) {
    next(e.message);
  }
}

async function deleteproducts (req,res,next){
  try {
    let id = req.params.id;
    await products.delete(id);
    res.json('Product Deleted').redirect('/products');
  } catch (e) {
    next(e.message);
  }

}

module.exports = router;
