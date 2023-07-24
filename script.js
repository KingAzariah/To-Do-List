function createTodo() {
    const listItem = document.createElement("li");
    const todosContainerElement = document.getElementById('todos-container');
    todosContainerElement.appendChild(listItem);
    const userInput = document.createElement("input");
    document.getElementById('note');
    listItem.setAttribute("onclick", "todoCheck(event, this)");
    document.getElementById('note').value = '';
  }
  
  function deleteTodos() {
    document.getElementById('todos-container').innerHTML = '';
  }
  
  function todoCheck(e, todo) {
    if (todo.style.textDecoration === '') {
      todo.style.textDecoration = 'line-through';
    } else {
      todo.style.textDecoration = '';
    }
  }