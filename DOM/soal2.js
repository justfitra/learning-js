const number1 = document.getElementById("number1");
const number2 = document.getElementById("number2");
const options = document.getElementById("options");
const resultButton = document.getElementById("resultButton");
const result = document.getElementById("result");

function resultFunct(number1, number2, options) {
  options.value === "+"
    ? (result.textContent = `Hasil = ${
        parseInt(number1.value) + parseInt(number2.value)
      }`)
    : "";
  options.value === "-"
    ? (result.textContent = `Hasil = ${
        parseInt(number1.value) - parseInt(number2.value)
      }`)
    : "";
  options.value === "*"
    ? (result.textContent = `Hasil = ${
        parseInt(number1.value) * parseInt(number2.value)
      }`)
    : "";
  options.value === "/"
    ? (result.textContent = `Hasil = ${
        parseInt(number1.value) / parseInt(number2.value)
      }`)
    : "";
}

resultButton.addEventListener("click", () =>
  resultFunct(number1, number2, options)
);

const inputName = document.getElementById("inputName");
const nameCheck = document.getElementById("nameCheck");
const nameResult = document.getElementById("nameResult");

nameCheck.addEventListener("click", function () {
  const name = inputName.value.replace(/\s+/, "");
  const length = name.length;
  nameResult.textContent = `Panjang Nama : ${length}`;
});

const inputPassword = document.getElementById("inputPassword");
const change = document.getElementById("change");

change.addEventListener("input", function () {
  change.checked
    ? (inputPassword.type = "text")
    : (inputPassword.type = "password");
});

const bangunPagi = document.getElementById("bangun-pagi");
const olahraga = document.getElementById("olahraga");
const belajar = document.getElementById("belajar");
const tidurSiang = document.getElementById("tidur-siang");
const lengthResult = document.getElementById("length-result");
const onCheck = document.getElementById("on-check");

const active = [];
function activities(activity) {
  if (activity.checked) {
    active.push(activity.value);
  }
  lengthResult.textContent = `Jumlah ${active.length}`;
  onCheck.innerHTML = `<ul>
  ${active.map((res) => "<li>" + res + "</li>")}
  </ul>`;
}

bangunPagi.addEventListener("input", () => activities(bangunPagi), {
  once: true,
});
olahraga.addEventListener("input", () => activities(olahraga), { once: true });
belajar.addEventListener("input", () => activities(belajar), { once: true });
tidurSiang.addEventListener("input", () => activities(tidurSiang), {
  once: true,
});

const age = document.getElementById("age");
const legalityCheck = document.getElementById("legalityCheck");
const legalityAge = document.getElementById("legalityAge");

const checkAge = (age) => {
  age.value >= 18
    ? (legalityAge.textContent = "Anda sudah cukup umur")
    : (legalityAge.textContent = "Anda belum cukup Umur");
};

legalityCheck.addEventListener("click", () => checkAge(age));

const number = document.getElementById("number");
const increment = document.getElementById("increment");
const decrement = document.getElementById("decrement");
const reset = document.getElementById("reset");
let resultNumber = 0;

increment.addEventListener("click", function () {
  resultNumber++;
  // console.log(resultNumber);

  number.textContent = resultNumber;
});

decrement.addEventListener("click", function () {
  resultNumber--;

  number.textContent = resultNumber;
});

reset.addEventListener("click", function () {
  resultNumber = 0;

  number.textContent = resultNumber;
});

const email = document.getElementById("email");
const validate = document.getElementById("validate");
const validateResult = document.getElementById("validateResult");

validate.addEventListener("click", function () {
  const pattern = /@/g;
  const pattern1 = /\./g;

  email.value.match(pattern) && email.value.match(pattern1)
    ? (validateResult.textContent = "Email Valid")
    : (validateResult.textContent = "Email Tidak Valid");
});

const text = document.getElementById("text");
const count = document.getElementById("count");
const textNoSpace = document.getElementById("textNoSpace");
const textPerWord = document.getElementById("textPerWord");

count.addEventListener("click", function () {
  const noSpace = text.value.replace(/\s/, "");
  const perWord = text.value.split(/\s/g);

  textNoSpace.textContent = `Jumlah Kata Tanpa Spasi ${noSpace.length}`;
  textPerWord.textContent = `Jumlah Kata Semua Kata ${perWord.length}`;
});
