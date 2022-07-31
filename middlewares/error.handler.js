/**
* @method
* @desc Middleware para el manejo de errores, log de erroes en consola
* @since 1.0.0
* @version 1.0.0
* @returns {next} Siguente Middleware
*/
function logErrors(err, req, res, next) {
  console.log('logErrors');
  console.error(err);
  next(err);
}

/**
* @method
* @desc Middleware para el manejo de errores que no son de Boom
* @since 1.0.0
* @version 1.0.0
* @returns {next} Siguente Middleware
*/
function errorHandler(err, req, res, next) {
  console.log('errorHandler');
  const statusError = err.status || 500;
  res.status(statusError).json({
    message: err.message,
    stack: err.stack,
  });
}

/**
* @method
* @desc Middleware para el manejo de errores Boom
* @since 1.0.0
* @version 1.0.0
* @returns {next} Siguente Middleware
*/
function boomErrorHandler(err, req, res, next) {
  if (err.isBoom) {
    const { output } = err;
    res.status(output.statusCode).json(output.payload);
  }
  next(err);
}


module.exports = { logErrors, errorHandler, boomErrorHandler }
