const express = require('express');

const usersRouter = require('./users.router');
const restaurantRouter = require('./restaurant.router');
const transactRouter = require('./transact.router');

function routerApi(app) {
  const router = express.Router();
  app.use('/api/v1', router);
  router.use('/users', usersRouter);
  router.use('/restaurants', restaurantRouter);
  router.use('/transact', transactRouter);
}

module.exports = routerApi;
