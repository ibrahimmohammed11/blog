/* back to top button  */

$("#toTop").click(function () {
  $("body,html").animate({ scrollTop: 0 }, 1500)
});

$(window).scroll(function () {
  let top = $(window).scrollTop();
  if (top > 700) {
      $("#toTop").fadeIn(1000)
  }
  else {
      $("#toTop").fadeOut(1000)
  }
})
/* back to top button  */

/* nav-links smooth scroll  */
$(".nav-link").click(function(){
  let currentLink=$(this).attr("href");
  let secOffset=$(currentLink).offset().top;
  $("body,html").animate({scrollTop:secOffset},1500)
})
/* nav-links smooth scroll  */
/* navbar change color  */
let aboutOffset=$("#about").offset().top;
$(window).scroll(function(){
  let top=$(window).scrollTop();
  if(top>aboutOffset-30)
  {
    $(".navbar").css({
      "background-color":"#0078ff",
      "transition":"all 1.5s"
    })
    $(".icon1").css({
      "color":"#a79344",
    })
    $("#toTop").fadeIn(1000);
    startCounter();
  }
  else
  {
    $(".navbar").css({
      "background-color":"#003366",
      "transition":"all 1.5s"
    })
    $(".icon1").css({
      "color":"#a79344",
    })
    $("#toTop").fadeOut(1000);
  }
})
/* navbar change color  */
/* loading screen  */
$(document).ready(function(){
  $("#loading").fadeOut(2500,function(){
    $("body").css("overflow","visible")
  })
})
/* loading screen  */


/* typed  */
var typed = new Typed('.element', {
  strings: ['Front End Developer', 'Graphic Designer'],
  loop: true,
  typeSpeed: 100,
  backSpeed: 100,
  showCursor: false,
});
/* typed  */

/* AOS animation  */
AOS.init();
/* AOS animation  */

/*  counterUp  */
function counterUp(element  , limit , speed) {
  let counter = 0;

  let x = setInterval(() => {
      counter++;
      $(element).html(counter);
      if (counter == limit) {
          clearInterval(x);
      }

  }, speed);
}



function startCounter( ) { 

  counterUp("#works" , 50 , 100);
  counterUp("#experiece" , 7 , 500);
  counterUp("#clients" , 30 , 200);
  counterUp("#award" , 15, 400);
}

/*  counterUp  */

/* Date  */
var today = new Date();
var dd = String(today.getDate()).padStart(2, '0');
var mm = String(today.getMonth() + 1).padStart(2, '0'); //January is 0!
var yyyy = today.getFullYear();

today = `${dd} / ${mm} / ${yyyy}`;
document.getElementById("today").innerHTML=today;
/* Date  */