$(document).ready(function() {
    //NAVIGATIE SHRINK//
    // When the user scrolls down 80px from the top of the document, resize the navbar's padding and the logo's font size
    window.onscroll = function() {scrollFunction()};
    function scrollFunction() {
    
        if (document.body.scrollTop > 80 || document.documentElement.scrollTop > 80) {
        document.getElementById("navbar").style.padding = "10px 10px";
        document.getElementById("logo").style.width = "25px";
        document.getElementById("menu_icon").style.fontSize = "25px";
    } else {
        document.getElementById("navbar").style.padding = "25px 10px";
        document.getElementById("logo").style.width = "45px";
        document.getElementById("menu-icon").style.font = "45px";
    }
    };

    //MOBILE NAVIGATION//
/* Toggle between showing and hiding the navigation menu links when the user clicks on the hamburger menu / bar icon */
    function myFunction() {
    var x = document.getElementById("links");
    if (x.style.display === "block") {
      x.style.display = "none";
    } else {
      x.style.display = "block";
    }
  }
});
