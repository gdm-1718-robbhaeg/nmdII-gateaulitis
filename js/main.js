$(document).ready(function () {
    //NAVIGATIE SHRINK//
    // When the user scrolls down 80px from the top of the document, resize the navbar's padding and the logo's font size
    window.onscroll = function () {
        scrollFunction()
    };

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

    //COUNTDOWN TIMER//
    var countDownDate = new Date("Jan 28, 2019 16:00:00").getTime();

    var x = setInterval(function () {

        var now = new Date().getTime();

        var distance = countDownDate - now;

        var days = Math.floor(distance / (1000 * 60 * 60 * 24));
        var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
        var seconds = Math.floor((distance % (1000 * 60)) / 1000);

        document.getElementById("timer").innerHTML = days + "d " + hours + "h " +
            minutes + "m " + seconds + "s ";

        if (distance < 0) {
            clearInterval(x);
            document.getElementById("timer").innerHTML = "EXPIRED";
        }
    }, 1000);
});