const age = document.getElementById("inputAge");
const button = document.getElementById("ageCheck");
const result = document.getElementById("result");

button.addEventListener("click", function () {
  let ageValue = parseInt(age.value);
  if (ageValue > 18) {
    result.textContent = "Kamu Dewasa";
  } else {
    result.textContent = "Kamu masih muda";
  }
});
