'use strict'

const jwt = require('jwt-simple')
const moment = require('moment')
const config = require('../config')
const User = require('../models/user')

/**
* @method
* @desc Creación de Token
* @since 1.0.0
* @version 1.0.0
* @param {Object} [user] user
* @todo Crea el token deacuerdo a los parametros del usuario con un vecimiento de 14 dias
* @returns {Promise} responde el token 
* @throws {reject} errores en la codificacion del token
*/
function createToken (user) {
  const payload = {
    sub: user._id,
    email: user.email,
    iat: moment().unix(),
    exp: moment().add(14, 'days').unix()
  }

  return jwt.encode(payload, config.SECRET_TOKEN)
}

/**
* @method
* @desc Valida Token
* @since 1.0.0
* @version 1.0.0
* @param {Object} [user] user
* @todo Valida vigencia del token y tambien si este se encuentra activos deacuerdo al LogIn
* @returns {Promise} responde el token 
* @throws {reject} errores en la codificacion del token
*/
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
