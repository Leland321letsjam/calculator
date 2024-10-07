

const buttons = [
    '1', '2', '3',
    '4', '5', '6',
    '7', '8', '9',
    '0',
    '.', '+', '-',
    '*', '/', 'Clr',
    '=', 'Undo',
]

const calcContainer = document.querySelector('.calculator-container');

buttons.forEach((button) => {
    const newButton = document.createElement('button');
    newButton.textContent = button;
    newButton.className = 'calc-buttons';
    calcContainer.appendChild(newButton);
})





function add (a, b) {
    return a + b;
};

function subtract(a, b) {
    return a - b;
};

function multiply(a, b) {
    return a * b;
};

function divide(a, b) {
    return a / b;
};

let firstNumber;
let operator;
let secondNumber;

function operate(firstNumber, operator, secondNumber) {

    if (operator === '+') {
        result = add(firstNumber, secondNumber);
    }
    else if (operator === '-') {
        result = subtract(firstNumber, secondNumber);
    }
    else if (operator === '*' ) {
        result = multiply(firstNumber, secondNumber);
    }
    else if (operator === '/') {
        result = divide(firstNumber, secondNumber);
    }
return result;
}

//console.log(operate(6, '+', 7))


//not sure if I want the operators to be received as strings or what, probably strings, but i'm
//creating this note to make sure I check, just in case

//also, what should I return if the operate function somehow fails



























