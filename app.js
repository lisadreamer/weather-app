const yargs = require('yargs');

const geocode = require('./geocode/geocode');
const weather = require('./weather/weather');

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

geocode.geocodeAddress(argv.address, (errorMsg, results) => {
  if (errorMsg) {
    console.log(errorMsg);
  } else {
    console.log(results.address);
    weather.getWeather(results.lantitude, results.longtitude, (errorMsg, weatherResults) => {
      if (errorMsg) {
        console.log(errorMsg);
      } else {
        console.log(`Its currently ${weatherResults.temperature}. It feels like ${weatherResults.apparentTemperature}`);
      }
    });
  }
});
