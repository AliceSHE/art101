// index.js - Lab 7 Functions
// Author: Caitlin Smith and Alice Sheinin
// Date: 5/5/3

function userNameUCSC() {
  var userName = window.prompt("Please provide your user name");
  console.log("userName =", userName);
  //split string to array
  var nameArray = userName.split('');
  console.log("nameArray =", nameArray);
  //sort the array
  var nameSort = nameArray.sort();
  console.log("nameSort =", nameSort);
  //join array back to string
  var nameSorted = nameSort.join('');
  dconsole.log("nameSorted =", nameSorted);
  return nameSorted;
}

//output
document.writeln("Thank you, I found your name: ", userNameUCSC(), "</br");