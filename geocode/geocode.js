const request = require('request');

var geocodeAddress = (address,callback) => {
  var encodedAddress = encodeURIComponent(address);

  request ({
    url : `https://www.google.com/maps/api/geocode/json?address=${encodedAddress}`,
    json: true
  }, (error, response, body) => {
    if(error) {
      callback('Unable to connect to Google Server');
    } else if (body.status === 'ZERO_RESULTS') {
      callback('Unable to find address');
    } else if (body.status === 'OK') {
      callback(undefined, {
        address: body.results[0].formatted_address,
        Lattitude: body.results[0].geometry.location.lat,
        Longitude: body.results[0].geometry.location.lng
      });
    }

  });
};

module.exports.geocodeAddress = geocodeAddress;

// 5c87d9140cda2bab6fe48cd6e3e6b5e5
