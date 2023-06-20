// $("h3").click(function(){
//     $("#singers div").slideToggle(1000);
// })
$(document).ready(function(){
  $("#singers div:first").css("display","block")
    $("h3").click( function(){
        $(this).next().slideToggle(1000);
        $("#singers div").not($(this).next()).slideUp(1000);
    });
});

var countDownDate = new Date("April 28, 2023").getTime();

// Update the count down every 1 second
var x = setInterval(function() {

  // Get today's date and time
  var now = new Date().getTime();

  // Find the distance between now and the count down date
  var distance = countDownDate - now;

  // Time calculations for days, hours, minutes and seconds
  var days = Math.floor(distance / (1000 * 60 * 60 * 24));
  var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  var seconds = Math.floor((distance % (1000 * 60)) / 1000);

  // Display the result in the element with id="demo"
  document.getElementById("days").innerHTML = days + "d ";
  document.getElementById("hour").innerHTML = hours + "h ";
  document.getElementById("minutes").innerHTML = minutes + "m ";
  document.getElementById("seconds").innerHTML =  seconds + "s ";


  // If the count down is finished, write some text
  if (distance < 0) {
    clearInterval(x);
   
  document.getElementById("days").innerHTML = "EXPIRED";
  document.getElementById("hour").innerHTML =  "EXPIRED";
  document.getElementById("minutes").innerHTML =   "EXPIRED";
  document.getElementById("seconds").innerHTML =   "EXPIRED";
  }
}, 1000);

$(function () {
    var max = 100;
    $("textarea").keyup(function () {
        var length = $(this).val().length;
        var character = max - length;
        console.log(character)
        if (character <= 0) {
            $("#char").text("your available character finished");
        } else {
            $("#char").text(character);
        }
    });
});


let sideBarPosition=$(".sideBar-content").innerWidth();
$("#sideBar").animate({left:-sideBarPosition},1000);

$("#sideBar span").click(function(){
    console.log($("#sideBar").css("left"));
    let sideBarPosition=$(".sideBar-content").innerWidth();
if($("#sideBar").css("left")=="0px"){
    $("#sideBar").animate({left:-sideBarPosition},1000);
}else{
    $("#sideBar").animate({left:"0px"},1000);
}

});

$(".closebtn").click(function(){
    console.log($("#sideBar").css("left"));
    let sideBarPosition=$(".sideBar-content").innerWidth();
if($("#sideBar").css("left")=="0px"){
    $("#sideBar").animate({left:-sideBarPosition},1000);
}else{
    $("#sideBar").animate({left:"0px"},1000);
}

});


