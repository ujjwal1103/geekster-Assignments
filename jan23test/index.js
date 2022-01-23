var dark = document.getElementById("dark");
dark.addEventListener('click', darkEnable);
dark.addEventListener('dblclick', lightEnable);

function darkEnable(){
    var nav = document.getElementById("nav")
    var todos = document.getElementById("todos")
    nav.style.backgroundColor = "white";
    nav.style.color = "black";
    todos.style.backgroundColor = "#333030";
    
}
function lightEnable(){
    var nav = document.getElementById("nav")
    var todos = document.getElementById("todos")
    nav.style.backgroundColor = "#333030";
    nav.style.color = "white";
    todos.style.backgroundColor = "#faebd7";
    
}