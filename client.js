const searchElement = document.querySelector("[data-city-search]");
const searchBox = new google.maps.places.SearchBox(searchElement);
searchBox.addListener("places_changed", () => {
  const place = searchBox.getPlaces()[0];
  if (place == null) return;
});

// SVG text animation
const logo = document.querySelectorAll("#logo path");

for (let i = 0; i < logo.length; i++) {
  console.log(`letter ${i} is ${logo[i].getTotalLength()}`);
}
