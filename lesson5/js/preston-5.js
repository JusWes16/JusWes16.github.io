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