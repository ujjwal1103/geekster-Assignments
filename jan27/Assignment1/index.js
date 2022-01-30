var state = {
    todos: [],
  };
  var todoListElement = document.getElementById("todo-list");
  var form = document.querySelector(".input-form");
  var inputElement = document.getElementById("todo-input");
  
  form.addEventListener("submit", addTodoItem);
  
  function addTodoItem(e) {
    e.preventDefault();
    if (inputElement.value !== "") {
      state.todos.push(inputElement.value);
      printItemToScreen(inputElement.value);
      inputElement.value = "";
    }
    console.log(state.todos);
  }
  
  function printItemToScreen(todoItem) {
    var todoHTML = `<div class="todo-item"  >
      <span id="item-${todoItem}">${todoItem}</span>
      <button onclick="doubleItem('${todoItem}')">double</button>
      <button onclick="deleteItem('${todoItem}')" style="font-size:20px;background-color:red">Delete</button>
    </div>`;
    //   deleteItem(todoItem);
    todoListElement.innerHTML += todoHTML;
    console.log(todoItem);
  }
  function doubleItem(item){
    var index1 = state.todos.indexOf(item);
    
        item = item +""+ item
        state.todos[index1] = item
        renderArray()
        
  }
 
  
  function deleteItem(item) {
    var index = state.todos.indexOf(item);
    state.todos.splice(index, 1);
    console.log(state.todos);
    renderArray();
  }
  
  function renderArray() {
    todoListElement.innerHTML = "";
    for (i in state.todos) {
      printItemToScreen(state.todos[i]);
    }
  }