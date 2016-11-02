const Sequelize = require('sequelize');
const db = require('APP/db');

var CartProduct = db.define('cart_product', {
	//nothing, this is just a through table
})

module.exports = CartProduct;
