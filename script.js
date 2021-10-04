var about = document.getElementById("menu-about");
var info = document.getElementById("menu-more-info");
var settings = document.getElementById("settings-area")
var aboutArea = document.getElementById("about");
var infoArea = document.getElementById("info");
var settingArea = document.getElementById("settings");
const closeButton = document.querySelectorAll(".x");
var settingsOpened = false;

/* event listner for the "ABOUT" button */
about.onclick = function(){ aboutArea.style.visibility = "visible";}

/* event listener for the "MORE INFORMATION"button */
info.onclick = function(){ infoArea.style.visibility = "visible";}

settings.onclick = function(){
  settingsToggle();
}
/* event listener for the buttons of class "x" */
closeButton.forEach(el => el.addEventListener("click", event => {
  aboutArea.style.visibility = "hidden";
  infoArea.style.visibility = "hidden";
}));

/* event listener for whenever the user clicks the map */
map.on('click', (e) => {
  aboutArea.style.visibility = "hidden";
  infoArea.style.visibility = "hidden";
  if (settingsOpened){ settingsToggle();}
});

function settingsToggle(){
  settingArea.style.visibility = "visible";
  $('.settings-close').toggleClass('settings-open');
  $('.borderOn').toggleClass('borderOff');
  settingsOpened = !settingsOpened;
}

/* makes calling for a random number easier to read */
function getRandomInt(max) {
  return Math.floor(Math.random() * max);
}

//this var sets the zoom multiplier on the map to make it fit different sized monitors 
var zoomMultiplier = 2 + ($(document).width()/850);
if ($(document).width()<=600){
  zoomMultiplier =  1 + ($(document).width()/400);
} else if ($(document).width()>=2000) {
  zoomMultiplier =  2.6 + ($(document).width()/1200);
}
mapboxgl.accessToken = 'pk.eyJ1IjoibGFyc2NjaHJpc3RlbnNlbiIsImEiOiJja3RqMHd6bHAxN2J0Mnd1ZTBhMnFqeDBvIn0.myfePg-ekbueQ6nAKyVRog'; //access token for map
const map = new mapboxgl.Map({
  container: 'map', // container ID
  style: 'mapbox://styles/larscchristensen/cktj10n763sgi18rvyyh2e5rm/draft', // style URL
  enter: [-95.75, 38.5119], // starting position [lng, lat]
  zoom: zoomMultiplier // starting zoom
});

/* pulls information from data.csv and creates a marker and popup icon at the coordinates and information for the article */
fetch('testdata.csv')
  .then(response => response.text())
    .then(data => {
      csvArr = Papa.parse(data);
      for(var i = 1; i<(csvArr.data.length); i++){
        // create a HTML element for each feature
        const el = document.createElement('div');
        el.className = 'marker';
        // make a marker for each feature and add it to the map
        new mapboxgl.Marker(el)
        //the randomInt is so when data points come from the same city the points don't just overlap
        .setLngLat(
          //longitude:
          [parseFloat(csvArr.data[i][0])+(getRandomInt(100)*.0001)-.005,
          //latitude:
          parseFloat(csvArr.data[i][1])+(getRandomInt(100)*.0001)-.005])
        .setPopup(new mapboxgl.Popup({offset: 0}) // adds popups
          .setHTML(`<h3><a href=${csvArr.data[i][2]}>${csvArr.data[i][3]}</a></h3><p>${csvArr.data[i][4]}</p>`)
        )
    .addTo(map);
}});