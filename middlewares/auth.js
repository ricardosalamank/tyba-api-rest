'use strict'

const services = require('../services')
const boom = require('@hapi/boom')

/**
* @method
* @desc Middleware validacion de autenticacion JWT
* @since 1.0.0
* @version 1.0.0
* @todo valida he identifica errores con el token de autenticacion
* @returns {next} Siguente Middleware
* @throws {reject} Errores Boom
*/
async function isAuth(req, res, next) {
  try {
    if (!req.headers.authorization) {
      throw boom.unauthorized('No tienes autorización');

    }

    const token = req.headers.authorization.split(' ')[1]

    if (token.split('.').length != 3) {
      throw boom.badRequest('Token Invalido');
    }

    services.decodeToken(token)
      .then(response => {
        req.user = response
        next()
      }).catch(function (e) {
        next(e)
      });
  } catch (error) {
    next(error);
  }

  
}

module.exports = isAuth
