const request = require('request');

request ({
  url : 'https://www.google.com/maps/api/geocode/json?address=324%20Sussex%20Street%20harrison%20New%20jersey%2007029',
  json: true
}, (error, response, body) =>{
  console.log(body);
});
