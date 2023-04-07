class Location {
  constructor(country, localtime, name) {
    this.country = country;
    this.localtime = localtime;
    this.name = name;
  }
}

function updateLocation(loc) {
  const location = new Location(loc.title, loc.author, loc.pages);
  return location;
}
