let searchStr = 'New York City';
const searchForm = document.getElementById('search-form');
const img = document.querySelector('img');

async function fetchWeather(searchStr) {
  try {
    const response = await fetch(
      `http://api.weatherapi.com/v1/current.json?key=1878fcfaf02d4971951195654230304&q=${searchStr}`,
      { mode: 'cors' }
    );
    const weatherData = await response.json();
    console.log(weatherData);
    const weatherAppData = weatherData;
    img.src = 'https:' + weatherData.current.condition.icon;
  } catch (error) {
    console.log(error);
  }
}

class Location {
  constructor(country, localtime, name) {
    console.log(this);
    this.country = country;
    this.localtime = localtime;
    this.name = name;
  }
}

function updateLocation(loc) {
  const location = new Location(loc.title, loc.author, loc.pages);
  return location;
}

let rawData = fetchWeather(searchStr);
console.log(rawData);
let locData = updateLocation(rawData);

searchForm.addEventListener('submit', (e) => {
  e.preventDefault();
  const searchInput = document.getElementById('search-input');
  searchStr = searchInput.value;
  fetchWeather(searchStr);
});
