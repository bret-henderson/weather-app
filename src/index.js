import * as apiFuncs from './apiFuncs';
import * as formatData from './formatData';

const searchForm = document.getElementById('search-form');
const img = document.querySelector('img');

async function getNewData(searchStr = 'New York City') {
  const url = apiFuncs.formatUrl(searchStr);
  // console.log(rawData.location.country);
  const rawData = await apiFuncs.fetchWeatherData(url);
  // let locData = updateLocation(rawData.location);
  console.log(rawData);
  img.src = `https:${rawData.current.condition.icon}`;
}

searchForm.addEventListener('submit', (e) => {
  e.preventDefault();
  const searchInput = document.getElementById('search-input');
  // searchStr = searchInput.value;
  getNewData(searchInput.value);
});

getNewData();
