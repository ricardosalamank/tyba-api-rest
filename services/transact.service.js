
const Transact = require('../models/transact')
const jwt = require('jwt-simple')
const config = require('../config')
const boom = require('@hapi/boom')

/**
* @class
* @desc Clase TransactService contiene metodos transacciones a db
* @since 1.0.0
* @version 1.0.0
*/
class TransactService {

  /**
  * @method
  * @desc Guardar Transacciones realizadas a la Api enviadas en los middlewares
  * @since 1.0.0
  * @version 1.0.0
  * @param {Object,String,String} [req,property,transact]
  * @todo Guarda registro transaccion realizada en Api
  * @returns {Promise} respuesta transaccion guardada
  * @throws {reject} Errores en el registro de la transaccion
  */
  async saveTransact(req, property, transact) {

    let email = req[property].email;

    if (!email) {
      const token = req.headers.authorization.split(' ')[1];
      const payload = jwt.decode(token, config.SECRET_TOKEN)
      email = payload.email;
    }

      const transactNew = new Transact({
        email: email,
        transactName: transact,
        requetsTransact: req[property]
      })
      const myTransact = new Transact(transactNew);
      return myTransact.save();
    
  }

  /**
  * @method
  * @desc Lista historica de Transacciones Realizadas 
  * @since 1.0.0
  * @version 1.0.0
  * @param {Object} [data] data puede ser opcional para filtar por algun tipo de registro
  * @todo Busca historico filtrado si llega informacion adicional del objeto
  * @returns {Promise} respuesta transaccion guardada
  * @throws {reject} Errores en traer el listado.
  */
  async listTransacts(data) {
    const filter = (data) ? data : null;

    const foundTransacts = await Transact.find(filter)
      .catch(e => {
      throw boom.internal('error transact noFound');
    });

    if (foundTransacts.length == 0) {
      throw boom.notFound('transacts not found');
    } 
    return foundTransacts;
  }

}

module.exports = TransactService;
