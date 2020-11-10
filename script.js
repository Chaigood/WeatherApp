//Elements
const iconElement = document.querySelector(".weather-icon");
const tempElement = document.querySelector(".temperature-value p");
const descElement = document.querySelector(".temperature-description p");
const loactionElement = document.querySelector(".location p");
const notificationElement = document.querySelector(".notification");

//App data
const weather = {};

weather.temperature = {
    unit : "celsius"
}
//const and vars
const KELVIN = 273;
// api stuff
const key = "82005d27a116c2880c8f0fcb866998a0";
//Geo stuff
if("geolocation" in navigator){
    navigator.geolocation.getCurrentPosition(setPosition, showError);
}else{
    notificationElement.style.display = "block";
    notificationElement.innerHTML = "<p>Browser doesn't support location</p>";
}

//set user position
function setPosition(position){
    let latitude = position.coords.latitude;
    let longitude = position.coords.longitude;

    getWeather(latitude, longitude);
}

//error
function showError(error){
    notificationElement.style.display = "block";
    notificationElement.innerHTML = <p> ${error.message} </p> ;
}
// get weather from api
function getWeather(latitude, longitude){
    let App
}
