const Sequelize = require('sequelize');
const Product = require('./product');
var Promise = require('bluebird');
const db = require('APP/db');

var Order = db.define('orders', {
    shippingAddress: {
        type: Sequelize.STRING
    }
},
{
    // getterMethods: {
    //     history: function () {
    //         console.log('THIS: ', this);
    //         var prices = this.priceAtPurchase;
    //         console.log('PRICES: ', prices);

    //         Product.findAll(this.productIDs) // > [product1, product2]
    //             .then(function (productArray) {
    //                 return productArray.map((product, i) => {
    //                     console.log('PRODUCT', product)
    //                     product.price = prices[i];
    //                     console.log(product);
    //                     return product;
    //                 })
    //             })
    //             .catch(err => console.log(err));
    //     }
    // }
});

// Order will maintain initial price even if price changes

module.exports = Order;