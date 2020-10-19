 window.addEventListener('load', (event)=>{
    const lu = document.querySelector('#lastupdated');
    lu.textContent = new Date()

    const cry = document.querySelector('#copyrightyear');
    cry.textContent = new Date().getFullYear();

    var nb = document.querySelector('.notification')
    var d = new Date().getDay()

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