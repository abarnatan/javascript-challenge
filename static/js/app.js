// from data.js
var tableData = data;

// Get a reference to the table body
var tbody = d3.select("tbody");

// Console.log the weather data from data.js
console.log(data);

// Step 1: Loop Through `data` and console.log each ufo report object
data.forEach(function(ufoSighting) {
  console.log(ufoSighting);

  Object.entries(ufoSighting).forEach(function([key, value]) {
    console.log(key, value);
  });

    var row = tbody.append("tr");
});

// Step 4: Use d3 to append 1 cell per weather report value (datetime, city, state, country, shape, duration, comments)
data.forEach(function(weatherReport) {
  console.log(weatherReport);
  var row = tbody.append("tr");

