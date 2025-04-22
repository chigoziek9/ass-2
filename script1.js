document.getElementById("myButton2").addEventListener("click", function evenChecker() {
  var number1 = parseFloat(prompt("Enter first number"));
  var operator = prompt("Enter operator (+, -, *, /)");
  var number2 = parseFloat(prompt("Enter second number"));
  var result;

  if (operator === '+') {
    result = number1 + number2;
  } else if (operator === '-') {
    result = number1 - number2;
  } else if (operator === '*') {
    result = number1 * number2;
  } else if (operator === '/') {
    result = number1 / number2;
  } else {
    result ="Invalid operator!";
  }

  alert("Result: " + result)
});
