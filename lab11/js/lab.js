// index.js - Lab 11 Libraries & jQuery
// Author: Caitlin Smith and Alice Sheinin
// Date: 5/17/23

//
$("#challenge").append("<button id='challenge-button'>Button</button>");
$("#problem").append("<button id='problem-button'>Button</button>");
$("#result").append("<button id='result-button'>Button</button>");

//
$("#challenge").click(function(){
    $(this).parent().toggleClass("special");
})
//
$("#problem").click(function(){
    $(this).parent().toggleClass("special");
})
//
$("#result").click(function(){
    $(this).parent().toggleClass("special");
})

