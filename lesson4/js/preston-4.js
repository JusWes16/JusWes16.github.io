 window.addEventListener('load', (event)=>{
    const lu = document.querySelector('#lastupdated');
    lu.textContent = new Date() //.toLocaleString('en-us', {weekday:'long'})

    const cry = document.querySelector('#copyrightyear');
    cry.textContent = new Date().getFullYear();
})

function menu(){
    document.getElementById("navi").classList.toggle("responsive");
 
 } 