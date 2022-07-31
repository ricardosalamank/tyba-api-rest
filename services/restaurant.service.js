
const boom = require('@hapi/boom');
const axios = require("axios");


class RestaurantService {

  async findRestaurant(data) {

    const options = {
      method: 'GET',
      url: 'https://travel-advisor.p.rapidapi.com/restaurants/list-by-latlng',
      params: {
        latitude: data.latitude,
        longitude: data.longitude
      },
      headers: {
        'X-RapidAPI-Key': 'c48653b927msh753b8a83b8bd8e5p10c039jsn46d378f8e110',
        'X-RapidAPI-Host': 'travel-advisor.p.rapidapi.com'
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
