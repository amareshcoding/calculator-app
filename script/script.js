let store = '';
let display = document.getElementById('display');

const checkLastChar = (str) => {
  let lastChar = str.charAt(str.length - 1);
  if (
    lastChar === '+' ||
    lastChar === '-' ||
    lastChar === '*' ||
    lastChar === '/'
  ) {
    return true;
  }
  return false;
};

const runCalculator = (n) => {
  store += n;
  display.innerText = store;
};

const runCalculatorOperation = (op) => {
  if (checkLastChar(store)) {
    store = store.split('');
    store.pop();
    store = store.join('');
  }

  if (store.length >= 1) {
    if (op == `add`) store += '+';
    else if (op == `sub`) store += '-';
    else if (op == 'mul') store += '*';
    else if (op == 'dvd') store += '/';
    display.innerText = store;
  }
};

const runCalculatorForDot = () => {
  if (checkLastChar(store)) {
    return;
  }
  store += '.';
  display.innerText = store;
};

const runCalculatorForEql = () => {
  if (checkLastChar(store)) {
    return;
  }

  let ans = eval(store);
  store = ans.toString();
  display.innerText = store;
};

const runCalculatorForC = () => {
  display.innerText = null;
  store = '';
};
