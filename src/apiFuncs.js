function formatUrl(searchStr) {
  const url = `http://api.weatherapi.com/v1/current.json?key=1878fcfaf02d4971951195654230304&q=${searchStr}`;
  return url;
}
async function fetchWeatherData(url) {
  try {
    const response = await fetch(url, { mode: 'cors' });
    const weatherData = await response.json();
    return weatherData;
  } catch (error) {
    console.log(error);
    return error;
  }
}

export { fetchWeatherData, formatUrl };
