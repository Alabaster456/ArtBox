$(document).ready(function(){
  fadeStuff();
});


function fadeStuff() {
  $("#firstimage").delay(3000).fadeOut('slow');
  $("#slogan").delay(3000).fadeOut('slow');
  $("#secondimage").delay(3000).fadeIn('slow');
  $("#slogan1").delay(3000).fadeIn('slow');
  $("#text1").delay(3000).fadeIn('slow');
 $("#secondimage").delay(3000).fadeOut("slow");
  $("#slogan1").delay(3000).fadeOut('slow');
  $("#text1").delay(3000).fadeOut('slow');
  $("#slogan2").delay(7000).fadeIn('slow');
  $("#thirdimage").delay(7000).fadeIn('slow');
  $("#text2").delay(7000).fadeIn('slow');
  $("#text3").delay(7000).fadeIn('slow');
}
