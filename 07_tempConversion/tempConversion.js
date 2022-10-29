const ftoc = function(temperatureInFahrenheit) {
  // (x-32)*5/9
  let convertedTemperature = (temperatureInFahrenheit - 32) * (5/9);
  convertedTemperature = Math.round(convertedTemperature * 10) / 10;
  return convertedTemperature;
};

const ctof = function(temperatureInCelsius) {
  // (x*9/5+32)
  let convertedTemperature = (temperatureInCelsius * (9/5) + 32);
  convertedTemperature = Math.round(convertedTemperature * 10) / 10;
  return convertedTemperature;
};

// Do not edit below this line
module.exports = {
  ftoc,
  ctof
};
