const Sequelize = require('sequelize');
const db = require('APP/db');

var OrderProduct = db.define('order_product', {
	price: Sequelize.DECIMAL
})

module.exports = OrderProduct;