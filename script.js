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
  if (operator === '+') {
     return add(previusNum, currentNum);
  } else if (operator === '-') {
    return substract(previusNum, currentNum);
  } else if (operator === '*') {
    return multiply(previusNum, currentNum);
  } else if (operator === '÷') {
    return divide(previusNum, currentNum);
  }
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
        currentOperand.textContent += button.innerText
    })
})

operatorButtons.forEach((button) => {
    button.addEventListener('click', () => {
        if(currentOperand.innerText !== '' && previousOperand.innerText == '') {
            previousOperand.textContent = currentOperand.innerText + button.innerText
            currentOperand.textContent = '';
        }
    })
})

equalsButton.addEventListener('click', () => {
    if(previousOperand.textContent !== '' && currentOperand.textContent !== '') {
        let operator = previousOperand.innerText.slice(-1);
        previousOperand.textContent = parseInt(operate(operator, previousOperand, currentOperand));
    }
})