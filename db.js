const db = require('mongoose');

db.Promise = global.Promise;

/**
* @method
* @desc Conexion Base de Datos
* @since 1.0.0
* @version 1.0.0
* @param {String} [url] url
* @todo Se conecta a la base de datos Mongodb Cloud
* @returns {Void} 
*/

async function connect(url) {
    await db.connect(url , {
    useNewUrlParser: true, useUnifiedTopology: true
  });
  console.log('[db] Conectada con exito');
}

module.exports = connect;
