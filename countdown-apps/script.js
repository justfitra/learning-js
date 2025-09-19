const secondResult = document.getElementById("seconds-result");
const minutesResult = document.getElementById("minutes-result");
const hoursResult = document.getElementById("hours-result");
const daysResult = document.getElementById("days-result");

const timeToDays = 1825 * 24 * 60 * 60 * 1000;

let countDownDate = new Date().getTime() + timeToDays;

const time = setInterval(() => {
  const now = new Date().getTime();

  const difference = countDownDate - now;
  var newDays = Math.floor(difference / (1000 * 60 * 60 * 24));
  const newHours = Math.floor(
    (difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
  );
  const newMinutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
  const newSeconds = Math.floor((difference % (1000 * 60)) / 1000);
  const second = document.createElement("p");
  secondResult.textContent = newSeconds + 1;
  minutesResult.textContent = newMinutes;
  hoursResult.textContent = newHours;
  daysResult.textContent = newDays;

  console.log(newHours, newMinutes, newSeconds + 1);

  if (difference <= 0) {
    clearInterval(updateTime);
    console.log("waktu Habis");
  }
}, 1000);
