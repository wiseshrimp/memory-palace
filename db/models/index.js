'use strict';

// Require our models. Running each module registers the model into sequelize
// so any other part of the application could call sequelize.model('User')
// to get access to the User model.

const User = require('./user');
const Genre = require('./genre');
const Order = require('./order');
const Product = require('./product');
const Review = require('./review');

User.hasMany(Order);
Genre.hasMany(Product);
Product.hasMany(Review);

module.exports = {User}