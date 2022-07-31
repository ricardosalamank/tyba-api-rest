'use strict'

const jwt = require('jwt-simple')
const moment = require('moment')
const config = require('../config')
const User = require('../models/user')

function createToken (user) {
  const payload = {
    sub: user._id,
    email: user.email,
    iat: moment().unix(),
    exp: moment().add(14, 'days').unix()
  }

  return jwt.encode(payload, config.SECRET_TOKEN)
}

async function decodeToken(token) {
  const payload = jwt.decode(token, config.SECRET_TOKEN)

  const foundUser =  await User.findOne({
    email: payload.email
  }).catch(e => {
    throw boom.internal('error user noFound');
  });
  const decoded = new Promise((resolve, reject) => {
    try {

      if (payload.exp <= moment().unix()) {
        reject({
          status: 401,
          message: 'El token ha expirado'
        })
      }
      console.log(foundUser)
      if (!foundUser.statusLogin) {
        reject({
          status: 401,
          message: 'Token LogOut'
        })
      }
      resolve(payload.sub)
    } catch (err) {
      reject({
        status: 500,
        message: 'Invalid Token'
      })
    }
  })

  return decoded
}

module.exports = {
  createToken,
  decodeToken
}
