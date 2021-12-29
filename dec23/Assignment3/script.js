console.log("dec_23 Assignment No 3")
//Write a program to take an input from the user (num) and check whether it is a prime number or not.

var N = parseInt(prompt("Enter a number two check whether it is prime or not"));
var bool = false;
for(var i = 2;i<=N/2;i= i+1){
    if(N%i==0){
        alert("number is not prime");
        bool = true;
        break;
    }
}
if(bool == false){
    alert("Number is Prime Number");
}
