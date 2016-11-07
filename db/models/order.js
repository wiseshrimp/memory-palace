const Sequelize = require('sequelize');
const Product = require('./product');
var Promise = require('bluebird');
const db = require('APP/db');

var Order = db.define('orders', {
     orderDate: {
        type: Sequelize.DATEONLY,
        defaultValue: Sequelize.NOW
    },
    shippingName: {
        type: Sequelize.STRING,
        allowNull: false
    },
    shippingLine1: {
        type: Sequelize.STRING,
        allowNull: false
    },
    shippingLine2: {
        type: Sequelize.STRING,
        allowNull: false
    },
    shippingCity: {
        type: Sequelize.STRING,
        allowNull: false
    },
    shippingState: {
        type: Sequelize.STRING,
        allowNull: false
    },
    shippingZip: {
        type: Sequelize.STRING,
        allowNull: false
    },
    shippingTotal: {
        type: Sequelize.DECIMAL
    },
    tax: {
        type: Sequelize.DECIMAL
    },
    subTotal: {
        type: Sequelize.DECIMAL
    },
    total: {
        type: Sequelize.DECIMAL
    }
});

// Order will maintain initial price even if price changes

module.exports = Order;