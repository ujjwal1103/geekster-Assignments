console.log("dec_22 Assignment No 1")
//create an array using .push with prompt and also using parseInt(); -> Take three numbers and find max. (Using arrayays)

var array = [];
var i = parseInt(prompt("Enter 1st Number"))
array.push(i);
 i = parseInt(prompt("Enter 2nd Number"))
array.push(i);
 i = parseInt(prompt("Enter 3st Number"))
array.push(i);


if((array[0] >= array[1]) && (array[0] >= array[2])) {
	alert(array[0]);
  } 
  else if ((array[1] >= array[0]) && (array[1] >= array[2])) {
	alert(array[1]);
  } 
  else {
	alert(array[2]);
  }

