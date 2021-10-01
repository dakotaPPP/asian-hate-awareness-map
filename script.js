var about = document.getElementById("menu-about");
var info = document.getElementById("menu-more-info");
var moreInfo = document.getElementById("menu-more-info");
var aboutArea = document.getElementById("about");
var infoArea = document.getElementById("info");
const closeButton = document.querySelectorAll(".x");

/* event listner for the "ABOUT" button */
about.onclick = function(){
  aboutArea.style.visibility = "visible";
}

/* event listener for the "MORE INFORMATION"button */
info.onclick = function(){
  infoArea.style.visibility = "visible";
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
});