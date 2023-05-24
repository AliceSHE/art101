// index.js - Lab 11 Libraries & jQuery
// Author: Caitlin Smith and Alice Sheinin
// Date: 5/17/23


//create buttons with text labels and add to sections. 
$("#challenge").append("<button id='c'>Challenge</button>");
$("#problem").append("<button id='p'>Problem</button>");
$("#result").append("<button id='r'>Result</button>");

//click event to the challenge button and toggle 
$("#c").click(function () {
    $(this).parent().toggleClass("special");
})
//click event to the problem button and toggle 
$("#p").click(function () {
    $(this).parent().toggleClass("special");
})
//click event to the result button and toggle 
$("#r").click(function () {
    $(this).parent().toggleClass("special");
})

