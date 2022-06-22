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

// convert functions above to class methods

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
const numbers = document.querySelectorAll('.numbers');
