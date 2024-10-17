const calcContainer = document.querySelector('.calculator-container');
const operatorContainer = document.querySelector('.operator-buttons');
const displayDiv = document.querySelector('.display');
const numberButtonsContainer = document.querySelector('.number-buttons');

let firstNumber;
let operator;
let secondNumber;
let clearDisplayCheck = true;
let display = [0];


//const undo = []; removing until i add undo feature


const numButtons = [
    '0', '9', '8',
    '7', '6', '5',
    '4', '3', '2',
    '1',
]

const operatorButtons = [
    '+', '-', 'x', '÷',
]



const clearButton = document.querySelector('#clear');
clearButton.addEventListener('click', resetCalculator); 

function resetCalculator() {
    display = [0];
    displayDiv.textContent = display.join('')
    clearDisplayCheck = true;
    firstNumber = null;
    secondNumber = null;
    operator = null;
    waitForOperand = false;
}


const equalsButton = document.querySelector('#equals');
equalsButton.addEventListener('click', handleEquals);

function handleEquals() {
    secondNumber = display.join('');
    operate(firstNumber, operator, secondNumber);
    display = [];
    display.push(result);
    displayDiv.textContent = display.join('');
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
            displayDiv.textContent = display.join('');
            waitForOperand = false;
            
        }
        else {
            display.push(button);
            displayDiv.textContent = display.join('');
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
                displayDiv.textContent = display.join('');
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
    display.pop();
    displayDiv.textContent = display.join('');
};



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
    return a / b;
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













