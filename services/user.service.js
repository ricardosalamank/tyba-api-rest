
const boom = require('@hapi/boom');
const User = require('../models/user')
const service = require('./index');

class UserService {

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
