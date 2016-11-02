const Sequelize = require('sequelize');
const db = require('APP/db');


//model with nothing in it is just a mapping table
var Cart = db.define('cart', {
	//nothing, just a bucket/grouping table
})

module.exports = Cart;

