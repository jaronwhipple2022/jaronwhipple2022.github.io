
// This code is based off w3schools examples
var range = document.getElementById("stormRange");
var display = document.getElementById("display");
display.innerHTML = range.value; 


range.oninput = function() {
  display.innerHTML = this.value;
}