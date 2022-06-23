function add(previusNum, currentNum) {
  return previusNum + currentNum;
}

function substract(previusNum, currentNum) {
  return previusNum - currentNum;
}

function multiply(previusNum, currentNum) {
  return previusNum * currentNum;
}

function divide(previusNum, currentNum) {
  return previusNum / currentNum;
}

function operate(operator, previusNum, currentNum) {
  let result;
  if (operator === '+') {
    result = add(previusNum, currentNum).toString();
  } else if (operator === '-') {
    result = substract(previusNum, currentNum).toString();
  } else if (operator === '*') {
    result = multiply(previusNum, currentNum).toString();
  } else if (operator === '÷') {
    result = divide(previusNum, currentNum).toString();
  }
  return result;
}

const previousOperand = document.querySelector('.previous-operand');
const currentOperand = document.querySelector('.current-operand');
const clearButton = document.querySelector('.all-clear');
const deleteButton = document.querySelector('.delete');
const operatorButtons = document.querySelectorAll('.operator');
const numberButtons = document.querySelectorAll('.number');
const equalsButton = document.querySelector('.equals');

numberButtons.forEach((button) => {
  button.addEventListener('click', () => {
    const number = button.innerText;
    if (number === '.' && currentOperand.innerText.includes('.')) return;
    currentOperand.textContent += button.innerText;
  });
});

operatorButtons.forEach((button) => {
  button.addEventListener('click', () => {
    if (currentOperand.innerText !== '' && previousOperand.innerText === '') {
      previousOperand.textContent = currentOperand.innerText + button.innerText;
      currentOperand.textContent = '';
    }
  });
});

equalsButton.addEventListener('click', () => {
  if (previousOperand.textContent !== '' && currentOperand.textContent !== '') {
    const operator = previousOperand.innerText.slice(-1);
    const previousNum = Number(previousOperand.innerText.slice(0, -1));
    const currentNum = Number(currentOperand.innerText);
    previousOperand.innerText = operate(operator, previousNum, currentNum);
    currentOperand.innerText = '';
  }
});

clearButton.addEventListener('click', () => {
  previousOperand.textContent = '';
  currentOperand.textContent = '';
});

deleteButton.addEventListener('click', () => {
  if (currentOperand.textContent !== '') {
    currentOperand.textContent = currentOperand.innerText.slice(0, -1);
  }
});