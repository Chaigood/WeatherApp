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
// const key = "35252ba040caf2313135e33b5e8aca45";
const key = "382005d27a116c2880c8f0fcb866998a0";
//Geo Stuff
if('geolocation' in navigator){
    // navigator.geolocation.getCurrentPosition(setPosition, showError);
    navigator.geolocation.watchPosition(setPosition, showError);
}else{
    notificationElement.style.display = "block";
    notificationElement.innerHTML = "<p>Browser doesn't support location</p>";
}

//set user position
function setPosition(position){
     let latitude = position.coords.latitude;
     let longitude = position.coords.longitude;
    //let CityName = positioni.coords.lati

    getWeather(latitude, longitude);
    // getWeather(CityName);
}

//error
function showError(error){
    notificationElement.style.display = "block";
    notificationElement.innerHTML = "<p> ${error.message} </p>";
}
// get weather from api
 function getWeather(latitude, longitude){
    //function getWeather(CityName){ 
    let api = 'api.openweathermap.org/data/2.5/forecast?q={city name}&appid={API key}';

    // console.log(api);
    fetch(api)
        .then(function(response){
            let data = response.json();
            return data;
        })
        .then(function(data){
            weather.temperature.value = Math.floor(data.main.temp - KELVIN);
            weather.description = data.weather[0].icon;
            weather.iconId = data.weather[0].icon;
            weather.city = data.name;
            weather.country = data.sys.country;
        })
        .then(function(){
            displayWeather();
        });
}
function displayWeather(){
    iconElement.innerHTML = '<img src="icons/${weather.iconId}.png"/>';
    tempElement.innerHTML = '${weather.temperature.value}°<span>C</span>';
    descElement.innerHTML = weather.description;
    loactionElement.innerHTML = '${weather.city}, ${weather.country}';
}