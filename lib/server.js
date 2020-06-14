'use strict';

// require('dotenv').config();
const express=require('express');
const morgan = require('morgan');
const cors = require('cors');
const notFoundHandler = require('./middleware/404');
const errorHandler=require('./middleware/500');
// const categoriesRouter = require('./routes/categories');
// const productsRouter = require('./routes/products');
const apiRouter = require('./routes/api');
const auth=require('../auth/router');
const app=express();

app.use('/docs', express.static('./docs'));
app.use(express.json()); //body-parser to add body to the req\
app.use(morgan('dev'));
app.use(cors());

// app.use('/api/v1', categoriesRouter);
// app.use('/api/v1', productsRouter);

app.use('/api/v1', apiRouter);
app.use(auth);

app.use('*',notFoundHandler);
app.use(errorHandler);

/**
 * Server Module
 * @module server
 */


module.exports={
  server:app,
  start: (port)=>{
    const PORT =   process.env.PORT  || port ;
    app.listen(PORT,()=>{console.log(`Port ${PORT} is running`);});
  },
};