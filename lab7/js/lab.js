// index.js - Lab 7 Functions
// Author: Caitlin Smith and Alice Sheinin
// Date: 5/5/3

function userNameUCSC(){
  var userName = window.prompt("Please provide your user name");
  document.writeln("userName =", userName);
  //split string to array
  var nameArray = userName.split('');
  document.writeln("nameArray =", nameArray);
  //sort the array
  var nameSort = nameArray.sort();
  document.writeln("nameSort =", nameSort);
  //join array back to string
  var nameSorted = nameSort.join('');
  document.writeln("nameSorted =", nameSorted); 
  return nameSorted;
}
