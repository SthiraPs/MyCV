
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

window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 800 || document.documentElement.scrollTop > 800) {
    up.style.display = "block";
  }
  else {
    up.style.display = "none";
  }
}

function topFunction() {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
}


$(document).ready(function(){
	
	$('.parallelogram').ripples({
		resolution:512,
		dropRadius:10
	});
	$('header').ripples({
		resolution:512,
		dropRadius:20
	});
});














