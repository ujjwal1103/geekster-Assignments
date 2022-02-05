



let searchBox = document.getElementById('imgInput');
let imgGallery = document.getElementsByClassName('imgContainer')[0];
searchBox.addEventListener('keyup',()=>{
      
      loading();
   
})
let loading = ()=>{
    removeImg();
    let url = 'https://api.unsplash.com/search/photos?query='+searchBox.value+'&per_page=30&client_id=SouHY7Uul-OxoMl3LL3c0NkxUtjIrKwf3tsGk1JaiVo';
    fetch(url)
    .then(res =>{
        if(res.ok){
            return res.json();
        }
    })
   
        
    .then(data =>{
        
        for(let i = 0;i<data.results.length;i++){
            let box = document.createElement("div");
            let img = document.createElement("img");
            img.src = data.results[i].urls.small;
            imgGallery.appendChild(box)
            box.classList.add("box")
            box.append(img)
            let div = document.getElementById("preview")
            let container = document.getElementsByClassName('container')[0];
            box.addEventListener('click',()=>{
                
                container.classList.add('d-none');
                let pimage=document.getElementById('pimg')
                pimage.src = data.results[i].urls.small;
                div.classList.remove('d-none');
            })
            let close = document.getElementById('close')
            close.addEventListener('click',()=>{
                div.classList.add("d-none");
                container.classList.remove("d-none");
                console.log("remove")

            })
            
        }
    
   
   
    })
}

let removeImg = ()=>{
    imgGallery.innerHTML="";
}






