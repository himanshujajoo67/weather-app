const yargs = require('yargs');

const geocode = require('./geocode/geocode');


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

geocode.geocodeAddress(argv.address);
