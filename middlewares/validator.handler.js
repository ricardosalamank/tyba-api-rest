const boom = require('@hapi/boom');
const TransactService = require('../services/transact.service');

const service = new TransactService();

function validatorHandler(schema, property, transact) {
  return (req, res, next) => {
    const data = req[property];
    const { error } = schema.validate(data, { abortEarly: false });
    service.saveTransact(req, property, transact);
    if (error) {
      next(boom.badRequest(error));
    }
    next();
  }
}

module.exports = validatorHandler;
