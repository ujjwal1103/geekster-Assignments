var imgAr = ["images/img1.jpg",
                "images/img2.jpg",
                "images/img3.jpg",
                "images/img4.jpg",
                "images/img5.jpg",
                "images/img6.jpg",
                "images/img7.jpg",
                "images/img8.jpg",
                "images/img9.jpg"];

for(i=0; i<imgAr.length;i++){
    var con_ref = document.querySelector(".gallery");

var newele = document.createElement("img");

newele.src = imgAr[i];

con_ref.appendChild(newele);
newele.addEventListener('click', imageClicked);
}
var imgpre = document.getElementById("imgpre");
function imageClicked(event) {
   
    imgpre.classList.remove("d-none");
    var imgR = imgpre.children[0];
    imgR.src = event.target.src;
}
var btnre = document.getElementById('cross');
btnre.addEventListener('click',dnone);

function dnone(){
   imgpre.classList.add("d-none");
}