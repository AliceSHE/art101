// index.js - Lab 13 Loops
// Author: Caitlin Smith and Alice Sheinin
// Date: 5/24/23

var str;
//Create a "FizzBuzz" function similar to how we did in class.
function fizzBuzz() {
    //Loop through numbers 1 to 200, listing them as you go
    for (var i = 1; i <= 200; i++) {
        var str = "";
        //If the number is a multiple of 3, if should print "Fizz!"
        if (i % 3 == 0) {
            str += "Fizz";
        }
        //If the number is a multiple of 5, it should print "Buzz!"
        if (i % 5 == 0) {
            str += "Buzz";
        }
        //If the number is a multiple of 7, it should print "Boom!"
        if (i % 7 == 0) {
            str += "Boom";
        }

        //Set str to number
        if (str == "") {
            str = i;
        }

        $("#output").append("<div>" + str + "</div>");

    }
}
(fizzBuzz());