'use strict'

const db = require('APP/db')
const api = module.exports = require('express').Router()

api
  .get('/heartbeat', (req, res) => res.send({ok: true}))
  .use('/auth', require('./auth'))
  .use('/users', require('./users'))
  .use('/products', require('./products'))
  .use('/cart', require('./cart'))
  .use('/mostPopular', require('./mostPopular'))
  .use('/login', require('./login'))
  .use('/orderhistory', require('./order-history'))
  .use('/register', require('./register'))
  .use('/genre', require('./genre'))
  .use('/updateUser', require('./updateUser'))

// Send along any errors
api.use((err, req, res, next) => {
  res.status(500).send(err)
})

// No routes matched? 404.
api.use((req, res) => res.status(404).end())
