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
	var day_1 = document.getElementById("first");
	day_1.textContent = curDay[new Date().getDay()];

	var day_2 = document.getElementById("second");
	if (new Date().getDay() < 6) {
		day_2.textContent = curDay[new Date().getDay() + 1];
	} else {
		day_2.textContent = curDay[new Date().getDay() - 6];
	}

	var day_3 = document.getElementById("third");
	if (new Date().getDay() < 5) {
		day_3.textContent = curDay[new Date().getDay() + 2];
		console.log(curDay[new Date().getDay() + 2]);
	} else if (new Date().getDay() >= 5) {
		day_3.textContent = curDay[new Date().getDay() - 5];
		console.log(curDay[new Date().getDay() - 5]);
	}

	var day_4 = document.getElementById("fourth");
	if (new Date().getDay() < 4) {
		day_4.textContent = curDay[new Date().getDay() + 3];
	} else if (new Date().getDay() >= 4) {
		day_4.textContent = curDay[new Date().getDay() - 4];
	}

	var day_5 = document.getElementById("fifth");
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


var url = window.location.href;
var links = document.getElementsByClassName("links");
console.log(links)
console.log(links[1].href)

function current() {
	for (i = 0; i < links.length; i++){
		if (links[i].href == url){
			links[i].classList.toggle("active")
		}
	}
}

