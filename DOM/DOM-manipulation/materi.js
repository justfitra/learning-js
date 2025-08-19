// Create New Element
const newElement = document.createElement("p");

// Create Content
newElement.textContent = "Hello this is new paragraph";

// Add to Page
document.body.prepend(newElement); // add to begining page
document.body.appendChild(newElement); // add to last page

// Study Case
const addParagraph = document.getElementById("addParagraph");
const container = document.getElementById("container");

addParagraph.addEventListener("click", function () {
  const newElement = document.createElement("p");
  newElement.textContent = "this is new again";
  container.appendChild(newElement);
});

const addItems = document.getElementById("addItems");
const listItems = document.getElementById("listItems");
let count = 1;

addItems.addEventListener("click", function () {
  const newElement = document.createElement("li");
  newElement.textContent = "items ke" + count;

  listItems.appendChild(newElement);

  count++;
});

// Delete Element

const paragraph = document.getElementById("paragraph");
const deleteParagraph = document.getElementById("delete");

deleteParagraph.addEventListener("click", function () {
  paragraph.remove();
  // or
  container.removeChild(paragraph);
});
// console.log(paragraph);

// Edit Element
const editParagraph = document.getElementById("edit");
editParagraph.addEventListener("click", function () {
  const newParagraph = document.createElement("p");
  newParagraph.textContent = "this is edit paragraph ";
  container.replaceChild(newParagraph, paragraph);
});

paragraph.style.background = "red";
paragraph.style.font = "10px";

paragraph.classList.add("highlight");
paragraph.classList.remove("highlight");
paragraph.classList.toggle("active");
// console.log(paragraph.classList.contains("active"));

// DOM Manipulation Expert

// Berguna untuk membuat kumpulan elemen baru di memori dulu, lalu sekali render ke DOM. Ini bikin performa lebih cepat kalau tambah banyak elemen.
const fragment = document.createDocumentFragment();

for (let i = 1; i <= 100; i++) {
  const li = document.createElement("li");
  li.textContent = `Item ${i}`;
  fragment.appendChild(li);
}

document.getElementById("list").appendChild(fragment);

// 🔹 2. insertAdjacentHTML()

// Cara cepat untuk menambahkan HTML tanpa createElement.

/*"beforebegin" — sebelum element

"afterbegin" — di awal element

"beforeend" — di akhir element

"afterend" — setelah element
 */

document
  .getElementById("list")
  .insertAdjacentHTML("beforeend", "<li>Item Baru</li>");

// 🔹 3. cloneNode()

// Copy elemen (bisa beserta isinya).

let clone = paragraph.cloneNode(true);
console.log(paragraph);

document.body.appendChild(clone);

// 🔹 4. dataset untuk atribut data-*

// Bisa dipakai buat simpan info tambahan di HTML.

const btn = document.querySelector("button");
console.log(btn.dataset.id); // "123"
