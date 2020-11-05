window.addEventListener('load', (event) => {
    var modal = document.getElementById("myModal");

    var img = document.getElementsByClassName("image");
    var modalImg = document.getElementById("img01");
    var captionText = document.getElementById("caption");
    for (i = 0; i < img.length; i++) {
        img[i].onclick = function(){
        modal.style.display = "block";
        modalImg.src = this.src;
        captionText.innerHTML = this.alt;
        }
    }
    var span = document.getElementsByClassName("close")[0];

    span.onclick = function() {
    modal.style.display = "none";
    }
});