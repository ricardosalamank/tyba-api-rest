const express = require('express');

const RestaurantService = require('../services/restaurant.service');
const validatorHandler = require('../middlewares/validator.handler');
const auth = require('../middlewares/auth');
const { findRestaurantsSchema } = require('../schemas/restaurant.schema');


const router = express.Router();
const service = new RestaurantService();

router.get('/',
  auth,
  validatorHandler(findRestaurantsSchema, 'query', 'Find Restaurants'),
  async (req, res, next) => {
    try {
      const restaurants = await service.findRestaurant(req.query);
      res.json(restaurants);
    } catch (error) {
      next(error);
    }
  }
);

module.exports = router;
