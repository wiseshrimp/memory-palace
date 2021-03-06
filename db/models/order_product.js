const Sequelize = require('sequelize');
var Promise = require('bluebird');
const db = require('APP/db');

var OrderProduct = db.define('order_product', {
	price: {
		type: Sequelize.DECIMAL
	},
	quantity: {
		type: Sequelize.INTEGER
	}
});

module.exports = OrderProduct;
