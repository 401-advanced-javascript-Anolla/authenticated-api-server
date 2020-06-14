'use strict';

require('dotenv').config();

const server = require ('./lib/server');
const mongoose = require('mongoose');

mongoose.connect(process.env.MONGODB_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});
  

server.start();