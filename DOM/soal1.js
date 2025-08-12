const nama = document.querySelector("#name");
const lengthCheck = document.getElementById("lengthCheck");
const result = document.getElementById("result");
console.log(result);

lengthCheck.addEventListener("click", function () {
  let noSpace = nama.value.replace(/\s+/g, "");
  let length = noSpace.length;

  result.textContent = `length ${length}`;
});

const body = document.getElementById("body");
const red = document.getElementById("red");
const green = document.getElementById("green");
const blue = document.getElementById("blue");

red.addEventListener("click", function () {
  body.style.backgroundColor = "red";
});
green.addEventListener("click", function () {
  body.style.backgroundColor = "green";
});
blue.addEventListener("click", function () {
  body.style.backgroundColor = "blue";
});

const date = new Date();
const year = date.getFullYear();
const born = document.getElementById("born");
const ageCheck = document.getElementById("ageCheck");
const ageResult = document.getElementById("ageResult");

ageCheck.addEventListener("click", function () {
  let age = year - born.value;

  ageResult.textContent = `age ${age}`;
});
// console.log(year);

const olahraga = document.getElementById("olahraga");
const belajarCoding = document.getElementById("belajar-coding");
const bangunPagi = document.getElementById("bangun-pagi");
const activity = [];
const activityCount = document.getElementById("activity-count");

function updateActivity(checkbox) {
  if (!activity.includes(checkbox.value)) {
    activity.push(checkbox.value);
    activityCount.textContent = activity.length;
  }
}
bangunPagi.addEventListener("input", () => updateActivity(bangunPagi), {
  once: true,
});
olahraga.addEventListener("input", () => updateActivity(olahraga), {
  once: true,
});
belajarCoding.addEventListener("input", () => updateActivity(belajarCoding), {
  once: true,
});

const suhu = document.getElementById("suhu");
const suhuCheck = document.getElementById("suhuCheck");
const resultF = document.getElementById("resultF");

suhuCheck.addEventListener("click", function () {
  const celcius = parseInt(suhu.value);
  const result = (celcius * 9) / 5 + 32;

  resultF.textContent = `hasil ${result} F`;
});
