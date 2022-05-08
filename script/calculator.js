let store = "";
let display = document.getElementById("display");
const runCalculator = (n) => {
  store += n;
  display.innerText = store;
};
const runCalculatorOperation = (op) => {
  // console.log('op: ', op);
  if (store.length >= 1) {
    if (op == `add`) store += " + ";
    else if (op == `sub`) store += " - ";
    else if (op == "mul") store += " × ";
    else if (op == "dvd") store += " ÷ ";
    display.innerText = store;
  }
};
const runCalculatorForDot = () => {
  store += ".";
  display.innerText = store;
};
const runCalculatorForEql = () => {
  let resArr = store.split(" ");

  if (resArr[1] == "+") store = +resArr[0] + +resArr[2];
  if (resArr[1] == "-") store = resArr[0] - resArr[2];
  if (resArr[1] == "×") store = resArr[0] * resArr[2];
  if (resArr[1] == "÷") store = resArr[0] / resArr[2];

  store = store.toString();
  display.innerText = store;
};
const runCalculatorForC = () => {
  display.innerText = null;
  store = "";
};
