'use strict'
const express = require('express');
const router = express.Router();
const session = require('express-session')
const User = require('APP/db/models/user')

module.exports = router;

router.get('/', function (req, res, next) {
    if (!req.session.counter) req.session.counter = 0;
    console.log(req.session);
    console.log('counter', ++req.session.counter);
    next();
})

router.post('/', (req, res, next) => {
    User.findOne({
        where: {
            email: req.body.email
        }
    })
        .then(foundUser => {
            if (!foundUser) {
                res.sendStatus(401);
            }
            else {
                return Promise.all([foundUser.authenticate(req.body.password), foundUser]);
            }
        })
        .spread((isUser, foundUser) => { //loggedInUser = boolean
            if (isUser) {
                req.session.user = foundUser;
                res.send(foundUser);
            }
            else res.send('Wrong password')
   })
   .catch(next)
})

router.put('/', function (req, res, next) {
    req.session.destroy();
    res.status(200).end();
})

router.get('/me', function (req, res, next) {
    if (req.session.user) {
        res.send(req.session.user);
    } else {
        res.sendStatus(401);
    }
});