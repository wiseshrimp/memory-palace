const Sequelize = require('sequelize');
const db = require('APP/db');

var Product = db.define('products', {
    title: {
        type: Sequelize.STRING,
        allowNull: false
    },
    price: {
        type: Sequelize.INTEGER,
        allowNull: false
    },
    description: {
        type: Sequelize.TEXT,
        allowNull: false
    },
    keywords: {
        type: Sequelize.ARRAY(Sequelize.STRING)
    },
    imageUrl: {
        type: Sequelize.STRING,
        defaultValue: 'product-images/default.jpg'
    }
});

module.export = Product;

// TO DO: Fix image routes