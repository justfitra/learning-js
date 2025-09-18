const timeInput = document.getElementById("time-input");
const form = document.getElementById("form");
const secondResult = document.getElementById("seconds-result");
const minutesResult = document.getElementById("minutes-result");
const hoursResult = document.getElementById("hours-result");
const stopButton = document.getElementById("stop");
const startButton = document.getElementById("start");

let timeValue;
form.addEventListener("click", function (e) {
  e.preventDefault();

  timeValue = timeInput.value;
  const timeToDays = timeValue * 60 * 1000;

  if (timeToDays < 60000) {
    console.log("error minimal 1 menit");
  } else {
    let countDownDate = new Date().getTime() + timeToDays;
    if (timeToDays <= 34560000) {
      const time = setInterval(updateTime, 1000, countDownDate);

      stopButton.addEventListener("click", function () {
        clearInterval(time);
      });

      startButton.addEventListener("click", function () {
        const start = setInterval(updateTime, 1000, newCountDownDate);
        stopButton.addEventListener("click", function () {
          clearInterval(start);
        });
      });
    } else {
      console.log("error maksimal 24 jam");
    }
  }

  form.reset();
});

const updateTime = (countDownDate) => {
  const now = new Date().getTime();

  const difference = countDownDate - now;

  const newHours = Math.floor(
    (difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
  );
  const newMinutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
  const newSeconds = Math.floor((difference % (1000 * 60)) / 1000);
  const second = document.createElement("p");
  secondResult.textContent = newSeconds + 1;
  minutesResult.textContent = newMinutes;
  hoursResult.textContent = newHours;

  console.log(newHours, newMinutes, newSeconds + 1);

  if (difference <= 0) {
    clearInterval(updateTime);
    console.log("waktu Habis");
  }
  return difference;
};
