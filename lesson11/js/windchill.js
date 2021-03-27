let Temp = document.getElementById("currentTemp").textContent;
let Speed = document.getElementById("currentSpeed").textContent;
console.log(Temp);
console.log(Speed);

calculatedChill = "n/a"
if (Temp <= 30 && Speed >= 3.0) {
    calculatedChill = 35.74 - (0.6215 * Temp) - 35.75(Math.pow(Speed,0.16)) + 0.4275(Temp)(Math.pow(Speed,0.16));
} else { 
    calculatedChill = "n/a";
}

document.getElementById("windChill").textContent = calculatedChill;