const express = require('express');
const router = express.Router();
const session = require('express-session')
const User = require('APP/db/models/user')

module.exports = router;

router.post('/', (req, res, next) => {
    User.create({
        name: req.body.name,
        email: req.body.email,
        password: req.body.password
    })
    .then(newUser => {
      req.session.user = newUser;
      res.send(newUser)
    })
    .catch(next)
})
