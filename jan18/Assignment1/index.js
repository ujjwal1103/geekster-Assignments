console.log("Runnning....")



var img = document.querySelector(".img");

img.addEventListener('dblclick',changeColor);
count = 0;
var heart = document.querySelector(".heart");
var like = document.querySelector(".para");
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
