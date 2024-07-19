let bag = '';
let display = document.getElementById('display');

const checkLastChar = (str) => {
  let lastChar = str.charAt(str.length - 1);
  if (
    lastChar === '+' ||
    lastChar === '-' ||
    lastChar === '*' ||
    lastChar === '/'
  )
    return true;

  return false;
};

const checkLastCharDot = (str) => {
  let countDot = 0;
  for (let i = str.length - 1; i >= 0; i++) {
    const char = str[i];
    if (char === '.') countDot++;
    else if (char === '+' || char === '-' || char === '*' || char === '/')
      break;
  }

  if (str.length === 0 || lastChar === '.' || countDot > 0) return true;
  return false;
};

const runCalculator = (n) => {
  bag += n;
  display.innerText = bag;
};

const runCalculatorOperation = (op) => {
  if (checkLastChar(bag)) {
    bag = bag.split('');
    bag.pop();
    bag = bag.join('');
  }

  if (bag.length >= 1) {
    if (op == `add`) bag += '+';
    else if (op == `sub`) bag += '-';
    else if (op == 'mul') bag += '*';
    else if (op == 'dvd') bag += '/';
    display.innerText = bag;
  }
};

const runCalculatorForDot = () => {
  if (checkLastChar(bag)) return;
  else if (checkLastCharDot(bag)) return;

  bag += '.';
  display.innerText = bag;
};

const runCalculatorForEql = () => {
  if (checkLastChar(bag)) {
    return;
  }

  let ans = eval(bag);
  bag = ans.toString();
  display.innerText = bag;
};

const runCalculatorForC = () => {
  display.innerText = null;
  bag = '';
};
