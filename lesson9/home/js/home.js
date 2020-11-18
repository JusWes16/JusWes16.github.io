window.addEventListener('load', (event) => {

	//Returns the current date at the bottom in the format "Monday, 12 October 2020"
	const cd = document.querySelector('#current-date');
	let day = [
		'Sunday',
		'Monday',
		'Tuesday',
		'Wednesday',
		'Thursday',
		'Friday',
		'Saturday'
	];
	let month = [
		'January',
		'February',
		'March',
		'April',
		'May',
		'June',
		'July',
		'August',
		'September',
		'October',
		'Novemeber',
		'December'
	];
	cd.textContent = day[new Date().getDay()] + ', ' + new Date().getDate() + ' ' + month[new Date().getMonth()] + ' ' + new Date().getFullYear();

	//Returns current year to the copyright in the footer
	const cry = document.querySelector('#copyrightyear');
	cry.textContent = new Date().getFullYear();
});

//Function to toggle hamburger button
function menu() {
	document.getElementById("navi").classList.toggle("responsive");
}

const URL = 'https://byui-cit230.github.io/weather/data/towndata.json';

fetch(URL)
.then(function (response) {
    return response.json();
  })
  .then(function (jsonObject) {
    console.table(jsonObject);
    const towns = jsonObject['towns'];

    for(i = 0; i < towns.length; i++){
      if(towns[i].name == 'Preston' || towns[i].name == 'Soda Springs' || towns[i].name == 'Fish Haven'){
        let town_name  = document.createElement('section');
        let text = document.createElement('div');
        let h1 = document.createElement('h1');    
        let motto = document.createElement('h3');
        let founded = document.createElement('p');
        let pop = document.createElement('p');
        let rain_fall = document.createElement('p');
        let image = document.createElement('img');
        let hr = document.createElement('hr');

        h1.textContent = towns[i].name;
        motto.textContent = towns[i].motto;
        founded.textContent = 'Founded in ' + towns[i].yearFounded;
        pop.textContent = 'Population: ' + towns[i].currentPopulation;
        rain_fall.textContent = 'Average Annual Rainfall: ' + towns[i].averageRainfall + ' inches';
        image.setAttribute('src', 'images/' + towns[i].photo);

        text.appendChild(h1);
        text.appendChild(motto);
        text.appendChild(hr)
        text.appendChild(founded);
        text.appendChild(pop);
        text.appendChild(rain_fall);

        town_name.appendChild(text);
        town_name.appendChild(image);

        //document.getElementById('towns').appendChild(town_name);

        if(towns[i].name == 'Preston'){
          document.getElementById('preston').appendChild(town_name);
        }
        else if(towns[i].name == 'Soda Springs'){
          document.getElementById('soda').appendChild(town_name);
        }
        else{
          document.getElementById('fish').appendChild(town_name);
        }
      }
    }
  });
