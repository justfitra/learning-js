const todoInput = document.getElementById("todoInput");
const form = document.getElementById("form");
const todoList = document.getElementById("todoList");

form.addEventListener("click", function (e) {
  e.preventDefault();

  if (todoInput.value) {
    const deleteTodo = document.createElement("button");
    const newTodo = document.createElement("li");

    newTodo.textContent = todoInput.value;
    deleteTodo.textContent = "delete";
    deleteTodo.classList.add(todoInput.value);
    newTodo.appendChild(deleteTodo);
    todoList.appendChild(newTodo);

    deleteTodo.addEventListener("click", function () {
      newTodo.remove();
    });
  }
});
