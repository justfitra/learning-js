// Training 1
document.getElementById("child").addEventListener("click", function () {
  console.log("Child Clicked");
});

document.getElementById("parent").addEventListener(
  "click",
  function () {
    console.log("Parent Clicked");
  },
  true
);

// Training 2 Event Delegation
document.getElementById("menu").addEventListener("click", function (e) {
  if (e.target.tagName === "LI") {
    console.log(e.target.textContent + " clicked");
  }
});

document.getElementById("link").addEventListener("click", function (e) {
  e.preventDefault();
  console.log("anda kena stop tidak bisa pindah halaman");
});

document.getElementById("inner").addEventListener("click", function (e) {
  e.stopPropagation();
  console.log("Inner Button Clicked");
});

document.getElementById("outer").addEventListener("click", function (e) {
  console.log("Outer Button Clicked");
});
