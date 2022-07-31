const Joi = require('joi');

const email = Joi.string().email();

const findTransactUserSchema = Joi.object({
  email: email.required()
});

const findTransactSchema = Joi.object({
  email: email
});

module.exports = { findTransactUserSchema, findTransactSchema}
