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

	function adjustRating(rating) {
		document.getElementById("severity").innerHTML = rating;
	}