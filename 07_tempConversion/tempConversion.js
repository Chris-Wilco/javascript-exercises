const convertToCelsius = function(inputTemp) {
  return roundToOne(5 / 9 * (inputTemp - 32));
};

const convertToFahrenheit = function(inputTemp) {
  return roundToOne((inputTemp * 9 / 5) + 32);
};

function roundToOne(num){
  return +(Math.round(num + "e+1") + "e-1");
}

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
