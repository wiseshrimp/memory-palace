'use strict'

const bcrypt = require('bcrypt')
const Sequelize = require('sequelize')
const db = require('APP/db')

const User = db.define('users', {
  name: Sequelize.STRING,
  email: {
    type: Sequelize.STRING,
    validate: {
			isEmail: true,
			notEmpty: true,
		}
  },
  imageUrl: {
    type: Sequelize.STRING,
    validate: {
      isUrl: true
    }
  },
  shippingName: {
      type: Sequelize.STRING,
  },
  shippingLine1: {
      type: Sequelize.STRING,
  },
  shippingLine2: {
      type: Sequelize.STRING,
  },
  shippingCity: {
      type: Sequelize.STRING,
  },
  shippingState: {
      type: Sequelize.STRING,
  },
  shippingZip: {
      type: Sequelize.STRING,
  },
  isAdmin: {
    type: Sequelize.BOOLEAN,
    defaultValue: false
  },
  // We support oauth, so users may or may not have passwords.
  password_digest: Sequelize.STRING,
	password: Sequelize.VIRTUAL
}, {
	indexes: [{fields: ['email'], unique: true,}],
  hooks: {
    beforeCreate: setEmailAndPassword,
    beforeUpdate: setEmailAndPassword,
  },
  instanceMethods: {
    authenticate(plaintext) { // LOGIN
      return new Promise((resolve, reject) =>
        bcrypt.compare(plaintext, this.password_digest,
          (err, result) =>
            err ? reject(err) : resolve(result))
        )
    }
  }
})

function setEmailAndPassword(user) {
  user.email = user.email && user.email.toLowerCase()
  if (!user.password) return Promise.resolve(user)

  return new Promise((resolve, reject) =>
	  bcrypt.hash(user.get('password'), 10, (err, hash) => {
		  if (err) reject(err)
		  user.set('password_digest', hash)
      resolve(user)
	  })
  )
}

module.exports = User

// TO DO: Shipping address // vendor (memories to sell)
