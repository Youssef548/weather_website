const request = require('request');

const forecast = (latitude, longitude, callback) => {
  const url =
    'http://api.weatherstack.com/current?access_key=9c1ecff3873b234280f1e01e1660e64a&query=' +
    encodeURIComponent(`${latitude},${longitude}`);

  request({ url, json: true }, (error, { body } = {}) => {
    if (error) {
      callback('Unable to connect to weather service!', undefined);
    } else if (body.error) {
      callback('Unable to find location', undefined);
    } else {
      callback(
        undefined,
        `${body.current.weather_descriptions[0]}. It is currently ${body.current.temperature} degress out. It feels like ${body.current.feelslike} degress out. `
      );
    }
  });
};

module.exports = forecast;
