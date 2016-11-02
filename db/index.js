'use strict'
const debug = require('debug')('sql')
const chalk = require('chalk')
const Sequelize = require('sequelize')
const app = require('APP')
var Promise = require('bluebird');

const name = (process.env.DATABASE_NAME || app.name) +
  (app.isTesting ? '_test' : '')

const url = process.env.DATABASE_URL || `postgres://localhost:5432/${name}`

console.log(chalk.yellow(`Opening database connection to ${url}`));

// create the database instance
const db = module.exports = new Sequelize(url, {
  logging: debug, // export DEBUG=sql in the environment to get SQL queries 
  native: true,   // lets Sequelize know we can use pg-native for ~30% more speed
  define: {
    underscored: true,       // use snake_case rather than camelCase column names
    freezeTableName: true,   // don't change table names from the one specified
    timestamps: true,        // automatically include timestamp columns
  }
})

// pull in our models
require('./models');
const User = require('./models/user');
const Genre = require('./models/genre');
const Product = require('./models/product');
const Review = require('./models/review');
const Order = require('./models/order');
const Cart = require('./models/cart');

// sync the db, creating it if necessary
function sync(force=app.isTesting) {
  return db.sync({ force: true })
    .then(createProducts)
    .then(createUsers)  
    .then(ok => console.log(`Synced models to db ${url}`))
    .catch(fail => {
      console.log(fail);
      if (app.isProduction) {
        console.error(fail)
        return // Don't do this auto-create nonsense in prod
      }
      // Otherwise, do this autocreate nonsense
      console.log(`Creating database ${name}...`)
      return new Promise((resolve, reject) =>
        require('child_process').exec(`createdb "${name}"`, resolve)
      ).then(() => sync(true))
    })
}

let createProducts = () => {
  return Genre.create({
    name: 'Romantic',
    products: [
      {
        title: 'My wedding day in paraiso',
        price: 67.60,
        description: 'The happiest day of your life'
      },
      {
        title: 'My first kiss',
        price: 3.33,
        description: 'With Matt Parkin'
      }
    ]
  }, { include: [ Product ] });
};

let createUsers = (genre) => {
  return User.create({
    name: 'Bub',
    email: 'bub@sie.com',
    password: '12345'
  });
};

db.didSync = sync();



// user
  // cart
      // cart_product
        // product (*)

// user
  // order
    // order_product (*) - includes price
      // product (*) - from user's cart
  // cart
    // cart_product - empty after products ordered
