window.addEventListener('load', (event) => {
    showSlides(slideIndex);
});
    var slideIndex = 1;

    function plusSlides(n) {
        showSlides(slideIndex += n);
    }

    function showSlides(n) {
        var i;
        var slides = document.getElementsByClassName("mySlides");
        if (n > slides.length) {
            slideIndex = 1
        }
        if (n < 1) {
            slideIndex = slides.length
        }
        for (i = 0; i < slides.length; i++) {
            slides[i].style.display = "none";
        }
        
        slides[slideIndex-1].style.display = "block";
    }

//Function to toggle hamburger button
function menu() {
	document.getElementById("navi").classList.toggle("responsive");
}

//Function for service nav
function service() {
    document.getElementById("services-more").classList.toggle("more");
}

//Function for resevation button
function reserve(){
    window.location.href='https://juswes16.github.io/final-project/reservations/reservation.html';
}

//Function for contact us button
function contact(){
    window.location.href='https://juswes16.github.io/final-project/contact-us/contact_us.html';
}

