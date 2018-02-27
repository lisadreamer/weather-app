const request = require('request');

var getWeather = (lat, lng, callback) => {
  request({
    url: `https://api.darksky.net/forecast/3e03d7eecc0b158ad0fdb7c21f6a789c/${lat},${lng}`,
    json: true
  }, (error, response, body) => {
    if (!error && response.statusCode === 200) {
      //console.log(JSON.stringify(body.currently,undefined, 2));
      callback(undefined, {
        temperature: body.currently.temperature,
        apparentTemperature: body.currently.apparentTemperature
      });
    } else {
      callback('unable to fetch weather');
    }
  })
};

module.exports.getWeather = getWeather;
