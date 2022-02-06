let blogs = [
    {
       heading: "javascript",
       img: "img/img1.jpg",
       description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Corporis dolores ad sunt debitis perferendis illo iure nemo vitae magnam quam non exercitationem nobis praesentium tempore qui minima quisquam pariatur saepe sint, suscipit atque"
    },
    {
       heading: "React",
       img: "img/img2.jpg",
       description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Corporis dolores ad sunt debitis perferendis illo iure nemo vitae magnam quam non exercitationem nobis praesentium tempore qui minima quisquam pariatur saepe sint, suscipit atque"
    },
    {
       heading: "HTML&CSS",
       img: "img/img3.jpg",
       description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Corporis dolores ad sunt debitis perferendis illo iure nemo vitae magnam quam non exercitationem nobis praesentium tempore qui minima quisquam pariatur saepe sint, suscipit atque"
    },
    {
       heading: "Python",
       img: "img/img4.jpg",
       description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Corporis dolores ad sunt debitis perferendis illo iure nemo vitae magnam quam non exercitationem nobis praesentium tempore qui minima quisquam pariatur saepe sint, suscipit atque"
    },
    {
       heading: "Angular",
       img: "img/img5.jpg",
       description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Corporis dolores ad sunt debitis perferendis illo iure nemo vitae magnam quam non exercitationem nobis praesentium tempore qui minima quisquam pariatur saepe sint, suscipit atque"
    },
    {
       heading: "Angular",
       img: "img/img5.jpg",
       description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Corporis dolores ad sunt debitis perferendis illo iure nemo vitae magnam quam non exercitationem nobis praesentium tempore qui minima quisquam pariatur saepe sint, suscipit atque"
    },
]

function add(){
 
    let title = document.getElementById('name').value
    let upimg = document.getElementById('imgupload').value;
    let descrip = document.getElementById('des').value;
   
    blogs.push({heading:title,
       description:descrip
    })
    
    
}
let blog = document.getElementById('blogs')
// console.log(blog)
 for(let i = 0;i<blogs.length;i=i+1){
   let blogContainer = document.createElement('div');
   blogContainer.classList.add("blog")
//    console.log( blogs[i].heading)
   let title = document.createElement('h2');
  title.innerText = blogs[i].heading;
  let img = document.createElement("img");
  img.src = blogs[i].img;
   let des = document.createElement("p")
   des.innerText = blogs[i]. description;
//    console.log(blogContainer,title,des)
   blog.appendChild(blogContainer)
//    console.log(blogContainer)
   let del = document.createElement("button");
   let update = document.createElement("button");
    del.innerText = "Delete"
    update.innerText = "Update"
  
   blogContainer.append(title,img,des,del,update)

    del.addEventListener('click',(e)=>{
        
        blogContainer.style.display = 'none'
    })

 }
   
// let myform = document.getElementById('myform')
// console.log(myform)
// myform.addEventListener('submit',add)






 