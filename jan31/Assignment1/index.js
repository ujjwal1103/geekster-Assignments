let arr = [2,7,11,15,14,5,9,6,3]
let tar = 19;
let output = document.getElementById("output");

for (let i = 0 ;i<arr.length;i++){
    if(arr[i]+arr[i+1]=== tar){
        output.innerHTML =` ${arr[i]} , ${arr[i+1]}`;
    }
    
}
