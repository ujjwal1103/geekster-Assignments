console.log("running");

var img = document.getElementById("img");

img.addEventListener('dblclick',changeColor);
count = 0;
var heart = document.getElementById("heart");
var like = document.getElementById("para");
function changeColor(){

    count = count+1;
    heart.classList.remove("far");
    heart.classList.add("fas"); 
    heart.style.color = "red";
    like.innerText = count;
  
}
heart.addEventListener('click',chnageNormal)

function chnageNormal(){
    heart.classList.remove("fas");
    heart.classList.add("far");
    heart.style.color = "black";
    like.innerText = count-1;
}
