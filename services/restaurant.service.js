
const boom = require('@hapi/boom');
const axios = require("axios");
const config = require('../config')

/**
* @class
* @desc Clase RestaurantService contiene metodos a db
* @since 1.0.0
* @version 1.0.0
*/
class RestaurantService {

  /**
  * @method
  * @desc Busqueda de Restaurantes por coordenadas
  * @since 1.0.0
  * @version 1.0.0
  * @param {Object} [data] data
  * @todo Busca deacuerdo a las coordenadas envidas en el objeto
  * @returns {[]Object} respuesta con la informacion de los restaurantes encontrados
  * @throws {reject} Errores en la busqueda
  */
  async findRestaurant(data) {

    const options = {
      method: 'GET',
      url: config.API_RESTAURANTS,
      params: {
        latitude: data.latitude,
        longitude: data.longitude
      },
      headers: {
        'X-RapidAPI-Key': config.API_RESTAURANTS_KEY,
        'X-RapidAPI-Host': config.API_RESTAURANTS_HOST
      }
    };

    const citysRestaurants = await axios.request(options).then(function (response) {
      return response.data;
    }).catch( (error) => {
      throw boom.notFound(error);
    });


    if (citysRestaurants['data'].length == 0) {
      throw boom.notFound('Restaurants not found');
    } 

    return citysRestaurants['data']
      .filter(restaurant => restaurant.name != null)
      .map(filterRestaurant => {
        return {
          name: filterRestaurant.name,
          website: filterRestaurant.website,
          phone: filterRestaurant.phone,
          address: filterRestaurant.address_obj
        }
      });

  }


}

module.exports = RestaurantService;
