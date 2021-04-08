
/* --------------current date -----------------*/
const daynames = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesdy",
    "Thursday",
    "Friday",
    "Saturday"
]
let months = [
    "January",
    "Febuary",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December"
]

let d = new Date();
let dayName= daynames[d.getDay()];
let realMonth = months[d.getMonth()];
let year = d.getFullYear();
let currentDate = dayName + " " + realMonth + " " + d.getDate() + ", " + year;

document.getElementById("date").textContent = currentDate;

/* ------------------- responsive menu ----------------------------*/

function toggleMenu() {
    document.getElementsByClassName("navigation")[0].classList.toggle("responsive");
}

/* -------------------------current weather api-------------------------------- */
const apiURL = "https://api.openweathermap.org/data/2.5/onecall?lat=43.3052&lon=-112.183&exclude=minutely,hourly&appid=117640c4230f9ea63f7311907fa46303&units=imperial"

fetch(apiURL)
  .then((response) => response.json())
  .then((jsObject) => {

    document.querySelector('#currentTemp').textContent = jsObject.current.temp;
    document.querySelector('#currentCondition').textContent = jsObject.current.clouds;
    document.querySelector('#currentHumidity').textContent = jsObject.current.humidity;
  });

  /* ------------------------- forcast weather api-------------------------------- */
  // closest city available is Shelly... 5607051
  const apiForecast = "https://api.openweathermap.org/data/2.5/forecast?id=5607051&APPID=117640c4230f9ea63f7311907fa46303&units=imperial"
 
  fetch(apiForecast)
    .then((response) => response.json())
    .then((jsObject) => {
      let forecast = jsObject.list.filter(x => x.dt_txt.includes('18:00:00'));
  
      // Loop through the next 3 forecast days
      for (let step = 0; step < 3; step++) {
        
        let nextDay = new Date(forecast[step].dt_txt);
        let image = 'https://openweathermap.org/img/w/' + forecast[step].weather[0].icon + '.png';
        document.querySelector(`#dayname${step+1}`).textContent = daynames[nextDay.getDay()];
        document.querySelector(`#image${step+1}`).setAttribute('src', image)
        document.querySelector(`#image${step+1}`).setAttribute('alt', forecast[step].weather[0].description)
        document.querySelector(`#temp${step+1}`).textContent = (Math.round(forecast[step].main.temp));
      };
    })