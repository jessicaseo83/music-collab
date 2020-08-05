require('dotenv').config();
const axios = require('axios');
const googleApikey = process.env.REACT_APP_GOOGLE_MAPS_API_KEY

const getGeoLocation = function(postalCode) {
  const url = `https://maps.googleapis.com/maps/api/geocode/json?address=${postalCode}&key=${googleApikey}`
  return axios.get(url)
  .then(res => res.data.results[0].geometry.location)
}



module.exports = {
  getGeoLocation
}