
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