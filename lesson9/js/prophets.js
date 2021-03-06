// store url as a variable
const requestURL = 'https://github.com/byui-cit230/byui-cit230.github.io/blob/master/canvas-referenced/latter-day-prophets.json';

//
fetch(requestURL)
  .then(function (response) {
    return response.json();
  })
  .then(function (jsonObject) {
    console.table(jsonObject);  // temporary checking for valid response and data parsing
  });

  //define and set the constant prophets
  const prophets = jsonObject['prophets'];

  for (let i = 0; i < prophets.length; i++ ) {
    let card = document.createElement('section');
    let h2 = document.createElement('h2');
    
    h2.textContent = prophets[i].name + ' ' + prophets[i].lastname;
    
    card.appendChild(h2);
    
    document.querySelector('div.cards').appendChild(card);
  };