const content = document.getElementById("content");
const addParagraph = document.getElementById("addParagraph");
const deleteParagraph = document.getElementById("deleteParagraph");
const editContet = document.getElementById("editContent");
const toogleHighlight = document.getElementById("toogleHighlight");
const newParagraph = () => {
  const newParagraph = document.createElement("p");
  newParagraph.textContent = "Paragraf Ditambahkan";
  content.appendChild(newParagraph);
};
const deletePara = () => {
  content.lastElementChild.remove();
};
const colorEdit = () => {
  content.style.color = "blue";
  content.style.fontSize = "18px";
};
const addToogleHighlight = () => {
  content.querySelectorAll("p").forEach((p) => p.classList.toggle("highlight"));
  console.log(content);
};
addParagraph.addEventListener("click", () => newParagraph());
deleteParagraph.addEventListener("click", () => deletePara());
editContet.addEventListener("click", () => colorEdit());
toogleHighlight.addEventListener("click", () => addToogleHighlight());
