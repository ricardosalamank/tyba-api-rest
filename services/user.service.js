
const boom = require('@hapi/boom');
const User = require('../models/user')
const service = require('./index');

/**
* @class
* @desc Clase User contiene metodos a db
* @since 1.0.0
* @version 1.0.0
*/
class UserService {

  /**
  * @method
  * @desc Creación de Usuarios
  * @since 1.0.0
  * @version 1.0.0
  * @param {Object} [data] data
  * @todo Registra usuario nuevo en la Api
  * @returns {Promise} respuesta usuario creado
  * @throws {reject} Errores en el registro
  */
  async signUp(data) {

    const foundUser = await User.findOne({
      email: data.email
    }).catch(e => {
      throw boom.internal('error user noFound');
    });


    if (foundUser) {
      throw boom.conflict('user is register');
    } else {
      const user = new User({
        email: data.email,
        displayName: data.displayName,
        password: data.password,
        statusLogin: false
      })
      const myUser = new User(user);
      return myUser.save();
    }
  }


  /**
  * @method
  * @desc LogIn Usuario
  * @since 1.0.0
  * @version 1.0.0
  * @param {Object} [data] data
  * @todo Loguea usuario para que el token JWT se encuentro activo
  * @returns {Object} respuesta usuario logueado correctamente, devuelve token para autenticacion JWT
  * @throws {reject} Errores en LogIn de Usuario
  */
  async signIn(data) {

    const foundUser = await User.findOne({
      email: data.email,
      password: data.password
    }).catch(e => {
      throw boom.internal('error user noFound');
    });


    if (!foundUser) {
      throw boom.notFound('user not found');
    }

    foundUser.statusLogin = true;
    foundUser.save();

    return {
      message: 'Te has logueado correctamente',
      token: service.createToken(foundUser)
    };
  }

  /**
  * @method
  * @desc LogOut Usuario
  * @since 1.0.0
  * @version 1.0.0
  * @param {Object} [data] data
  * @todo Cierra Sesion del usuario para que el token JWT se encuentre inactivo
  * @returns {Object} respuesta usuario LogOut Exitoso
  * @throws {reject} Errores en LogOut de Usuario
  */
  async logOut(data) {

    const foundUser = await User.findOne({
      email: data.email
    }).catch(e => {
      throw boom.internal('error user noFound');
    });


    if (!foundUser) {
      throw boom.notFound('user not found');
    }

    foundUser.statusLogin = false;
    foundUser.save();

    return {
      message: 'LogOut Exitoso'
    };
  }

}

module.exports = UserService;
