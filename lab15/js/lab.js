// index.js - Lab 13 Loops
// Author: Caitlin Smith and Alice Sheinin
// Date: 5/31/23

//add a click event to the button
$('#activate').click(function(){
//when the user clicks the button, use a jQuery AJAX call to fetch output from your API
//using the ajax method
$.ajax({
//The URL for the request
url: "https://yesno.wtf//api",
data: {},
type: "GET",
dataType: "json",
})
.done(function(data){
        console.log(data);
        var answer = data.answer;
        var imgU = data.image;
        $('#output').html(answer);
        $('#output').appened("<img src =" + imgU + ">");
}
);
});


//Put the output of the AJAX call in the output div. Either:
//parse the JSON data structure like we did in lecture, or
//use JSON.stringify(data) to convert your data into a string