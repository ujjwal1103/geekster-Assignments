console.log("running")

var numm1 ="";
var numm2 ="";
var op = "";
var caldisplay = document.getElementById('output');

function numconcate(one_digit){
    if(op==""){
        numm1 = numm1 + one_digit;
        result(numm1);
    }
    else{
        numm2 = numm2 + one_digit;
        result(numm2);
    }
}



function insertOp(new_op){
    op = new_op;
}
function result(num){

   
    caldisplay.innerText = num;
    
}
function deleteLastDigit(){
    if(op == "") {
        numm1 = numm1.slice(0, -1);
        result(numm1);
    } else {
        numm2 = numm2.slice(0, -1);
        result(numm2);
    }

}
function equal(){
    if(op == "+"){
        numm1 = add(numm1,numm2);
        numm2 = "";
        op = "";
        result(numm1);
    }
   else if(op == "/"){
        numm1 = div(numm1,numm2);
        numm2 = "";
        op = "";
        result(numm1);
    }
   else if(op == "-"){
        numm1 = sub(numm1,numm2);
        numm2 = "";
        op = "";
        result(numm1);
    }
    else{
        numm1 = mul(numm1,numm2);
        numm2 = "";
        op = "";
        result(numm1);
    }
}function clearScreen(){
    if(op == "") {
        numm1 = "";
    result(numm1);
    } else {
        numm2 = "";
        result(numm2);
    }

}
function add(n1,n2){
    n1 = parseInt(n1);
    n2 = parseInt(n2);
    return n1+n2;
}
function div(n1,n2){
    n1 = parseFloat(n1);
    n2 = parseFloat(n2);
    return (n1/n2);
}
function sub(n1,n2){
    n1 = parseInt(n1);
    n2 = parseInt(n2);
    return n1-n2;
}
function mul(n1,n2){
    n1 = parseInt(n1);
    n2 = parseInt(n2);
    return n1*n2;
}

// console.log(result("showing"));