const request = require('request');

request ({
  url : 'https://www.google.com/maps/api/geocode/json?address=324%20Sussex%20Street%20harrison%20New%20jersey%2007029',
  json: true
}, (error, response, body) => {
  console.log(`Address: ${body.results[0].formatted_address}`);
  console.log(`Lattitude ${body.results[0].geometry.location.lat}`);
  console.log(`Longitude ${body.results[0].geometry.location.lng}`);
});
