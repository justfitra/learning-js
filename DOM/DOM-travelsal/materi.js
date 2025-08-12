// DOM Taversal
const item = document.querySelector(".menu-item");
// console.log(item);

console.log(item.parentElement); // elemen induk
console.log(item.children); // daftar anak elemen
console.log(item.nextElementSibling); // elemen saudara berikutnya

const title = document.querySelector("h1");
title.textContent = "This is DOM Travelsal Baby";
title.classList.add("highlight");
