// index.js - Lab 13 Loops
// Author: Caitlin Smith and Alice Sheinin
// Date: 5/24/23

//Create a "FizzBuzz" function similar to how we did in class.
function fizzBuzz(){
//Loop through numbers 1 to 200, listing them as you go
for (var i=0; i<200; i++){
//If the number is a multiple of 3, if should print "Fizz!"
if ( i % 3 == 0){
    console.log("Fizz!");
}
//If the number is a multiple of 5, it should print "Buzz!"
if ( i % 5 == 0){
    console.log("Buzz!");
}
//If the number is a multiple of 7, it should print "Boom!"
if ( i % 7 == 0){
    console.log("Boom!");
}
//If the number is multiple 3 ,5 and 7
if (i % 105 == 0){
    console.log("FizzBuzzBoom!");
}
//If the number is multiple 5 and 7
else if (i % 35 == 0){
    console.log("FizzBoom!");
}
//If the number is multiple 3 and 7
else if (i % 21 == 0){
    console.log("BuzzBoom!");
}
//If the number is multiple 3 and 5
else if (i % 15 == 0){
    console.log("BuzzBoom!");
}
else {
    console.log(i);
}
}
}

