'use strict';

// Require our models. Running each module registers the model into sequelize
// so any other part of the application could call sequelize.model('User')
// to get access to the User model.
const db = require('APP/db');

const User = require('./user');
const Order = require('./order');
const Product = require('./product');
const Review = require('./review');
const Cart = require('./cart');
const OrderProduct = require('./order_product');


User.hasMany(Order);
Product.hasMany(Review);
Review.belongsTo(Product);
Order.belongsToMany(Product, {through: OrderProduct});
Order.belongsTo(User);
Cart.belongsToMany(Product, {through: "cart_product"});
Cart.belongsTo(User);


module.exports = db;