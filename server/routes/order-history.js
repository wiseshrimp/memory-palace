'use strict'

const epilogue = require('./epilogue')
const express = require('express')
const db = require('APP/db')
const Promise = require('bluebird')
const router = express.Router()
const Orders = db.model('orders');
const User = db.model('users');

module.exports = router;


router.get('/:userId', function(req,res,next){
	Orders.findAll({
		where: { user_id: req.params.userId },
		include: [ { model: db.model('products') } ]
	})
	.then(orders => {
		res.send(orders);
	})
	.catch(next)
});
