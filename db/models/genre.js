const Sequelize = require('sequelize');
const db = require('APP/db');

const Genre = db.define('genres', {
    name: Sequelize.STRING
});

module.exports = Genre;