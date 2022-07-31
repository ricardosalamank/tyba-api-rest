const express = require('express');

const usersRouter = require('./users.router');
const restaurantRouter = require('./restaurant.router');
const transactRouter = require('./transact.router');

/**
* @method
* @desc Centralizacion Router Principal
* @since 1.0.0
* @version 1.0.0
* @param {Object} [app] data
* @todo Se centraliza y se distribuye los routers por funcionalidad.
* @returns {Void} 
*/
function routerApi(app) {
  const router = express.Router();
  app.use('/api/v1', router);
  router.use('/users', usersRouter);
  router.use('/restaurants', restaurantRouter);
  router.use('/transact', transactRouter);
}

module.exports = routerApi;
