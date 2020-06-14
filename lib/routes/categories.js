'use strict';

const express = require('express');
const categories = require('../models/categories/categories-model');
const router = express.Router();

router.get('/categories', getCategories);
router.get('/categories/:id', getCategoriesById);
router.post('/categories', postCategories);
router.put('/categories/:id', updateCategories);
router.delete('/categories/:id', deleteCategories );

async function getCategories (req,res,next){
  try {
    const data = await categories.read();
    res.json(data);
  } catch (err) {
    next(err.message);
  }
}

async function getCategoriesById (req,res,next){
  try{
    let id = req.params.id;
    const data = await categories.read(id);
    res.json(data);
  } catch (err){
    next(err.message);
  }
}

async function postCategories (req,res,next){
  try {
    const data = await categories.create(req.body);
    res.json(data);
  } catch (e) {
    next(e.message);
  }
}

async function updateCategories (req,res,next){
  try {
    let id = req.params.id;
    const data = await categories.update(id,req.body);
    res.json(data);
  } catch (e) {
    next(e.message);
  }
}

async function deleteCategories (req,res,next){
  try {
    let id = req.params.id;
    await categories.delete(id);
    res.json('Category Deleted').redirect('/categories');
  } catch (e) {
    next(e.message);
  }

}

module.exports = router;
