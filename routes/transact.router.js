const express = require('express');

const TransactService = require('../services/transact.service');
const validatorHandler = require('../middlewares/validator.handler');
const auth = require('../middlewares/auth');
const { findTransactSchema, findTransactUserSchema } = require('../schemas/transact.schema');


const router = express.Router();
const service = new TransactService();

router.get('/',
  auth,
  validatorHandler(findTransactSchema, 'params', 'Find All Transacts'),
  async (req, res, next) => {
    try {
      const transacts = await service.listTransacts();
      res.json(transacts);
    } catch (error) {
      next(error);
    }
  }
);

router.get('/:email',
  auth,
  validatorHandler(findTransactUserSchema, 'params', 'Find User Transacts'),
  async (req, res, next) => {
    try {
      const product = await service.listTransacts(req.params);
      res.json(product);
    } catch (error) {
      next(error);
    }
  }
);

module.exports = router;
