let Temp = document.getElementById("currentTemp").textContent;
let Speed = document.getElementById("currentSpeed").textContent;
console.log(Temp);
console.log(Speed);

calculatedChill = ""
if (Temp <= 50) and (Speed >= 3.0) {
    calculatedChill = 35.74 - (0.6215 * Temp) - 35.75(Math.pow(Speed,0.16)) + 0.4275(Temp)(Math.pow(Speed,0.16));
}   else {
    calculatedChill = "Unavailable";
}


document.getElementById("windChill").textContent = calculatedChill;