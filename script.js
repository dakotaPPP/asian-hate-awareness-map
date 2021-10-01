var about = document.getElementById("menu-about");
var info = document.getElementById("menu-more-info");
var moreInfo = document.getElementById("menu-more-info");
var aboutAreaBody = document.getElementById("about-page-body");
var aboutAreaHeader = document.getElementById("about-page-header");
var infoAreaBody = document.getElementById("info-page-body");
var infoAreaHeader = document.getElementById("info-page-header");
const closeButton = document.querySelectorAll(".x");

/* event listner for the "ABOUT" button */
about.onclick = function(){
  aboutAreaBody.style.visibility = "visible";
  aboutAreaHeader.style.visibility = "visible";
}

/* event listener for the "MORE INFORMATION"button */
info.onclick = function(){
  infoAreaBody.style.visibility = "visible";
  infoAreaHeader.style.visibility = "visible";
}

/* event listener for the buttons of class "x" */
closeButton.forEach(el => el.addEventListener("click", event => {
  aboutAreaBody.style.visibility = "hidden";
  aboutAreaHeader.style.visibility = "hidden";
  infoAreaBody.style.visibility = "hidden";
  infoAreaHeader.style.visibility = "hidden";
}));

/* event listener for whenever the user clicks the map */
map.on('click', (e) => {
  aboutAreaBody.style.visibility = "hidden";
  aboutAreaHeader.style.visibility = "hidden";
  infoAreaBody.style.visibility = "hidden";
  infoAreaHeader.style.visibility = "hidden";
});