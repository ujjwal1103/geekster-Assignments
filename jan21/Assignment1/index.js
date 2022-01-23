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


//  IMG Collection

var imgAr = [
    {
    name: "codersLearn",
    img:"images/ben-o-bro-wpU4veNGnHg-unsplash.jpg",
    text:"coders.learning Amazing Turtle Graphics Design with Coloursys Library Python 😮💻🔥"
    }
,
    {
    name: "Javascript",
    img:"images/boxed-water-is-better-9VwoPiXZIQo-unsplash.jpg",
    text:"Javscript is amazing😇😇"
    }
,
    {
    name: "css",
    img:"images/boxed-water-is-better-jbcY_yvsDzk-unsplash.jpg",
    text:"css is magix"
    }
,
    {
    name: "python",
    img:"images/istockphoto-1326549279-170667a.jpg",
    text:"the python page"
    }
];

for(i=0; i<imgAr.length;i++){
 var con_ref = document.querySelector(".gallery");
var newele = document.createElement("img");
newele.src = imgAr[0].img;
con_ref.appendChild(newele);
// newele.addEventListener('click', imageClicked);
}
// var imgpre = document.getElementById("imgpre");
// function imageClicked(event) {
   
//     imgpre.classList.remove("d-none");
//     var imgR = imgpre.children[0];
//     imgR.src = event.target.src;
// }
// var btnre = document.getElementById('cross');
// btnre.addEventListener('click',dnone);

// function dnone(){
//    imgpre.classList.add("d-none");
// }


