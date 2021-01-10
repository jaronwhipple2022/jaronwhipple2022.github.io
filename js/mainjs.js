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

document.log(currentDate);