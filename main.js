
function openNav() {
    document.getElementById("mySidenav").style.width = "250px";
    document.getElementById("main-body").style.marginLeft = "250px";
    document.getElementById("main").style.display = 'none'
  }
  
function closeNav() {
    document.getElementById("mySidenav").style.width = "0";
    document.getElementById("main-body").style.marginLeft= "0";
    document.getElementById("main").style.display = 'block'
}


$(document).ready(function ()
{
    
    AOS.init({
        easing: 'ease',
        duration: 1800,
        once: true
    })
});

var mybutton = document.getElementById("up");

window.onscroll = function() {scrollFunction()};
function scrollFunction() {
  if (document.body.scrollTop > 8000 || document.documentElement.scrollTop > 8000) {
    mybutton.style.display = "block";
  }
  else {
    mybutton.style.display = "none";
  }
}

function topFunction() {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
}