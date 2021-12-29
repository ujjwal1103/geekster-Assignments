console.log("dec_24 Assignment No 3")
//Write a program to check the given number is a perfect square or not! (Don't use function)


var n = parseInt(prompt("Enter a number"));
bool = 0;
for(var i = 1;i <n;i=i+1){
    if(i*i == n){
        bool = 1; 
        break;
    }
}


if (bool == 1){
    alert("Number is perfect Square")
}
else{
    alert("Number is not Perfect square Number")
}
