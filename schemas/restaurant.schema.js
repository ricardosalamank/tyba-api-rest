const Joi = require('joi');

const latitude = Joi.string().min(3).max(15);
const longitude = Joi.string().min(3).max(15);

const findRestaurantsSchema = Joi.object({
  latitude: latitude.required(),
  longitude: longitude.required()
});

module.exports = { findRestaurantsSchema }
