const URL = "https://api.openweathermap.org/data/2.5/forecast?id=5604473&units=imperial&appid=49dff8e39e45697704945111bde85895";

fetch(URL)
  .then((response) => response.json())
  .then((jsObject) => {
    console.log(jsObject);

    document.getElementById('current').textContent = jsObject.list[0].weather[0].main;
    document.getElementById('temp').textContent = Math.round(jsObject.list[0].main.temp, 0);
    document.getElementById('humid').textContent = jsObject.list[0].main.humidity + '%';
    document.getElementById('wind-speed').textContent = Math.round(jsObject.list[0].wind.speed, 0);

    x = 0

    for(i = 0; i < jsObject.list.length; i++){
        if(jsObject.list[i].dt_txt.includes('18:00:00')){
            let div = document.createElement('div');
            let h4 = document.createElement('h4');
            let image = document.createElement('img');
            let p = document.createElement('p');

            h4.classList.add('day-' + x);
            p.classList.add('temp');

            h4.textContent = ' ';
            image.setAttribute('src', 'https://openweathermap.org/img/w/' + jsObject.list[i].weather[0].icon + '.png');
            p.textContent = Math.round(jsObject.list[i].main.temp, 0) + '\xB0F';

            div.appendChild(h4);
            div.appendChild(image);
            div.appendChild(p);

            document.querySelector('div.five-day').appendChild(div);

            x += 1;
        }
    }    
});

window.addEventListener('load', (event) => {

	//Returns the current date at the bottom in the format "Monday, 12 October 2020"
	const cd = document.querySelector('#current-date');
	let day = ['Sunday','Monday','Tuesday','Wednesday','Thursday','Friday','Saturday'];
	let month = ['January','February','March','April','May','June','July','August','September','October','Novemeber','December'];
	cd.textContent = day[new Date().getDay()] + ', ' + new Date().getDate() + ' ' + month[new Date().getMonth()] + ' ' + new Date().getFullYear();

	//Returns current year to the copyright in the footer
	const cry = document.querySelector('#copyrightyear');
	cry.textContent = new Date().getFullYear();

	//Notification bar that only apears on fridays
	var nb = document.querySelector('.notification');
	var d = new Date().getDay();

	if (d == 5) {
		nb.style.display = 'block';
	} else {
		nb.style.display = 'none';
	}

	//Enters the next 5 days in the five day forcast
	var curDay = [
		'Sunday',
		'Monday',
		'Tuesday',
		'Wednesday',
		'Thursday',
		'Friday',
		'Saturday'
    ];
	var day_1 = document.querySelector(".day-0");
	day_1.textContent = curDay[new Date().getDay()];

	var day_2 = document.querySelector(".day-1");
	if (new Date().getDay() < 6) {
		day_2.textContent = curDay[new Date().getDay() + 1];
	} else {
		day_2.textContent = curDay[new Date().getDay() - 6];
	}

	var day_3 = document.querySelector(".day-2");
	if (new Date().getDay() < 5) {
		day_3.textContent = curDay[new Date().getDay() + 2];
		console.log(curDay[new Date().getDay() + 2]);
	} else if (new Date().getDay() >= 5) {
		day_3.textContent = curDay[new Date().getDay() - 5];
		console.log(curDay[new Date().getDay() - 5]);
	}

	var day_4 = document.querySelector(".day-3");
	if (new Date().getDay() < 4) {
		day_4.textContent = curDay[new Date().getDay() + 3];
	} else if (new Date().getDay() >= 4) {
		day_4.textContent = curDay[new Date().getDay() - 4];
	}

	var day_5 = document.querySelector(".day-4");
	if (new Date().getDay() < 3) {
		day_5.textContent = curDay[new Date().getDay() + 4];
	} else if (new Date().getDay() >= 3) {
		day_5.textContent = curDay[new Date().getDay() - 3];
	}
});

//Function to toggle hamburger button
function menu() {
	document.getElementById("navi").classList.toggle("responsive");
}
