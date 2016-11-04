'use strict';

//utilizing chance library to generate random information 

var Chance = require('chance');
var chance = new Chance();
var Promise = require('bluebird');
var db = require('APP/db');
var User = require('./db/models/user');
var Product = require('./db/models/product');
var Cart = require('./db/models/cart');
var Order = require('./db/models/order');
var Review = require('./db/models/review');
var OrderProduct = require('./db/models/order_product')

//setting number of instances for each model
var numUsers = 100;
var numCarts = 102;
var numProducts = 10;
var numReviews = 20;
var numOrders = 30;

var emails = chance.unique(chance.email, numUsers);

//performs a function n times, and returns an array of the results
var doTimes = (n, fn) => {
  var results = [];
  while (n--) {
    results.push(fn());
  }
  return results;
}

//generate random genre instances
var randGenre =() => {
  var genres = ["romance", "horror", "feel-good"];
  return chance.pick(genres);
}


//generate random user info
var randUser = () =>  {
  return User.build({
    name: [chance.first(), chance.last()].join(' '),
    email: emails.pop(),
    password: chance.word(),
    isAdmin: chance.weighted([true, false], [5, 95])
  });
}

//generate random titles 
var randTitle = () => {
  var numWords = chance.natural({
    min: 1,
    max: 8
  });
  return chance.sentence({words: numWords})
  .replace(/\b\w/g, function (m) {
    return m.toUpperCase();
  })
  .slice(0, -1);
}

// CAN USE FOR LOGIN TEST:
//generate random user instances
var generateUsers = () => {
  var users = doTimes(numUsers, randUser);
  users.push(User.build({
    name: 'Zeke Nierenberg',
    email: 'zeke@zeke.zeke',
    password: '123',
    isAdmin: true
  }));
  users.push(User.build({
    name: 'Omri Bernstein',
    email: 'omri@zeke.zeke',
    password: '123',
    isAdmin: false
  }));
  return users;
}

// generates random products
// returns array of resolved promises which are passed to generateReviews() in the seed func
var generateProducts = () => {
  return doTimes(numProducts, function (){
  	return Product.create({
	    title: randTitle(),
	    price: chance.floating({min: 1, max: 200, fixed: 2}),
	    description: 'The happiest day of your life',
	    genre: randGenre()
   })
 })
}


// generates reviews then set the product on the review (Review.belongsTo(Product))
var generateReviews = () => {
  return doTimes(numReviews, function (){
  	return Review.create({
  		text: chance.sentence(),
	    rating: chance.integer({min: 1, max: 5})
   })
  	.then(createdReview => {
  		createdReview.setProduct(chance.integer( {min:1, max:10} ) )
  	})
 })
}

//generate random order instances
//sets the user and the product through table
var generateOrders = (users) => {
  return doTimes(numOrders, function (){
  	var user = chance.pick(users);
  	var orderReference;
  	return Order.create({
  		shippingAddress: chance.address()
  	})
  	.then(createdOrder => {
  		return Promise.all([createdOrder.setUser(user), createdOrder])
  	})
  	.spread((usersOrder, createdOrder) => {
  		var prodId = chance.integer({min:1, max:10});
  		return Promise.all([createdOrder.setProducts(prodId), createdOrder.id, prodId])
  	})
  	.spread((orderWithProduct, createdOrderId, prodId) => {
  		return OrderProduct.findOne({
  			where: {
  				order_id: createdOrderId,
  				product_id: prodId
  			}
  		})
  	})
  	.then(orderProduct => {
  		orderReference = orderProduct;
  		return Product.findById(orderProduct.product_id)
  	})
  	.then(foundProduct => {
  		 orderReference.update({
  			price: foundProduct.price
  		})
  	})	
 })
}

//generate random cart instances 
// sets products using belongsToMany through table (cart_product)
//sets user using Cart.belongsToUser
var generateCart = () => {
	return doTimes(numCarts, function(){
		return Cart.create({})
		.then(builtCart => {
			return Promise.all([builtCart.setUser(builtCart.id), builtCart])
		})
		.spread((builtCartUser, builtCart) => {
			return builtCart.setProducts( chance.integer( {min: 1, max: 10} ) )
		})
	})
}

// saves the created user instances from generateUsers(), and resolves the promises
var createUsers = () => {
	return Promise.map(generateUsers(), function(user){
		return user.save();
	})
}


//called by db.sync (on model/index.js)
//creates the dummy data to  be synced 
var seed = () =>  {
  return createUsers()
  .then(function (createdUsers) {
       return generateOrders(createdUsers);
  })
  .then(() => {
  	return generateCart();
  })
  .then(() => {
	return generateProducts()
  })
  .then(generatedProducts => {
  	return generateReviews()
  })
  .catch(err => console.error(err))
}

module.exports = seed; 

