// index.js - Lab 11 Libraries & jQuery
// Author: Caitlin Smith and Alice Sheinin
// Date: 5/17/23

//
$("#challenge").append("<button id='c'>Button</button>");
$("#problem").append("<button id='p'>Button</button>");
$("#result").append("<button id='r'>Button</button>");

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

