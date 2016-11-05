const Sequelize = require('sequelize');
var Promise = require('bluebird');
const db = require('APP/db');

var CartProduct = db.define('cart_product', {
	quantity: {
		type: Sequelize.INTEGER
	}
});

module.exports = CartProduct;