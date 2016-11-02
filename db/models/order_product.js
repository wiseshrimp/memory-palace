const Sequelize = require('sequelize');
const Product = require('./product');
const Order = require('./order');
var Promise = require('bluebird');
const db = require('APP/db');

var OrderProduct = db.define('order_product', {
	price: {
		type: Sequelize.DECIMAL
	}
});

module.exports = OrderProduct;