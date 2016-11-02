const Sequelize = require('sequelize');
const db = require('APP/db');

const Review = db.define('reviews', {
    text: Sequelize.STRING,
    rating: {
        type: Sequelize.INTEGER,
        validate: {
            isInt: true,
            min: 1,
            max: 5
        }
    }
});

module.exports = Review;