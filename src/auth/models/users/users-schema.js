'use strict';

const mongoose = require('mongoose');
const bcryptjs = require('bcryptjs');
const roles=require('./roles-schema'); // it's not used but it's needed 


const users = mongoose.Schema({
  username: { type: String, required: true },
  password: { type: String, required: true},
  role : {
    type : String,
    default : 'user',
    enum : ['administrator', 'editor' ,'writer','user'],
  },
},{toObject:{virtuals:true}, toJSON:{virtuals:true}});

users.virtual('acl', {
  ref:'roles',
  localField:'role', //similar to foreign key in SQL
  foreignField: 'role',
  justOne: true,
});


// before saving
// users.pre('save',async function () {
//   this.password = await bcryptjs.hash(this.password, 5);
// });


module.exports = mongoose.model('users', users);