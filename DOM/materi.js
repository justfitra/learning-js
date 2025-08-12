const element = document.getElementById("judul");
const querySelector = document.querySelector("#judul");
const querySelectorAll = document.querySelectorAll("#judul");

element.textContent = "Hallo world";
element.innerHTML = "<h1>Hallo Fitra</h1>";
element.style.background = "black";

console.log(element);

const button = document.getElementById("count");

const counterNumber = 0;
button.addEventListener("click", function () {
  counterNumber++;
  console.log(counterNumber);
});
