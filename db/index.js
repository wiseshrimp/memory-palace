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

// sync the db, creating it if necessary
function sync(force=app.isTesting) {
  return db.sync({ force: true })
    .then(() => {
      var userPromise = User.create({
        name: 'User that has order',
        email: 'RICHUSER@RICH.COM'
      });

      var productPromise = Product.create({
        title: 'Test memory',
        price: 20,
        description: 'Test description'
      });

      var productPromise2 = Product.create({
        title: 'Test memory2',
        price: 50,
        description: 'Test description'
      });

      var productPromise3 = Product.create({
        title: 'Test memory3',
        price: 26,
        description: 'Test description'
      });

      Promise.all([userPromise, productPromise, productPromise2, productPromise3])
        .spread((user, product, product2, product3) => {
          return Promise.all([Order.create({
            productIDs: [product.id, product2.id, product3.id],
            priceAtPurchase: [product.price, product2.price, product3.price]
          }), user])
        })
        .spread((order, user) => user.addOrder(order))
      .catch(err => console.log(err))

    //   var productIDs, priceArray;

    // Promise.all([productPromise, productPromise2, productPromise3])
    //         .spread((product1, product2, product3) => {
    //           productIDs = [product1.id, product2.id, product3.id];
    //           priceArray = [product1.price, product2.price, product3.price]
    //   })
    //   .then(() => {
    //     userPromise.resolve();
    //   })




      // var orderPromise = Promise.all([productPromise, productPromise2, productPromise3])
      //   .spread((product1, product2, product3) => {
      //     Order.create({
      //       productIDs: [product1.id, product2.id, product3.id],
      //       priceAtPurchase: [product1.price, product2.price, product3.price]
      //     })
      //   })
    
      // Promise.all([userPromise, orderPromise])
      //   .spread((user, order) => console.log(order))
      //   .then(console.log('user and order created!'))
      // .catch(err => console.log(err))

// TEST TO MAKE SURE DATABASE IS WORKING:      
  //     var userPromise = User.create({
  //       name: 'Test Bro',
  //       email: 'testbro@test.com'
  //     });

  //     var productPromise = Product.create({
  //       title: 'Test memory',
  //       price: 20,
  //       description: 'Test description'
  //     });

  //     var genrePromise = Genre.create({
  //       name: 'horror'
  //     })
      
      // Promise.all([genrePromise, productPromise])
  //       .spread((genre, product) => genre.addProduct(product))
  //       .then(() => console.log('created genre and product'))
  //       .catch(err => console.log(err));
      
  })  
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

db.didSync = sync()