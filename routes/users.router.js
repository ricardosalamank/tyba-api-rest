const express = require('express');

const UserService = require('./../services/user.service');
const validatorHandler = require('./../middlewares/validator.handler');
const { createUserSchema, singInUserSchema, logOutUserSchema } = require('./../schemas/user.schema');


const router = express.Router();
const service = new UserService();

router.post('/signup',
  validatorHandler(createUserSchema, 'body','Create User'),
  async (req, res, next) => {
    try {
      const body = req.body;
      const newUser = await service.signUp(body);
      console.log(newUser);
      res.status(201).json(newUser);
    } catch (error) {
      next(error);
    }
  }
);

router.post('/signin',
  validatorHandler(singInUserSchema, 'body', 'Signin User'),
  async (req, res, next) => {
    try {
      const body = req.body;
      const newUser = await service.signIn(body);
      res.status(201).json(newUser);
    } catch (error) {
      next(error);
    }
  }
);

router.post('/logout',
  validatorHandler(logOutUserSchema, 'body', 'LogOut User'),
  async (req, res, next) => {
    try {
      const body = req.body;
      const logOut = await service.logOut(body);
      res.status(201).json(logOut);
    } catch (error) {
      next(error);
    }
  }
);


module.exports = router;
