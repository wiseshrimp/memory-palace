'use strict'

const db = require('APP/db')

const router = require('express').Router()
const Product = require('APP/db/models/product')

// Custom routes go here.

module.exports = router;

router.get('/:genre', (req, res, next) => {
    Product.findAll({ where: { genre: req.params.genre } })
        .then(products => res.send(products))
        .catch(err => next(err))
})