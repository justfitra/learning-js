const todoInput = document.getElementById("todoInput");
const form = document.getElementById("form");
const todoList = document.getElementById("todoList");
const errorMsg = document.getElementById("error"); // <p id="error"></p> di HTML
const completeList = document.querySelector(".completeList");
const list = document.querySelector(".list");
const noTasks = document.getElementById("noTasks");
let todos = [];

form.addEventListener("submit", function (e) {
  e.preventDefault();

  const task = todoInput.value.trim();
  console.log(task);

  if (task === "") {
    errorMsg.textContent = "Tugas tidak boleh kosong!";
    return;
  } else {
    errorMsg.textContent = "";
  }

  const li = document.createElement("li");
  const span = document.createElement("span");
  const deleteButton = document.createElement("button");
  const editButton = document.createElement("button");
  const endButton = document.createElement("button");
  span.textContent = task;
  li.classList.add("todo-item");
  li.style.display = "flex";

  deleteButton.textContent = "Delete";
  editButton.textContent = "Edit";
  endButton.textContent = "Finish";
  li.appendChild(span);
  li.appendChild(editButton);
  li.appendChild(deleteButton);
  li.appendChild(endButton);
  todoList.appendChild(li);
  todos.push(task);
  localStorage.setItem("task", JSON.stringify(todos));
  console.log(li);

  editButton.addEventListener("click", function () {
    span.remove();
    const editTask = prompt("Edit Tugas ", task);
    editTask.type = "text";
    li.prepend(editTask);

    li.replaceChild(editTask, span);
  });

  deleteButton.addEventListener("click", function () {
    todoList.removeChild(li);
  });

  endButton.addEventListener("click", function () {
    li.classList.toggle("completed-list");
    const completedDelete = document.createElement("button");
    const completedEditButton = document.createElement("button");
    completedDelete.textContent = "Delete";
    completedEditButton.textContent = "Edit";
    li.appendChild(completedEditButton);
    li.appendChild(completedDelete);
    completeList.appendChild(li);

    completedDelete.addEventListener("click", function () {
      completeList.removeChild(li);
      console.log("button clicked");
    });

    completedEditButton.addEventListener("click", function () {
      span.remove();
      const editTask = prompt("Edit Tugas ", task);
      editTask.type = "text";
      li.prepend(editTask);

      li.replaceChild(editTask, span);
    });

    endButton.remove();
    deleteButton.remove();
    editButton.remove();
  });

  noTasks.style.display = "none"; // Sembunyikan pesan "Tidak ada tugas" jika ada tugas
  form.reset();
});

window.addEventListener("load", function (e) {
  e.preventDefault();
  const tasks = JSON.parse(localStorage.getItem("task"));

  tasks.map((res) => {
    const task = res;
    const li = document.createElement("li");
    const span = document.createElement("span");
    const deleteButton = document.createElement("button");
    const editButton = document.createElement("button");
    const endButton = document.createElement("button");
    span.textContent = task;
    li.classList.add("todo-item");
    li.style.display = "flex";

    deleteButton.textContent = "Delete";
    editButton.textContent = "Edit";
    endButton.textContent = "Finish";
    li.appendChild(span);
    li.appendChild(editButton);
    li.appendChild(deleteButton);
    li.appendChild(endButton);
    todoList.appendChild(li);
    editButton.addEventListener("click", function () {
      // console.log("clicked");
      let taksLists = JSON.parse(localStorage.getItem("task"));
      // 2. Hapus item tertentu (pakai filter)
      taksLists = taksLists.filter((task) => task !== span.textContent);

      // 3. Simpan lagi ke localStorage
      localStorage.setItem("task", JSON.stringify(taksLists));

      // console.log(tasks);

      const editTask = prompt("Edit Tugas " + span.textContent);
      const spanEdit = document.createElement("span");
      span.remove();

      spanEdit.prepend(editTask);
      console.log(spanEdit.textContent);
      todos.push(spanEdit.textContent);
      localStorage.setItem("task", JSON.stringify(todos));
      li.prepend(spanEdit);

      li.replaceChild(spanEdit, span);
    });
    deleteButton.addEventListener("click", function () {
      let taksLists = JSON.parse(localStorage.getItem("task"));
      // 2. Hapus item tertentu (pakai filter)
      taksLists = taksLists.filter((task) => task !== span.textContent);

      // 3. Simpan lagi ke localStorage
      localStorage.setItem("task", JSON.stringify(taksLists));
      todoList.removeChild(li);
    });
  });

  noTasks.style.display = "none";
});
