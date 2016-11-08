'use strict'

const epilogue = require('./epilogue')
const express = require('express')
const router = express.Router()
const db = require('APP/db')
const CartProduct = db.model('cart_product')
const Cart = db.model('cart')

const customCartRoutes = require('express').Router()

// Custom routes go here.

module.exports = customCartRoutes;

// Epilogue will automatically create standard RESTful routes
const cart = epilogue.resource({
  model: db.model('cart'),
  endpoints: ['/cart', '/cart/:id'],
  include: [
      {
          model: db.model('products')
      }
  ]
})

//express route to add something to cart_product
customCartRoutes.post('/addProduct', (req,res,next) => {
	Cart.findOne({
		where: {user_id: req.body.user}
	})
	.then(foundCart => {
		const createCartPromise = CartProduct.create({
			cart_id: foundCart.id,
			product_id: req.body.productId,
			quantity: req.body.quantity
		})
		return Promise.all([createCartPromise])
	})
	.then(createdCartProduct => res.send(createdCartProduct))
	.catch(next)
});


//update cart quantity
customCartRoutes.post('/update', (req,res,next) => {
	let cartId;

	Cart.findOne({
		where: {user_id: req.body.login_user}
	})
	.then(foundCart => {
		cartId = foundCart.id;
		return Promise.all(req.body.products.map(e => {
			CartProduct.update({
				quantity: e.cart_product.quantity
			}, {
				where: {
					cart_id: foundCart.id,
					product_id: e.id
				}
			})
		}))
	})
	.then(() => {
		Cart.findOne({
			where: {
				id: cartId
			}, include: [
				{
					model: db.model('products')
				}
			]
		})
		.then(foundCart => res.json(foundCart))
	})
	.catch(next)
});
