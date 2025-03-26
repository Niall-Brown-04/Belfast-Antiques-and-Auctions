// this will control the slideshow
var slideIndex = 0;
showSlides();

function showSlides() { 
    var slides = document.getElementsByClassName("slide");
    for (var i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }

slideIndex++;
if (slideIndex >= slides.length) { slideIndex = 0; }
slides[slideIndex].style.display = "block";
setTimeout(showSlides, 5000); //images will change every five seconds
}