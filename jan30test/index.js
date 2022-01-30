var output = document.getElementById("output")
function searchUniversity(country){
    const url = `http://universities.hipolabs.com/search?country=${country}`;
    fetch(url)
    .then(response => response.json())
    .then((Data) => {
        var n = Data.length;
        for(var i=0;i<n;i++){
           var p = document.createElement("span")
           p.innerHTML=(Data[i].name+"<br>");
           output.append(p)  
        }
    });
}




 onload = () =>{
    
    const search = document.querySelector("input[type='text']");
    search.onkeyup = () => {
        searchUniversity(search.value);
    }
}