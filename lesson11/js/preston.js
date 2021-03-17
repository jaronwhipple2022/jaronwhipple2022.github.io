
// current date section
let daynames = [
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
/* -------------------------cards javascript-------------------------------*/

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



/* -------------------------weather api javascript-------------------------------- 
6d7c2a6f0ff9a75f0842da0dc97f6aa0
&units=imperial 
*/

//const townURL = 'https://byui-cit230.github.io/weather/data/towndata.json';

 //   const towns = jsonObject[""];

