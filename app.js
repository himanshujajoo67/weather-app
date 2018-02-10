const request = require('request');
const yargs = require('yargs');


const argv = yargs
.options({
  address: {
    demand: true,
    alias: 'a',
    description: 'Address to Fetch weather for',
    string: true
  }

})
.help()
.alias('help', 'h')
.argv;

var encodedAddress = encodeURIComponent(argv.address);

request ({
  url : `https://www.google.com/maps/api/geocode/json?address=${encodedAddress}`,
  json: true
}, (error, response, body) => {
  if(error) {
    console.log('unable to connect to Google Server');
  } else if (body.status === 'ZERO_RESULTS') {
    console.log('Unable to find address');
  } else if (body.status === 'OK') {
    console.log(`Address: ${body.results[0].formatted_address}`);
    console.log(`Lattitude ${body.results[0].geometry.location.lat}`);
    console.log(`Longitude ${body.results[0].geometry.location.lng}`);
  }

});
