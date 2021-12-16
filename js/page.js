// Mobile Navigaton
function navToggle() {
  var x = document.getElementById("navigation"); //When trigram clicked
    if (x.className === "navbar") {
      x.className += " responsive";   // add a class to navbar
    }
    else {
      x.className = "navbar";
    }
}

var slideIndex = 1; // variable to keep track of current slide
showSlides(slideIndex); // run the showSlides function which will be 1 at startup

function changeSlides(n) {       // goes to next or prev slide depending on 1 or -1 respectively
  showSlides(slideIndex += n);
}
function currentSlide(n) { // returns the slideIndex
  showSlides(slideIndex = n);
}

function showSlides(n) { // main slideshow function with n as the slide number to show
  var i;
  var slides = document.getElementsByClassName("slide");
  var indicator = document.getElementsByClassName("indicator");
  if (n > slides.length) { // if changeSlides goes next on the last slide, go to first slide
    slideIndex = 1
  }
  else if (n === 0) { // if changeSlides goes prev on the first slide, go to last slide
    slideIndex = slides.length
  }
  for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none"; // hide all slides
      indicator[i].className = indicator[i].className.replace(" active", ""); // make all slides inactive
  }
  slides[slideIndex-1].style.display = "block"; // display the current slideIndex
  indicator[slideIndex-1].className += " active"; // Activate the current indicator
}
