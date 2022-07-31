const express = require('express');
const cors = require('cors');
const routerApi = require('./routes');
const config = require('./config')
const db = require('./db');

const { logErrors, errorHandler, boomErrorHandler } = require('./middlewares/error.handler');

const app = express();
const port = 3000;

app.use(express.json());

/*
Se deja comentado para mas adelante un implementacion de white list

const whitelist = ['http://localhost:8080', 'https://myapp.co','null'];
const options = {
  origin: (origin, callback) => {
    if (whitelist.includes(origin) || !origin) {
      callback(null, true);
    } else {
      callback(new Error('no permitido'));
    }
  }
}*/

/*
* @desc Capa de Conexion y CORS
*/
app.use(cors());
db(config.db);

app.get('/', (req, res) => {
  res.send('Hola mi server en express');
});


routerApi(app);

/*
* @desc Capa de Middlewares
*/
app.use(logErrors);
app.use(boomErrorHandler);
app.use(errorHandler);

app.listen(config.port, () => {
  console.log(`API REST corriendo en http://localhost:${config.port}`)
});
