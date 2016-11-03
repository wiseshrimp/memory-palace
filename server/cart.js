'use strict'

const epilogue = require('./epilogue')
const db = require('APP/db')

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