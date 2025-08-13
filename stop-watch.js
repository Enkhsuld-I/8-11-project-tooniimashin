let body = document.querySelector("body");
let div = document.querySelector("div");
let start = document.getElementById("start-button");
let stop = document.getElementById("stop-button");
let reset = document.getElementById("reset-button");
let hourP = document.getElementById("hour");
let minuteP = document.getElementById("minute");
let secondP = document.getElementById("second");

let second = 0;
let minute = 0;
let hour = 0;

secondP.innerText = second;
minuteP.innerText = minute;
hourP.innerText = hour;

function addSecond() {
  second++;
  if (second == 60) {
    minute++;
    second = 0;
  }
  if (minute == 60) {
    hour++;
    minute = 0;
  }
  secondP.innerText = second;
  minuteP.innerText = minute;
  hourP.innerText = hour;
}

function stopTimer() {
  clearInterval(interval);
}

function startTimer() {
  interval = setInterval(addSecond, 1000);
}

function resetTimer() {
  second = 0;
  minute = 0;
  hour = 0;
  secondP.innerText = 0;
  minuteP.innerText = 0;
  hourP.innerText = 0;
}
