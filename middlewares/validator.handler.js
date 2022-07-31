const boom = require('@hapi/boom');
const TransactService = require('../services/transact.service');

const service = new TransactService();

/**
* @method
* @desc Middlewares dinamicos para validar los schemas de JOI
* @since 1.0.0
* @version 1.0.0
* @param {Object, String, String} [schema, property, transact)] 
* @todo Crea Middlewares dinamicos para validacion de los parametros enviados a la API
* @returns {next} Siguente Middleware
* @throws {reject} Errores Boom
*/
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
