'use strict';

// Require our models. Running each module registers the model into sequelize
// so any other part of the application could call sequelize.model('User')
// to get access to the User model.
const db = require('APP/db');

const User = require('./user');
const Genre = require('./genre');
const Order = require('./order');
const Product = require('./product');
const Review = require('./review');
const OrderProduct = require('./order-product');
const Cart = require('./cart');
const CartProduct = require('./cart-product');

//currently defining the through tables explicitly and not using a through table shortcut
//maybe we could clean up later and use the syntax for a through table?

User.hasMany(Order);
Genre.hasMany(Product);
Product.hasMany(Review);
Product.hasMany(OrderProduct);
Order.hasMany(OrderProduct);
Product.hasMany(CartProduct);
Cart.hasMany(CartProduct);
User.hasOne(Cart);


module.exports = db;