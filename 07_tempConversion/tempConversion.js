const convertToCelsius = function(fa) {
  return parseFloat((((fa-32)*5)/9).toFixed(1));
};

const convertToFahrenheit = function(ce) {
  return parseFloat((((ce*9)/5)+32).toFixed(1));
};

console.log(convertToCelsius(100));

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
