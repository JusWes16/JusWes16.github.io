window.addEventListener('load', (event)=>{
    var temp = document.getElementsByClassName("temp")[0].innerHTML;
	var wind = document.getElementById("wind-speed").innerHTML;
	var farin = document.getElementById("farin")
	var windChill = document.getElementById("wind-chill");

	var chill = 35.74 + (0.6215 * temp) - (35.75 * (Math.pow(wind, 0.16))) + (0.4275 * temp * (Math.pow(wind, 0.16)));

	if (temp <= 50 && wind > 3){
		windChill.textContent = Math.round(chill, 0);
	} else {
		windChill.textContent = "N/A";
		farin.textContent = " "
	}
})
