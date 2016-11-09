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
var numUsers = 10;
var numCarts = 12;
var numProducts = 10;
var numReviews = 50;
var numOrders = 100;

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
  var genres = ["romance", "horror", "feel-good", "comedy", "mystery", "thriller", "drama"];
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
    min: 2,
    max: 2
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
    name: 'Elliot McNary',
    email: 'elliot@elliotiscool.com',
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
var randProduct = () =>  {
  return Product.create({
    title: randTitle(),
    price: chance.floating({min: 1, max: 200, fixed: 2}),
    description: 'The happiest day of your life',
    genre: randGenre()
  })
}

// ENTER MEMORIES HERE; add your images to public/product-images
var generateProducts = () => {
  var products = doTimes(0, randProduct);
  products.push(Product.create({
    title: "Learning how to ride a bike at 21",
    price: chance.floating({min: 1, max: 200, fixed: 2}),
    description: 'A grown, clumsy woman rents a CitiBike and learns how to ride a bike in a Rite Aid parking lot. Does that sound like a thriller or what?',
    genre: "thriller",
    imageUrl: "product-images/sue-2.png"
  }))
   products.push(Product.create({
    title: "Getting high with Chief Keef",
    price: 4.20,
    description: "All out of that Mary Jane? Get a virtual toking experience with the master Chief Keef himself!",
    genre: "feel-good",
    imageUrl: "product-images/chief-keef.jpg"
  }))
  products.push(Product.create({
    title: "Sealab's Halloween Show 2014",
    price: 60,
    description: 'We played a house show on Halloween. I dressed up as funky Uncle Sam (Funkle Sam), my drummer was Spider-Man, and my singer was Tyrone Biggums. The wig made it unbearably hot and sweaty, and my glasses kept sliding off of my face. During our encore song, the lights went out and everyone lost their shit. Amazing vibes.',
    genre: "feel-good",
    imageUrl: "product-images/spidey.png"
  }))
  products.push(Product.create({
    title: "First encounter with a lion",
    price: 80,
    description: "My first visit to a petting zoo in Sri Lanka. There was a section where you could pet lion cubs. I was too afraid to touch them, but my brother was much braver. You could also stick your head inside an adult lion's open mouth. About a week later, the zoo was shut down because someone got brutally mauled.",
    genre: "horror",
    imageUrl: "product-images/lions.png"
  }))
  products.push(Product.create({
    title: "Sippin' on that sweet coconut",
    price: 20.50,
    description: "Drinking a delicious coconut on the side of the road",
    genre: "romance",
    imageUrl: "product-images/coconut.png"
  }))

  products.push(Product.create({
    title: "Sand Dunes in Namibia",
    price: 9.55,
    description: "Come experience Sosussvlei, home to the largest sand dunes in the world. Come see animals, roll down sand dunes, and campout with Paul, Diana, and Adrian.",
    genre: "feel-good",
    imageUrl: "product-images/sand-dunes.png"
  }))

  products.push(Product.create({
    title: "Learning React-Redux",
    price: 18.33,
    description: "It's kind of like ripping off your skin with a pencil eraser but in a kind of enjoyable way. By the end of this magical experience, you will be able to this.setState({kill: me})",
    genre: "horror",
    imageUrl: "product-images/react.png"
  }))
  products.push(Product.create({
    title: "Playing Shogi during a snowstorm",
    price: 420.00,
    description: "The year was 2015. The place was DC. There was a snowstorm and we all stayed home and chilled around the fireplace. I played a riveting game of shogi, which is essentially Japanese zombie chess, with Damon. Find out who won...",
    genre: "thriller",
    imageUrl: "product-images/shogi.png"
  }))
  products.push(Product.create({
    title: "Chilling in a cat cafe",
    price: 27.50,
    description: "I hung out with some furry friends in a cat cafe, while soft lullaby music played in the background.",
    genre: "comedy",
    imageUrl: "product-images/catcafe.png"
  }))
  products.push(Product.create({
    title: "Going to a bar called Ganja Acid",
    price: 80.00,
    description: "My brother and I went to a bar named Ganja Acid in Osaka. It was a tiny room, super dark, and the owner was a long-haired man who served us beer brewed with hemp. We all got drunk and he and the other regulars started showing us ridiculous Youtube videos.",
    genre: "mystery",
    imageUrl: "product-images/ganjaacid.png"
  }))
    products.push(Product.create({
    title: "Dashing through the Jonas",
    price: 6.50,
    description: "After the infamous January 2016 blizzard JONAS, a couple takes a walk through snow-covered car-free streets. It's like super romantic and pretty awesome.",
    genre: "romance",
    imageUrl: "product-images/jonas.png"
  }))
   products.push(Product.create({
    title: "Fantastic Ferry Ride",
    price: 5.95,
    description: "We decided to jump on the east river ferry on a quiet Thursday night. Little did we know we had just purchased a $4 ticket to relive the Sandra Bullock movie - Speed (sans bomb). The ferry driver was blasting rock music on the deck as he sped down the east river at speeds I am pretty sure are illegal for the ferry. All of us, holding on for our dear lives as he Fast-and-the-Furios Six-Tokyo-drifted to each port. ",
    genre: "thriller",
    imageUrl: "product-images/fantastic-ferry-ride.png"
  }))
    products.push(Product.create({
    title: "Mom Wears Black To My Wedding",
    price: 100.10,
    description: "I head to the wedding venue early with friends to get ready. My mother shows up to the most important day of my life wearing the most taboo color a mother could wear on this day -- black. Cue Bridezilla and Mommazilla. The most delicious drama ensues. Grab your popcorn for this one folks!",
    genre: "drama",
    imageUrl: "product-images/mom-wears-black.png"
  }))
    products.push(Product.create({
    title: "My first Nutella Cone",
    price: 8.50,
    description: "A bright, beautiful, 20-something girl tries her first $10 ice cream cone in NYC. It's a confusing experience.",
    genre: "mystery",
    imageUrl: "product-images/nutella-cone.png"
  }))

  return products;
}


// generates reviews then set the product on the review (Review.belongsTo(Product))
var generateReviews = () => {
  return doTimes(numReviews, function (){
  	return Review.create({
  		text: chance.sentence(),
	    rating: chance.integer({min: 1, max: 5})
   })
  	.then(createdReview => {
  		return createdReview.setProduct(chance.integer( {min:1, max:14} ) )
  	})
    .then(createdReview => {
      return createdReview.setUser(chance.integer( {min:1, max:12} ))
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
  		shippingName: chance.name(),
      shippingLine1: chance.address(),
      shippingLine2: "Apt 2",
      shippingCity: chance.city(),
      shippingState: chance.state(),
      shippingZip: chance.zip(),
      shippingTotal: 6.95,
      tax: 1.95,
      total: 17.38,
      subTotal: 13.50
  	})
  	.then(createdOrder => {
  		return Promise.all([createdOrder.setUser(user), createdOrder])
  	})
  	.spread((usersOrder, createdOrder) => {
  		var prodId = chance.integer({min:1, max:13});
  		return Promise.all([createdOrder.addProducts(prodId, prodId+1), createdOrder.id, prodId])
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
  			price: foundProduct.price,
        quantity: chance.integer({min: 1, max: 10})
  		})
  	})
 })
}

var addOrderToElliot = () => {
  return Order.findAll({where: {
    user_id: 9
    }
  })
  .then(elliotOrders => {
		var prodId = chance.integer({min:1, max:13});
    return Promise.all(elliotOrders.map(order => {
      order.addProduct(prodId)
    }))
  })
}

//generate random cart instances
// sets products using belongsToMany through table (cart_product)
//sets user using Cart.belongsToUser
var generateCart = () => {
	return doTimes(numCarts, function(){
		return Cart.create({})
		.then(builtCart => Promise.all([builtCart.setUser(builtCart.id), builtCart]) )
		.spread((builtCartUser, builtCart) => builtCart.setProducts( chance.integer( {min: 1, max: 14} ) ) )
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
  .then(generateOrders)
  .then(generateCart)
  .then(generateProducts)
  .then(generateReviews)
  .then(addOrderToElliot)
  .catch(err => console.error(err))
}

module.exports = seed;
