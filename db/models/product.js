const Sequelize = require('sequelize');
const db = require('APP/db');

var Product = db.define('products', {
    title: {
        type: Sequelize.STRING,
        allowNull: false
    },
    price: {
        type: Sequelize.DECIMAL,
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
    },
    genre: {
        type: Sequelize.ENUM("romance", "horror", "feel-good")
    }
},
{
    instanceMethods: {
        test: function () {
            console.log('hello')
        }
    }
});

module.exports = Product;

// TO DO: Fix image routes