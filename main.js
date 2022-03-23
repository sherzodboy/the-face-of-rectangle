const form = document.querySelector("#form");
const input1 = document.querySelector("#input1");
const input2 = document.querySelector("#input2");
const screen = document.querySelector(".screen");

let yuza = function (x, y) {
  return x * y;
};

let btnfunc = function (e) {
  e.preventDefault();
  let a = input1.value;
  let b = input2.value;

  let s = yuza(a, b);

  screen.textContent = "yuza: " + s;
};

form.addEventListener("submit", btnfunc);
