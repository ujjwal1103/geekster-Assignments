
   
var number = parseInt(prompt("Enter your number"))
function arr(n,c1,c2){
    var mul = c1(n);
    var add = c2(n);
    return [mul , add] ;
}
function mulBy4(pr){
    return pr * 4;
}
function add9(pr){
    return pr + 9;
}
var fun = arr(number,mulBy4,add9);
console.log('The multiplication and summation are ',fun);