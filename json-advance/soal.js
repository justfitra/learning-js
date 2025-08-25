// Soal Latihan

// Buat array awal students dengan 3 data siswa (id, name, age), lalu simpan ke localStorage.
// Contoh:

// { id: 1, name: "Budi", age: 18 }

// Tambahkan 2 siswa baru ke localStorage.

// Update umur siswa dengan id = 2 menjadi 20.

// Hapus siswa dengan id = 1.

// Cari siswa berdasarkan name (misalnya "Andi")

// Buat function getAllStudents() → ambil semua data dari localStorage.

// Buat function addStudent(student) → tambah data siswa.

// Buat function updateStudent(id, newData) → update data siswa.

// Buat function deleteStudent(id) → hapus siswa.

// Buat function searchStudent(name) → cari siswa berdasarkan nama.

const id = document.getElementById("id");
const name = document.getElementById("name");
const age = document.getElementById("age");
const form = document.getElementById("form");
const list = document.getElementById("list");
const search = document.getElementById("search");
const nameSearch = document.getElementById("nameSearch");

let students = [
  { id: 1, name: "Fitra Maulana", age: 19 },
  { id: 2, name: "Denis", age: 17 },
  //   { id: 3, name: "Rocky", age: 21 },
];

// simpan data awal ke localStorage
if (!localStorage.getItem("data")) {
  localStorage.setItem("data", JSON.stringify(students));
}

const renderStudents = () => {
  list.innerHTML = ""; // clear list dulu biar gak dobel
  let data = JSON.parse(localStorage.getItem("data")) || [];
  data.forEach((res) => {
    const li = document.createElement("li");
    const spanName = document.createElement("span");
    const spanAge = document.createElement("span");
    const buttonEdit = document.createElement("button");
    const buttonDelete = document.createElement("button");

    spanName.textContent = "Age : " + res.name;
    spanAge.textContent = "Age : " + res.age;
    buttonEdit.textContent = "Edit";
    buttonDelete.textContent = "Delete";

    buttonEdit.addEventListener("click", () => updateStudent(res.id));
    buttonDelete.addEventListener("click", () => deleteStudent(res.id));

    li.appendChild(spanName);
    li.appendChild(spanAge);
    li.appendChild(buttonEdit);
    li.appendChild(buttonDelete);
    list.prepend(li);
  });
};

const addStudent = (id, name, age, e) => {
  e.preventDefault();
  if (name && age !== "") {
    const idData = parseInt(id);
    const ageData = parseInt(age);
    const newStudent = { id: idData, name: name, age: ageData };
    let data = JSON.parse(localStorage.getItem("data")) || [];
    data.push(newStudent);
    localStorage.setItem("data", JSON.stringify(data));
    renderStudents();
  }

  form.reset();
};

const updateStudent = (id) => {
  list.innerHTML = ""; // clear list dulu biar gak dobel
  let data = JSON.parse(localStorage.getItem("data")) || [];
  if (id) {
    data = data.forEach((res) => {
      if (id === res.id) {
        const newName = prompt("add new name : ", res.name);
        const newAge = prompt("add new age : ", res.age);

        res.name = newName;
        res.age = newAge;
      } else {
        res;
      }
      localStorage.setItem("data", JSON.stringify(data));
    });
    renderStudents();
  }
};

const deleteStudent = (id) => {
  list.innerHTML = ""; // clear list dulu biar gak dobel
  let data = JSON.parse(localStorage.getItem("data")) || [];
  if (id) {
    data = data.filter((res) => res.id !== id);
    localStorage.setItem("data", JSON.stringify(data));
    renderStudents();
  }
};

const searchStudent = (e, name) => {
  e.preventDefault();
  list.innerHTML = ""; // clear list dulu biar gak dobel
  let data = JSON.parse(localStorage.getItem("data")) || [];
  if (name) {
    data = data.find((res) => res.name === name);
    console.log(data);

    const li = document.createElement("li");
    const spanName = document.createElement("span");
    const spanAge = document.createElement("span");
    const buttonEdit = document.createElement("button");
    const buttonDelete = document.createElement("button");

    spanName.textContent = "Age : " + data.name;
    spanAge.textContent = "Age : " + data.age;
    buttonEdit.textContent = "Edit";
    buttonDelete.textContent = "Delete";

    buttonEdit.addEventListener("click", () => updateStudent(data.id));
    buttonDelete.addEventListener("click", () => deleteStudent(data.id));

    li.appendChild(spanName);
    li.appendChild(spanAge);
    li.appendChild(buttonEdit);
    li.appendChild(buttonDelete);
    list.prepend(li);

    form.reset();
  }
};

form.addEventListener("submit", (e) =>
  addStudent(id.value, name.value.trim(), age.value.trim(), e)
);

search.addEventListener("submit", (e) =>
  searchStudent(e, nameSearch.value.trim())
);
document.addEventListener("DOMContentLoaded", renderStudents);
