const Sequelize = require('sequelize');
const Product = require('./product');
var Promise = require('bluebird');
const db = require('APP/db');

var Order = db.define('orders', {
    productIDs: Sequelize.ARRAY(Sequelize.INTEGER),
    priceAtPurchase: Sequelize.ARRAY(Sequelize.INTEGER),
    shippingAddress: {
        type: Sequelize.STRING
    }
},
{
    getterMethods: {
        history: function () {
            var prices = this.priceAtPurchase;
            Product.findAll(this.productIDs) // > [product1, product2]
                .then(function (productArray) {
                    return productArray.map((product, i) => {
                        product.price = prices[i];
                        return product;
                    })
                })
                .catch(next);
        }
    }
});

// Order will maintain initial price even if price changes

module.exports = Order;