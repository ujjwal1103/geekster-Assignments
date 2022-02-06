/*write a js function that will add or multiply all the arguments being provided to it.
please note users can provide any number of arguments but at least 3. the first argument will always be a character (+ or * ) denoting what operation to perform.
console.log("Assignment1")*/


function addition(a, b, ...arr) {
    let ans = 0;
    ans = ans + a + b;
    for(const val of arr) {
       ans = ans + val;
    }
    return (ans);
 };
 
 console.log(addition(2, 3, 5,6,7,8,7));
 
 function multiply(a, b, ...arr) {
    let ans = 1;
    ans = ans * a * b;
    for(const val of arr) {
       ans = ans * val;
    }
    return (ans);
 };
 
 console.log(multiply(2, 3, 5, 6, 1, 2, 5, 4,4));



// Assignment -https://leetcode.com/problems/shuffle-string/
console.log("Assignment2")

 let str = "UJJWALLADE";

const arr = str.split('')

let new_arr = [];

for(let i = 0; i < arr.length;  i++) {
   new_arr.push(arr[i]);
}

console.log(new_arr.reverse());