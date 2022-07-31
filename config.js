module.exports = {
  port: process.env.PORT || 3004,
  db: process.env.MONGODB_URI || 'mongodb+srv://userApp:KhOKBeyY6mFTIkyS@cluster0.v5rdt.mongodb.net/test?retryWrites=true&w=majority',
  SECRET_TOKEN: process.env.MONGODB_URI || 'miclavedetokens',
  API_RESTAURANTS: process.env.API_RESTAURANTS || 'https://travel-advisor.p.rapidapi.com/restaurants/list-by-latlng',
  API_RESTAURANTS_KEY: process.env.API_RESTAURANTS_KEY || 'c48653b927msh753b8a83b8bd8e5p10c039jsn46d378f8e110',
  API_RESTAURANTS_HOST: process.env.API_RESTAURANTS_HOST || 'travel-advisor.p.rapidapi.com'
}
