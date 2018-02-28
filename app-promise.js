const yargs = require('yargs');
const axios = require('axios');

const argv = yargs
  .options({
    a: {
      demand: true,
      alias: 'address',
      describe: 'to fetch weather',
      string: true
    }
  })
  .help()
  .argv;

var encodedAddr = encodeURIComponent(argv.address);
var geocodeUrl = `https://maps.googleapis.com/maps/api/geocode/json?address=${encodedAddr}&key=AIzaSyA8TkcxILPK7_KzJglz-CiCtOQHyhna2a4`

axios.get(geocodeUrl)
  .then((response) => {
    if (response.data.status === 'ZERO_RESULTS') {
      throw new Error('unable to find address');
    }
    var lat = response.data.results[0].geometry.location.lat;
    var lng = response.data.results[0].geometry.location.lng;
    var weatherUrl = `https://api.darksky.net/forecast/3e03d7eecc0b158ad0fdb7c21f6a789c/${lat},${lng}`;
    console.log(response.data.results[0].formatted_address);
    return axios.get(weatherUrl);
  })
  .then((response) => {
    var temperature = response.data.currently.temperature;
    var apparentTemperature = response.data.currently.apparentTemperature;
    console.log(`Its currently is ${temperature}. but feels like ${apparentTemperature}`);
  })
  .catch((e) => {
    if (e.code === 'ENOTFOUND') {
      console.log('unable to connect to API servers');
    } else {
      console.log(e.message);
    }
  })
