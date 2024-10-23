const calcContainer = document.querySelector('.calculator-container');
const operatorContainer = document.querySelector('.operator-buttons');
const displayDiv = document.querySelector('.display');
const numberButtonsContainer = document.querySelector('.number-buttons');

let firstNumber;
let operator;
let secondNumber;
let clearDisplayCheck = true;
let display = '0';


const numberButtonsArray = [
    '0', '3', '2',
    '1', '6', '5',
    '4', '9', '8',
    '7',
]

const operatorButtons = [
    '+', '-', 'x', '÷',
]


const clearButton = document.querySelector('#clear');
clearButton.addEventListener('click', resetCalculator); 

function resetCalculator() {
    display = '0';
    updateDisplay();
    clearDisplayCheck = true;
    firstNumber = null;
    secondNumber = null;
    operator = null;
    waitForOperand = false;
    result = '0';
};


const equalsButton = document.querySelector('#equals');
equalsButton.addEventListener('click', handleEquals);

function handleEquals() {
    result = display;
    secondNumber = display;
    operate(firstNumber, operator, secondNumber);
    display = ('');
    display += result;
    updateDisplay();
    firstNumber = null;
    operator = null;
    secondNumber = null;
    clearDisplayCheck = true;
};


numberButtonsArray.forEach((button) => {
    const numberButton = document.createElement('button');
    numberButton.textContent = button;
    numberButton.className = 'num-button';
    button === '0' ? numberButton.classList.add('zero-button') : null;
    numberButton.addEventListener('click', () => {numberButtonClick(button)} );
    numberButtonsContainer.insertBefore(numberButton, numberButtonsContainer.firstChild);
});


function numberButtonClick(button) {

    if (clearDisplayCheck === true) {
            clearDisplayCheck = false;
            display = ('');
            display += button;
            updateDisplay();
            waitForOperand = false;
        }
        
        else {
            display += button;
            updateDisplay();
            waitForOperand = false;
        }
};

operatorButtons.forEach((button) => {
    const numberButton = document.createElement('button');
    numberButton.textContent = button;
    numberButton.className = 'operator-button';
    numberButton.addEventListener('click', () => {

        if (!firstNumber) {
            firstNumber = display;
            operator = button;
            clearDisplayCheck = true;
            waitForOperand = true;
        }
        else if (firstNumber) {
            
            if (waitForOperand === false) {
                secondNumber = display;
                clearDisplayCheck = true;
                operate(firstNumber, operator, secondNumber);
                operator = button;
                firstNumber = result;
                display = ('');
                display += firstNumber;
                updateDisplay();
                waitForOperand = true;
            }
            else {
                operator = button;
            }
        }
    });
    operatorContainer.appendChild(numberButton);
});



const deleteButton = document.querySelector('#del-button');
deleteButton.addEventListener('click', removeLastDisplayEntry);

function removeLastDisplayEntry() {

    if (display.includes('-') && display.length === 2
        || display.length === 1
        || display === '-0.') {
        display = '0';
        clearDisplayCheck = true;
    } else {
        display = display.slice(0, -1);
    }

    updateDisplay();
    result = display;
};



const changeSign = document.querySelector('#change-sign');
changeSign.addEventListener('click', concatOrRemoveMinus);

function concatOrRemoveMinus() {
    if (display === 0) {
        changeSign.disable = true;
    }
    else {
        display *= -1;
        display = display.toString();
        updateDisplay();
    }
};

const decimalButton = document.querySelector('#point');
decimalButton.addEventListener('click', handleDecimalButton);

function handleDecimalButton() {
    if (display.includes('.')) {
        decimalButton.disable = true;
    }

    else {
        display += '.';
        result = display;
        clearDisplayCheck = false;
        updateDisplay();
    }
};

function updateDisplay() {

    if (display.length > 13) {
        let limitedString = display.slice(0, 13);
        display = limitedString.toString();
        displayDiv.textContent = display;
    } 
    else {
        displayDiv.textContent = display;
    }
};

// document.addEventListener('keydown', (event) => {
//     if (event.key === ) {

//     }
// })


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
        return displayDiv.textContent = 'You fool!';
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

    if (result.toString().length > 13) {
        return result = result.toPrecision(4).toString();
    } else {
        return result = result.toString();
    }
};