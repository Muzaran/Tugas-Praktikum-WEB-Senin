function calculate() {
  var number1 = parseFloat(document.getElementById("number1").value);
  var number2 = parseFloat(document.getElementById("number2").value);
  var operator = document.getElementById("operator").value;
  var resultElement = document.getElementById("result");

  if (!isNaN(number1) && !isNaN(number2)) {
    switch (operator) {
      case "+":
        resultElement.textContent = number1 + number2;
        break;
      case "-":
        resultElement.textContent = number1 - number2;
        break;
      case "*":
        resultElement.textContent = number1 * number2;
        break;
      case "/":
        if (number2 !== 0) {
          resultElement.textContent = number1 / number2;
        } else {
          resultElement.textContent = "Tidak bisa dibagi dengan nol";
        }
        break;
      default:
        resultElement.textContent = "Operator tidak valid";
    }
  } else {
    resultElement.textContent = "Masukkan bilangan yang valid";
  }
}
