let request = require('request');
const argv = require('yargs').argv;
let city = argv.c || 'portland';
let apiKey = 'f0e5da68be2a36a711a30acd9710c548';
let url = `http://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${apiKey}`;

request(url, function (err, response, body) {
  if(err){
    console.log('error:', error);
  } else {
    let weather = JSON.parse(body);
    let message = `It's ${weather.main.temp} degrees in ${weather.name}!`;
    console.log(message);
  }
});

