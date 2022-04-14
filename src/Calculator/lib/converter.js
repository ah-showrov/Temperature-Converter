export const toCelsius = (fahrenheit) => {
  if (!fahrenheit) {
    return "";
  }
  return ((fahrenheit - 32) * 5) / 9;
};

export const toFahrenheit = (celsius) => {
  if (!celsius) {
    return "";
  }
  return (celsius * 9) / 5 + 32;
};

export const convert = (temperature, convertTo) => {
  const input = parseFloat(temperature);

  if (Number.isNaN(input)) {
    return "";
  }
  const output = convertTo(input);
  const rounded = Math.round(output * 1000) / 1000;
  return rounded.toString();
};
