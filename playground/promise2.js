const request = require('request');
var geoCodeAddress = (address) => {
  return new Promise((resolve, reject) => {
    const addr = encodeURIComponent(address);

    request({
      url: `https://maps.googleapis.com/maps/api/geocode/json?address=${addr}&key=AIzaSyA8TkcxILPK7_KzJglz-CiCtOQHyhna2a4`,
      json: true
    }, (error, response, body) => {
      if (error) {
        reject('couldnt connect to google servers');
      } else if (body.status === 'ZERO_RESULTS') {
        reject('0 results');
      } else if (body.status === 'OK') {
        resolve({
          address: body.results[0].formatted_address,
          lantitude: body.results[0].geometry.location.lat,
          longtitude: body.results[0].geometry.location.lng
        });
      }
    });
  })


};

geoCodeAddress('00240').then((location) => {
  console.log(JSON.stringify(location, undefined, 2));
}, (errorMsg) => {
  console.log(errorMsg);
})
