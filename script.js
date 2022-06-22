function add(previusOperand, currentOperand) {
  return previusOperand + currentOperand;
}

function substract(previusOperand, currentOperand) {
  return previusOperand - currentOperand;
}

function multiply(previusOperand, currentOperand) {
  return previusOperand * currentOperand;
}

function divide(previusOperand, currentOperand) {
  return previusOperand / currentOperand;
}

// convert functions above to class methods

function operate(operator, previusOperand, currentOperand) {
//   switch (operator) {
//     case '+':
//       add(previusOperand, currentOperand);
//       break;
//     case '-':
//       substract(previusOperand, currentOperand);
//       break;
//     case '*':
//       multiply(previusOperand, currentOperand);
//       break;
//     case '÷':
//       divide(previusOperand, currentOperand);
//       break;
//     default:
//   }
  if (operator === '+') {
     return add(previusOperand, currentOperand);
  } else if (operator === '-') {
    return substract(previusOperand, currentOperand);
  } else if (operator === '*') {
    return multiply(previusOperand, currentOperand);
  } else if (operator === '÷') {
    return divide(previusOperand, currentOperand);
  }
}