// index.js - Lab 11 Libraries & jQuery
// Author: Caitlin Smith and Alice Sheinin
// Date: 5/17/23

//
$("#challenge").append("<button id='challenge-button'>Challenge</button>");
$("#problem").append("<button id='problem-button'>Problem</button>");
$("#result").append("<button id='result-button'>Result</button>");

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

