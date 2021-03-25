
// current date section
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

// responsive menu
function toggleMenu() {
    document.getElementsByClassName("navigation")[0].classList.toggle("responsive");
}

// banner
if (dayName == "Friday") {
    document.getElementById("banner").style.display = "block";
}

/* let bannerMessage = "";
if (dayName == "Saturday") {
    bannerMessage = "Saturday = Preston Pancakes in the Park!  9:00 a.m. Saturday at the city park pavilion.";
    document.querySelector("banner").textContent = bannerMessage;}
else { 
    document.querySelector("banner").style.visibility = "hidden";
    } */
/* -------------------------cards-------------------------------*/

// I used the help of Meagan Roberts to complete this section of code

const townURL = "https://byui-cit230.github.io/weather/data/towndata.json";
fetch(townURL)
    .then(function(response){
        return response.json();
    })
    .then(function (jsonobj){
        const towns = jsonobj["towns"];
        const cards = document.querySelector(".cards");

        towns.forEach(town =>{
            let card = document.createElement("section");
            let div = document.createElement("div");
            let title = document.createElement("h1");
            let motto = document.createElement("p");
            let p = document.createElement("p1");
            let image = document.createElement("img");
        
            if(town.name == "Preston" || town.name == "Fish Haven" || 
            town.name == "Soda Springs") {;
            title.innerHTML = `${town.name}`;
            motto.innerHTML = `${town.motto}`;
            p.innerHTML = `Founding: ${town.yearFounded} <br>
            Population: ${town.currentPopulation} <br>
            Annual Precipitation ${town.averageRainfall}`;
            image.setAttribute("src", "images/" + town.photo)

            card.append(div, image)
            div.append(title, motto, p)
            cards.append(card)}
        })

    })



/* -------------------------weather api-------------------------------- */

//const townURL = 'https://byui-cit230.github.io/weather/data/towndata.json';

 // b850fbcd027801228eb544e5bbb816db

 const apiURL = "https://api.openweathermap.org/data/2.5/weather?id=5604473&APPID=117640c4230f9ea63f7311907fa46303&units=imperial"

fetch(apiURL)
  .then((response) => response.json())
  .then((jsObject) => {

    // const imagesrc = 'https://openweathermap.org/img/w/' + jsObject.weather[0].icon + '.png';  // note the concatenation
    // const desc = jsObject.weather[0].description;  // note how we reference the weather array
    document.querySelector('#currentTemp').textContent = jsObject.main.temp;
    document.querySelector('#currentHigh').textContent = jsObject.main.temp_max;
    document.querySelector('#currentHumidity').textContent = jsObject.main.humidity;
    document.querySelector('#currentSpeed').textContent = jsObject.wind.speed;
  });

const apiForecast = "https://api.openweathermap.org/data/2.5/forecast?id=5604473&APPID=117640c4230f9ea63f7311907fa46303&units=imperial"

fetch(apiForecast)
  .then((response) => response.json())
  .then((jsObject) => {
    let forecast = jsObject.list.filter(x => x.dt_txt.includes('18:00:00'));

    for (let step = 0; step < 5; step++) {
      // Loop through each of the next 5 forecast days
      let day = new Date(forecast[step].dt_txt);
      let image = 'https://openweathermap.org/img/w/' + forecast[step].weather[0].icon + '.png';
      document.querySelector(`#dayname${step+1}`).textContent = dayname[day.getDay()];
      document.querySelector(`#image${step+1}`).setAttribute('src', image)
      document.querySelector(`#image${step+1}`).setAttribute('alt', forecast[step].weather[0].description)
      document.querySelector(`#temp${step+1}`).textContent = (Math.round(forecast[step].main.temp));
    };
  });
