import * as apiFuncs from './apiFuncs';
import './style.css';

const searchForm = document.getElementById('search-form');
const location = document.querySelector('.location');
const temperature = document.querySelector('.temperature');
const img = document.querySelector('img');
const iconText = document.querySelector('.icon-text');
const highTemp = document.querySelector('.high-temp');
const lowTemp = document.querySelector('.low-temp');
const feelsLike = document.querySelector('#feels-like > .data');
const humidity = document.querySelector('#humidity > .data');
const aqi = document.querySelector('#aqi > .data');

function formatAqi(number) {
  switch (number) {
    case '1':
      return 'Good';
    case '2':
      return 'Moderate';
    case '3':
      return 'Unhealthy for sensitive group';
    case '4':
      return 'Unhealthy';
    case '5':
      return 'Very unhealthy';
    case '6':
      return 'Hazardous';
    default:
      return 'AQI ERROR';
  }
}

function updateDom(rawData) {
  console.log(rawData);
  location.textContent = rawData.location.name;
  temperature.textContent = `${rawData.current.temp_f}`;
  const span = document.createElement('span');
  span.className = 'temperature-unit';
  span.textContent = '°F';
  temperature.appendChild(span);
  img.src = `https:${rawData.current.condition.icon}`;
  iconText.textContent = rawData.current.condition.text;
  highTemp.textContent = `H:${rawData.forecast.forecastday['0'].day.maxtemp_f}°`;
  lowTemp.textContent = `L:${rawData.forecast.forecastday['0'].day.mintemp_f}°`;
  feelsLike.textContent = `${rawData.current.feelslike_f}°`;
  humidity.textContent = `${rawData.current.humidity}%`;
  const aqiFormatted = formatAqi(
    `${rawData.current.air_quality['us-epa-index']}`
  );
  aqi.textContent = aqiFormatted;
}

async function getNewData(searchStr = 'New York City') {
  const url = apiFuncs.formatUrl(searchStr, 'forecast');
  const currentData = await apiFuncs.fetchWeatherForecast(url);
  updateDom(currentData);
}

searchForm.addEventListener('submit', (e) => {
  e.preventDefault();
  const searchInput = document.getElementById('search-input');
  getNewData(searchInput.value);
});

getNewData();
