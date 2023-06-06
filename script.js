let firstOperand = null;
let operator = null;
let waitingForSecondOperand = false;

function appendNumber(number) {
  const display = document.getElementById('display');

  if (waitingForSecondOperand) {
    display.textContent = number;
    waitingForSecondOperand = false;
  } else {
    if (display.textContent === '0') {
      display.textContent = number;
    } else {
      display.textContent += number;
    }
  }
}

function setOperator(op) {
  const display = document.getElementById('display');

  if (firstOperand === null) {
    firstOperand = parseFloat(display.textContent);
    operator = op;
    display.textContent = '0';
  } else {
    calculate();
    operator = op;
  }

  waitingForSecondOperand = true;
}

function calculate() {
  const display = document.getElementById('display');

  if (operator !== null) {
    const secondOperand = parseFloat(display.textContent);
    let result = null;

    switch (operator) {
      case '+':
        result = firstOperand + secondOperand;
        break;
      case '-':
        result = firstOperand - secondOperand;
        break;
      case '*':
        result = firstOperand * secondOperand;
        break;
      case '/':
        result = firstOperand / secondOperand;
        break;
    }

    display.textContent = result;
    firstOperand = result;
    operator = null;
    waitingForSecondOperand = true;
  }
}

function clearDisplay() {
  const display = document.getElementById('display');
  display.textContent = '0';
  firstOperand = null;
  operator = null;
  waitingForSecondOperand = false;
}
