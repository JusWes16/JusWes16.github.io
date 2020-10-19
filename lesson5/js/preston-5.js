 window.addEventListener('load', (event)=>{
    const cd = document.querySelector('#current-date');
    let day = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday']
    let month = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'Novemeber', 'December']
    cd.textContent = day[new Date().getDay()] + ', ' + new Date().getDate() + ' ' + month[new Date().getMonth()] + ' ' + new Date().getFullYear();

    const cry = document.querySelector('#copyrightyear');
    cry.textContent = new Date().getFullYear();

    var nb = document.querySelector('.notification')
    var d = new Date().getDay();

    if (d == 5) {
        nb.style.display = 'block'
    }else {
        nb.style.display = 'none'
    }
})

function menu(){
    document.getElementById("navi").classList.toggle("responsive");
 
 } 

var naviContain = document.querySelector("navigation");
var link = naviContain.getElementsByClassName("links");

for (var i = 0; i < link.length; i++) {
    link[i].addEventListener("click", function() {
        var current = document.getElementsByClassName("active");
        current[0].className = current[0].className.replace(" active", "");
        this.className += " active";
  });
}