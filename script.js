const calcContainer = document.querySelector('.calculator-container');
const operatorContainer = document.querySelector('.operator-buttons');
const displayDiv = document.querySelector('.display');

let firstNumber;
let operator;
let secondNumber;
let clearDisplayCheck = true;
//let display = []; //global isn't needed, display is handled inside each function

const numButtons = [
    '1', '2', '3',
    '4', '5', '6',
    '7', '8', '9',
    '0',
]

const operatorButtons = [
    '+', '-', 'x', '÷',
]

// const otherButtons [   ----future features
//    'Undo', '.',
// ]


//const undo = []; removing until i add undo feature



const clearButton = document.querySelector('#clear');
clearButton.addEventListener('click', resetCalculator); 

function resetCalculator() {
    display = [0];
    displayDiv.textContent = display.join('')
    clearDisplayCheck = true;
    firstNumber = null;
    secondNumber = null;
    operator = null;
}


const equalsButton = document.querySelector('#equals');
equalsButton.addEventListener('click', handleEquals);

function handleEquals() {
    secondNumber = display.join('');
    operate(firstNumber, operator, secondNumber);
    display = [];
    display.push(result); //every time i hit equals, it displays result, i need to only do this once
    displayDiv.textContent = display.join('');
    firstNumber = null;
    operator = null;
    secondNumber = null;
    clearDisplayCheck = true;
}


numButtons.forEach((button) => {
    const newButton = document.createElement('button');
    newButton.textContent = button;
    newButton.className = 'calc-button';
    newButton.addEventListener('click', () => {
        
        //undo.push(display); almost there, i need to relocate it i think, removing until later
        
        if (clearDisplayCheck === true) {
            clearDisplayCheck = false;
            display = [];
            display.push(button);
            displayDiv.textContent = display.join('');
            
        }
        else {
            display.push(button);
            displayDiv.textContent = display.join('');
        }
    });
    calcContainer.appendChild(newButton);
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
            console.log(firstNumber);
        }
        else if (firstNumber) {
            secondNumber = display.join('');
            clearDisplayCheck = true;
            operate(firstNumber, operator, secondNumber); // i don't want this to run unless
            //secondNumber = null;
            operator = button;
            firstNumber = result;
            display = [];
            display.push(firstNumber);
            displayDiv.textContent = display.join('');
            console.log(secondNumber);
        }
    });
    operatorContainer.appendChild(newButton);
});





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













