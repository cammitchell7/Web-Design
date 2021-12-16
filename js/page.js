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
