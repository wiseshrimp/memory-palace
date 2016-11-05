'use strict'
const express = require('express');
const router = express.Router();
const db = require('APP/db')

// Custom routes go here.
module.exports = router;

router.get('/', function (req, res, next) {
  db.model('order_product').count({
    attributes: ['product_id'],
    group: ['product_id']
    // ,
    // include: [
    //     {
    //         model: db.model('products')
    //     }
    // ]
  })
  .then(product_order_counts => res.json(product_order_counts))
  .catch(next);
});
