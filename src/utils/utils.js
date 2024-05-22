// Helper function to convert Kelvin to Fahrenheit
const kelvinToFahrenheit = (kelvin) => ((kelvin - 273.15) * 9/5 + 32).toFixed(2);

// Helper function to format date strings
const formatDate = (dateString) => {
  const options = { weekday: 'short', month: 'short', day: 'numeric' };
  return new Date(dateString).toLocaleDateString(undefined, options);
};

// BUG #1
// Parse the data for use in components, including the weather icon

export { kelvinToFahrenheit, formatDate, parseForecastData };
