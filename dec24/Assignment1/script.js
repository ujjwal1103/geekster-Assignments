console.log("dec_24 Assignment No 1")
//Factorial of a number input is 5. factorial of 5 -> 5 * 4 * 3 * 2 * 1 factorial of 7 -> 7 * 6 * 5 * 4 * 3 * 2 * 1 -> Take n from the user and alert the factorial of that number.

var fact_of = parseInt(prompt("enter a number")),i;
var factorial = 1;
for (i = 1;i<=fact_of;i=i+1){
	factorial = factorial*i;
}
alert("Factorial of " + fact_of + " is " + factorial);