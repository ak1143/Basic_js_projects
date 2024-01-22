const display = document.getElementById('ans');

let currentNumber = '';
let previousNumber = '';
let operator = '';

function appendNumber(number) {
    currentNumber += number;
    display.textContent = currentNumber;
}

function appendOperator(op) {
    previousNumber = currentNumber;
    currentNumber = '';
    operator = op;
}

function clearDisplay() {
    currentNumber = '';
    previousNumber = '';
    operator = '';
    display.textContent = '0';
}
function calculate() {
    let result = 0;
    switch (operator) {
        case '+':
            result = parseFloat(previousNumber) + parseFloat(currentNumber);
            break;
        case '-':
            result = parseFloat(previousNumber) - parseFloat(currentNumber);
            break;
        case '*':
            result = parseFloat(previousNumber) * parseFloat(currentNumber);
            break;
        case '/':
            if (currentNumber === '0') {
                // Handle division by zero
                display.textContent = 'Error: Division by zero';
            } else {
                result = parseFloat(previousNumber) / parseFloat(currentNumber);
            }
            break;
    }

    display.textContent = result;
    previousNumber = result;
    currentNumber = '';
    operator = '';
}
