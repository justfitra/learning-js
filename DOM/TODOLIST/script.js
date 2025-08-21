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
    let taskLists = JSON.parse(localStorage.getItem("task")) || [];

    // Hapus task lama (pakai filter)
    taskLists = taskLists.filter((task) => task !== span.textContent);

    // Prompt untuk task baru
    const editTask = prompt("Edit Tugas:", span.textContent);

    if (editTask && editTask.trim() !== "") {
      // Update span di tampilan
      span.textContent = editTask.trim();

      // Tambah task baru ke array
      taskLists.push(editTask.trim());

      // Simpan lagi ke localStorage
      localStorage.setItem("task", JSON.stringify(taskLists));
    }
  });

  deleteButton.addEventListener("click", function () {
    let taskLists = JSON.parse(localStorage.getItem("task")) || [];

    // Hapus task sesuai text
    taskLists = taskLists.filter((task) => task !== span.textContent);

    // Simpan lagi
    localStorage.setItem("task", JSON.stringify(taskLists));

    // Hapus dari tampilan
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
      let taskLists = JSON.parse(localStorage.getItem("task")) || [];

      // Hapus task lama (pakai filter)
      taskLists = taskLists.filter((task) => task !== span.textContent);

      // Prompt untuk task baru
      const editTask = prompt("Edit Tugas:", span.textContent);

      if (editTask && editTask.trim() !== "") {
        // Update span di tampilan
        span.textContent = editTask.trim();

        // Tambah task baru ke array
        taskLists.push(editTask.trim());

        // Simpan lagi ke localStorage
        localStorage.setItem("task", JSON.stringify(taskLists));
      }
    });

    deleteButton.addEventListener("click", function () {
      let taskLists = JSON.parse(localStorage.getItem("task")) || [];

      // Hapus task sesuai text
      taskLists = taskLists.filter((task) => task !== span.textContent);

      // Simpan lagi
      localStorage.setItem("task", JSON.stringify(taskLists));

      // Hapus dari tampilan
      todoList.removeChild(li);
    });
  });

  noTasks.style.display = "none";
});
