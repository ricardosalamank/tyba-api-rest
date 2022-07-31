'use strict'

const services = require('../services')
const boom = require('@hapi/boom')

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
