window.addEventListener('load', (event)=>{

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
    ]
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
    ]
    cd.textContent = day[new Date().getDay()] + ', ' + new Date().getDate() + ' ' + month[new Date().getMonth()] + ' ' + new Date().getFullYear();

//Returns current year to the copyright in the footer
    const cry = document.querySelector('#copyrightyear');
    cry.textContent = new Date().getFullYear();

//Notification bar that only apears on fridays
    var nb = document.querySelector('.notification')
    var d = new Date().getDay();

    if (d == 5) {
        nb.style.display = 'block'
    }else {
        nb.style.display = 'none'
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
    ]
    var day_1 = document.getElementById("first");
    day_1.textContent = curDay[new Date().getDay()];

    var day_2 = document.getElementById("second");
    day_2.textContent = curDay[new Date().getDay() + 1];

    var day_3 = document.getElementById("third");
    day_3.textContent = curDay[new Date().getDay() + 2];

    var day_4 = document.getElementById("fourth");
    day_4.textContent = curDay[new Date().getDay() + 3];

    var day_5 = document.getElementById("fifth");
    day_5.textContent = curDay[new Date().getDay() + 4];
})

//Function to toggle hamburger button
    function menu(){
        document.getElementById("navi").classList.toggle("responsive");
    } 

 //Applies hover styling to the active navigation link
    var naviContain = document.querySelector("navigation");
    var link = naviContain.getElementsByClassName("links");

    for (var i = 0; i < link.length; i++) {
        link[i].addEventListener("click", function() {
            var current = document.getElementsByClassName("active");
            current[0].className = current[0].className.replace(" active", "");
            this.className += " active";
    });
    }