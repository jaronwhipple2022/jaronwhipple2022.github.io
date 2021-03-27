/* -------------------------weather api-------------------------------- */
// city ID: 5607916
 // 117640c4230f9ea63f7311907fa46303

 const apiURL = "https://api.openweathermap.org/data/2.5/weather?id=5607916&APPID=117640c4230f9ea63f7311907fa46303&units=imperial"

 fetch(apiURL)
   .then((response) => response.json())
   .then((jsObject) => {

     document.querySelector('#currentTemp').textContent = jsObject.main.temp;
     document.querySelector('#currentHigh').textContent = jsObject.main.temp_max;
     document.querySelector('#currentHumidity').textContent = jsObject.main.humidity;
     document.querySelector('#currentSpeed').textContent = jsObject.wind.speed;
   });
 
 
 const apiForecast = "https://api.openweathermap.org/data/2.5/forecast?id=5607916&APPID=117640c4230f9ea63f7311907fa46303&units=imperial"
 
 fetch(apiForecast)
   .then((response) => response.json())
   .then((jsObject) => {
     let forecast = jsObject.list.filter(x => x.dt_txt.includes('18:00:00'));
 
     // Loop through the next 5 forecast days
     for (let step = 0; step < 5; step++) {
       
       let nextDay = new Date(forecast[step].dt_txt);
       let image = 'https://openweathermap.org/img/w/' + forecast[step].weather[0].icon + '.png';
       document.querySelector(`#dayname${step+1}`).textContent = daynames[nextDay.getDay()];
       document.querySelector(`#image${step+1}`).setAttribute('src', image)
       document.querySelector(`#image${step+1}`).setAttribute('alt', forecast[step].weather[0].description)
       document.querySelector(`#temp${step+1}`).textContent = (Math.round(forecast[step].main.temp));
     };
   })