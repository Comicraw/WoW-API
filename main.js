// Group 1
const baseURL = 'https://us.api.battle.net/wow/boss/';
const key = '?locale=en_US&apikey=vw4tvnb8qzghhu85jjmpxghby5mz7fsc'
let url;

const searchTerm = document.querySelector('.search');
const searchForm = document.querySelector('form');
const submitBtn = document.querySelector('.submit');

const section = document.querySelector('section');

searchForm.addEventListener('submit', fetchResults);

function fetchResults(e) {
  // console.log(e);
  e.preventDefault();
  url = baseURL + key + '&q'

  fetch(url)
    .then(function (result) {
      return result.json(); // creates a promise containing a result object. this is our response. the fetch gets the network resource, which might take a long time to resolve. converts the response into a json object by returning the result.json function                      
    }).then(function (json) {
      displayResults(json);
    });
}
// Group 2
function displayResults(json) {
  while (section.firstChild) {
    section.removeChild(section.firstChild)
  }

  //the entire object/key = bossData
  let bossData = json.bosses;
  if (bossData === 0) {
    console.log('No Results');
  } else {
    for (let i = 0; i < bossData.length; i++) {
      // console.log(i);
      let name = document.createElement('h1');
      let description = document.createElement('h3')

      name.textContent = `${json.bosses[i].name}`;
      description.textContent = `Description: ${json.bosses[i].description}`
      if (json.bosses[i].name == document.getElementById('search').value) {
        section.appendChild(name);
        section.appendChild(description);
      }
    }
  }
}