'use strict'

const epilogue = require('./epilogue')
const db = require('APP/db')

const customProductRoutes = require('express').Router() 

// Custom routes go here.

module.exports = customProductRoutes

// Epilogue will automatically create standard RESTful routes
const products = epilogue.resource({
  model: db.model('products'),
  endpoints: ['/products', '/products/:id'],
  search: {
    param: 'searchAllProducts', // will be string
    attributes: ['title', 'description', 'keywords'], // array of strings that corresponds to the column names in products database
    operator: '$iLike'
  }
})