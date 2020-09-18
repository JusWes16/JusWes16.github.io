window.addEventListener('load', (event)=>{
    const lu = document.querySelector('#lastupdated');
    lu.textContext = document.lastModified;

    const cry = document.querySelector('#copyrightyear');
    cry.textContent = new Date().getFullYear();
})
