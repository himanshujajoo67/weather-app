
const request = require('request');

var getWeather = (lat,lng,callback) => {

  request({
    url: `https://api.darksky.net/forecast/5c87d9140cda2bab6fe48cd6e3e6b5e5/${lat},${lng}`,
    json: true
  }, (error, respose, body) => {
    if(error) {
      callback('Unable to connect to forecast servers');
    } else if(respose.statusCode === 400) {
      callback('Unable to fetch Weather');
    } else if(respose.statusCode === 200) {
      callback(undefined, {
        temperature: body.currently.temperature,
        apparentTemperature: body.currently.apparentTemperature
      });
    }


  });
};

module.exports.getWeather = getWeather;
