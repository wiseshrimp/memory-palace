const express = require('express');
const router = express.Router();
const session = require('express-session');
const User = require('APP/db/models/user')

module.exports = router;

router.put('/:userId', function (req, res, next) {
  User.findById(req.params.userId) //insert id message
  .then(foundUser => {
    foundUser.update(req.body)
  })
  .then(updatedUser => {
    req.session.user = updatedUser;
    console.log(req.session.user)
    res.send(req.session.user);
  })
  .catch(next)
})
