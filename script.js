const calcContainer = document.querySelector('.calculator-container');
const operatorContainer = document.querySelector('.operator-buttons');
const displayDiv = document.querySelector('.display');
const numberButtonsContainer = document.querySelector('.number-buttons');

let firstNumber;
let operator;
let secondNumber;
let clearDisplayCheck = true;
let display = [0];


const numButtons = [
    '0', '3', '2',
    '1', '6', '5',
    '4', '9', '8',
    '7',
]

const operatorButtons = [
    '+', '-', 'x', '÷',
]


function updateDisplay() {
    displayDiv.textContent = display.join('');
}

const clearButton = document.querySelector('#clear');
clearButton.addEventListener('click', resetCalculator); 

function resetCalculator() {
    display = [0];
    updateDisplay();
    clearDisplayCheck = true;
    firstNumber = null;
    secondNumber = null;
    operator = null;
    waitForOperand = false;
    result = 0;
}


const equalsButton = document.querySelector('#equals');
equalsButton.addEventListener('click', handleEquals);

function handleEquals() {
    secondNumber = display.join('');
    operate(firstNumber, operator, secondNumber);
    display = [];
    display.push(result);
    updateDisplay();
    firstNumber = null;
    operator = null;
    secondNumber = null;
    clearDisplayCheck = true;
}


numButtons.forEach((button) => {
    const newButton = document.createElement('button');
    newButton.textContent = button;
    newButton.className = 'num-button';
    button === '0' ? newButton.classList.add('zero-button') : null;
    newButton.addEventListener('click', () => {
        
        
        if (clearDisplayCheck === true) {
            clearDisplayCheck = false;
            display = [];
            display.push(button);
            updateDisplay();
            waitForOperand = false;
            
        }
        else {
            display.push(button);
            updateDisplay();
            waitForOperand = false;
        }
    });
    numberButtonsContainer.insertBefore(newButton, numberButtonsContainer.firstChild);
});

operatorButtons.forEach((button) => {
    const newButton = document.createElement('button');
    newButton.textContent = button;
    newButton.className = 'operator-button';
    newButton.addEventListener('click', () => {

        if (!firstNumber) {
            firstNumber = display.join('');
            operator = button;
            clearDisplayCheck = true;
            waitForOperand = true;
            console.log(firstNumber);
        }
        else if (firstNumber) {
            
            if (waitForOperand === false) {
                secondNumber = display.join('');
                clearDisplayCheck = true;
                operate(firstNumber, operator, secondNumber);
                operator = button;
                firstNumber = result;
                display = [];
                display.push(firstNumber);
                updateDisplay();
                waitForOperand = true;
                console.log(secondNumber);
            }
            else {
                operator = button;
            }
        }
    });
    operatorContainer.appendChild(newButton);
});


const deleteButton = document.querySelector('#del-button');
deleteButton.addEventListener('click', removeLastDisplayEntry);

function removeLastDisplayEntry() {

    if (display[0].toString().length === 2 && display[0].toString().includes('-')) {
        display = [0];
        clearDisplayCheck = true;
    }
    else if (display[0].toString().length > 1) {
        display[0] = display[0].toString().slice(0, -1);
    }
    else if (display.length === 2 && display[0] === '-' && display[1].toString().length === 1) {
        display = [0];
        clearDisplayCheck = true;
    }
    else if (display.length === 2 && display[0] === '-') {
        display[1] = display[1].toString().slice(0, -1);
    }
    else if ((display.length === 2 && display[0] === '-')) {
        display = [0];
        clearDisplayCheck = true;
    }
    else if (display.length === 1
        || (display[0].toString().length === 2 && display[0].includes('-'))
    ) {
        display = [0];
        clearDisplayCheck = true;
    }
    else {
        display.pop();
    }

    updateDisplay();
    result = display.join('');
};



const changeSign = document.querySelector('#change-sign');
changeSign.addEventListener('click', () => {
    if (display[0] === 0) {
        changeSign.disable = true;
    }
    else {
        concatOrRemoveMinus();
    }
});

function concatOrRemoveMinus() {
    changeSign.disable = false;
    if (display.length > 1 && display.join('').includes('-')) {
        display.shift();
    }
    else if (display < 0) {
        display[0] = display.join('') * -1;
    }
    else {
        display.unshift('-');
    }
    updateDisplay();
};

// const decimalButton = document.querySelector('#point');
// decimalButton.addEventListener('click', handleDecimalButton);

// function handleDecimalButton() {
//     if (display.includes('.') || display.join('').includes('.')) {
//         decimalButton.disable = true;
//     }
//     else {
//         display.push('.');
//         updateDisplay();
//         //result = display.join('');
//     }
// };


function add (a, b) {
    return Number(a) + Number(b);
};

function subtract(a, b) {
    return a - b;
};

function multiply(a, b) {
    return a * b;
};

function divide(a, b) {
    if (a / b === Infinity || a / b === -Infinity) {
        return displayDiv.textContent = 'Nice try sucka';
    }
    else {
        return a / b;
    }
};



function operate(firstNumber, operator, secondNumber) {

    if (operator === '+') {
        result = add(firstNumber, secondNumber);
    }
    else if (operator === '-') {
        result = subtract(firstNumber, secondNumber);
    }
    else if (operator === 'x' ) {
        result = multiply(firstNumber, secondNumber);
    }
    else if (operator === '÷') {
        result = divide(firstNumber, secondNumber);
    }
return result;
}








