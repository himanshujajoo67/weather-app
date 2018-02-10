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
  console.log(`Address: ${body.results[0].formatted_address}`);
  console.log(`Lattitude ${body.results[0].geometry.location.lat}`);
  console.log(`Longitude ${body.results[0].geometry.location.lng}`);
});
