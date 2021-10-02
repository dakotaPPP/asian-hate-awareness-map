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