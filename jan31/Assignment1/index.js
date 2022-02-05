let arr = [2,7,11,15,14,5,9,6,3]
let tar = parseInt(prompt("Enter target value"))
let output = document.getElementById("output");
if(tar < 20){
for (let i = 0 ;i<arr.length;i++){
    if(arr[i]+arr[i+1]=== tar){
        output.innerHTML =` ${arr[i]} , ${arr[i+1]}`;
    }
    else{
        alert("Target sum not found")
        output.innerHTML =` Target sum not found`
        output.style.color = "red"
        break;
    }
}}
else{
    alert("target should be Less Than 20")
}