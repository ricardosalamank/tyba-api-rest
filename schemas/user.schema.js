const Joi = require('joi');

const email = Joi.string().email();
const displayName = Joi.string().min(3).max(15);
const avatar = Joi.string().uri();
const password = Joi.string().min(3).max(15);


const createUserSchema = Joi.object({
  email: email.required(),
  displayName: displayName.required(),
  password: password.required()
});


const singInUserSchema = Joi.object({
  email: email.required(),
  password: password.required()
});

const logOutUserSchema = Joi.object({
  email: email.required()
});

module.exports = { createUserSchema, singInUserSchema, logOutUserSchema}
