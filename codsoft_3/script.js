let display = document.getElementById("display");
let firstNumber = "";
let secondNumber = "";
let operator = "";
let isSecond = false;

function appendValue(value) {
  if (value === "+" || value === "-" || value === "*" || value === "/") {
    if (firstNumber !== "") {
      operator = value;
      isSecond = true;
      display.value += value;
    }
  } else {
    if (!isSecond) {
      firstNumber += value;
    } else {
      secondNumber += value;
    }
    display.value += value;
  }
}

function clearDisplay() {
  display.value = "";
  firstNumber = "";
  secondNumber = "";
  operator = "";
  isSecond = false;
}

function calculateResult() {
  let result = 0;
  let a = parseFloat(firstNumber);
  let b = parseFloat(secondNumber);

  if (operator === "+") {
    result = a + b;
  } else if (operator === "-") {
    result = a - b;
  } else if (operator === "*") {
    result = a * b;
  } else if (operator === "/") {
    if (b === 0) {
      result = "Error"; 
    } else {
      result = a / b;
    }
  } else {
    result = "Invalid";
  }

  display.value = result;
  firstNumber = result.toString();
  secondNumber = "";
  operator = "";
  isSecond = false;
}

