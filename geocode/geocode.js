const request = require('request');

var geocodeAddress = (address, callback) => {

  const addr = encodeURIComponent(address);

  request({
    url: `https://maps.googleapis.com/maps/api/geocode/json?address=${addr}&key=AIzaSyA8TkcxILPK7_KzJglz-CiCtOQHyhna2a4`,
    json: true
  }, (error, response, body) => {
    if (error) {
      callback('couldnt connect to google servers');
    } else if (body.status === 'ZERO_RESULTS') {
      callback('0 results');
    } else if (body.status === 'OK') {
      callback(undefined, {
        address: body.results[0].formatted_address,
        lantitude: body.results[0].geometry.location.lat,
        longtitude: body.results[0].geometry.location.lng
      });
    }
  });
};

module.exports.geocodeAddress = geocodeAddress;
