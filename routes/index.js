const express = require('express');

const usersRouter = require('./users.router');
const restaurantRouter = require('./restaurant.router');

function routerApi(app) {
  const router = express.Router();
  app.use('/api/v1', router);
  router.use('/users', usersRouter);
  router.use('/restaurants', restaurantRouter);
}

module.exports = routerApi;
