
function calculate() {
    const num1 = parseFloat(document.getElementById("number1").value);
    const num2 = parseFloat(document.getElementById("number2").value);
    const operator = document.getElementById("operator").value;

    let result;
    switch (operator) {
        case '+':
            result = num1 + num2;
            break;
        case '-':
            result = num1 - num2;
            break;
        case '*':
            result = num1 * num2;
            break;
        case '/':
            if (num2 !== 0) {
                result = num1 / num2;
            } else {
                result = "Error: Division by zero is not allowed.";
            }
            break;
        default:
            result = "Error: Operator yang di input salah. harap gunakan +, -, *, or /.";
    }

    document.getElementById("result").textContent = result;
}

// Contoh penggunaan:
const result1 = calculator(10, 5, '+'); // Hasil: 15
const result2 = calculator(10, 5, '*'); // Hasil: 50
const result3 = calculator(10, 0, '/'); // Hasil: "Error: Division by zero is not allowed."
const result4 = calculator(10, 5, '%'); // Hasil: "Error: Invalid operator. Please use +, -, *, or /."