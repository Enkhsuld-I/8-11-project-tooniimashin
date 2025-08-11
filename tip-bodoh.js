let body = document.querySelector("body");
let btn1 = document.getElementById("btn1");
let btn2 = document.getElementById("btn2");
let btn3 = document.getElementById("btn3");
let btn4 = document.getElementById("btn4");
let btn5 = document.getElementById("btn5");
let result = document.getElementById("result");

btn1.addEventListener("click", () => {
  let input = document.querySelector("input");
  let result1 = input.value * 1.2;
  result.innerText = result1;
});

btn2.addEventListener("click", () => {
  let input = document.querySelector("input");
  let result2 = input.value * 1.4;
  result.innerText = result2;
});

btn3.addEventListener("click", () => {
  let input = document.querySelector("input");
  let result3 = input.value * 1.6;
  result.innerText = result3;
});

btn4.addEventListener("click", () => {
  let input = document.querySelector("input");
  let result4 = input.value * 1.8;
  result.innerText = result4;
});

btn5.addEventListener("click", () => {
  let input = document.querySelector("input");
  let result5 = input.value * 2;
  result.innerText = result5;
});
