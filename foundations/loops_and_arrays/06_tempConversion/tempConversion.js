const convertToCelsius = function(value) {
  const result = (value-32)*(5/9);
  if (Number.isInteger(result)) {
    return result
  } else {
    return Number(result.toFixed(1));
  }
};

console.log(convertToCelsius(100));

const convertToFahrenheit = function(input) {
  const output = input*(9/5)+32;
  if (Number.isInteger(output)) {
    return output
  } else {
  return Number(output.toFixed(1));
  }
};

console.log(convertToFahrenheit(0));

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
