
const Transact = require('../models/transact')
const jwt = require('jwt-simple')
const config = require('../config')


class TransactService {

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

}

module.exports = TransactService;
