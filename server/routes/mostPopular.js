'use strict'
const express = require('express');
const router = express.Router();
const db = require('APP/db')
const Sequelize = require('sequelize')


// Custom routes go here.
module.exports = router;

router.get('/', function (req, res, next) {
  db.model('order_product').findAll({
    attributes: ['product_id',[Sequelize.fn('COUNT', Sequelize.col('product_id')), 'Product_Count']],
    group: ['product_id'],
    order: [[Sequelize.fn('COUNT', Sequelize.col('product_id')),'DESC']]
  })
  .then(product_order_counts => res.json(product_order_counts))
  .catch(next);
});
