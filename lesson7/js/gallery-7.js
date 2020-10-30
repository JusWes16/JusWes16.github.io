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
    
    // Get the modal
    var modal = document.getElementById("myModal");

    // Get the image and insert it inside the modal - use its "alt" text as a caption
    var img = document.getElementsByClassName("images");
    var modalImg = document.getElementById("img01");
    var captionText = document.getElementById("caption");
    for (i = 0; i < img.length; i++) {
        img[i].onclick = function(){
        modal.style.display = "block";
        modalImg.src = this.src;
        captionText.innerHTML = this.alt;
        }
    }

    // Get the <span> element that closes the modal
    var span = document.getElementsByClassName("close")[0];

    // When the user clicks on <span> (x), close the modal
    span.onclick = function() {
    modal.style.display = "none";
    }
});

//Function to toggle hamburger button
    function menu() {
	    document.getElementById("navi").classList.toggle("responsive");
    }