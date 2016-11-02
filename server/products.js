'use strict'

const epilogue = require('./epilogue')
const db = require('APP/db')

const customProductRoutes = require('express').Router() 

// Custom routes go here.
module.exports = customProductRoutes

const products = epilogue.resource({
  model: db.model('products'),
  endpoints: ['/products', '/products/:id']
})
