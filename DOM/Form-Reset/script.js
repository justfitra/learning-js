const form = document.getElementById("form");
const name = document.getElementById("name");
const email = document.getElementById("email");
const password = document.getElementById("password");
const error = document.getElementById("error");

form.addEventListener("click", function (e) {
  e.preventDefault();

  if (name.value && email.value && password.value) {
    error.textContent = "Email Submitted Successfully";
    form.reset();
  } else if (password.value.length < 8) {
    error.textContent = "Password must be at least 8 characters long";
  } else if (!email.value.includes("@")) {
    error.textContent = "Please enter a valid email address";
  } else if (!name.value) {
    error.textContent = "Name cannot be empty";
  } else {
    error.textContent = "Please fill in all fields";
  }
});
