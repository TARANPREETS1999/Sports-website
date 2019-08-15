$(function(){



$('#scroll,#scroll1,#scroll2').on('click',function(){

$('html,body').animate({
  scrollTop:$($(this).attr('href')).offset().top - 1
},800);

});
});

window.onscroll = function() {scrol()};

function scrol() {
    if (document.documentElement.scrollTop > 10) {
        document.getElementById("tifer").style.display = "block";
    } else {
        document.getElementById("tifer").style.display = "none";
    }
}

function tiger() {

    document.documentElement.scrollTop = 0;
}
var t=1;
p(t);
function s(n)
{ p(t+=n);
}
function c(n)
{
  p(t=n);
  }
  function p(n)
  {

  var r=document.getElementsByClassName("mySlides");
  var dots=document.getElementsByClassName("dot")
  if(n>r.length)
  {t=1;}
  if(n<1)
  {t=r.length;}
  var i;
  for(i=0;i<r.length;i++)
  {
  r[i].style.display="none";}
   for (i = 0; i < dots.length; i++) {
      dots[i].className = dots[i].className.replace(" active", "");
  }
  r[t-1].style.display ="block";
    dots[t-1].className += " active";


  }
  setInterval(P,200);
  function open(){
document.getElementsByClassName("container").display="block";

  }
  function fun(){

document.getElementsByClassName("container").display="none";

  }
