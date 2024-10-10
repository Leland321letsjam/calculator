let firstNumber;
let operator;
let secondNumber;

const numButtons = [
    '1', '2', '3',
    '4', '5', '6',
    '7', '8', '9',
    '0',
]

const operatorButtons = [
    '+', '-', '*', '/',
    '=',
]

// const otherButtons [   ----future features
//     'Clr', 'Undo',
//        '.',
// ]

const calcContainer = document.querySelector('.calculator-container');
const operatorContainer = document.querySelector('.operator-buttons');
const displayDiv = document.querySelector('.display');

let display = [];

//const undo = []; removing until i add undo feature



// numButtons.forEach((button) => {
//     const newButton = document.createElement('button');
//     newButton.textContent = button;
//     newButton.className = 'calc-button';
//     newButton.addEventListener('click', () => {
//         display.push(button);
//         //undo.push(updateDisplay); //almost there, i need to relocate it i think, removing until later
//         displayDiv.textContent = display.join('');
//     });
//     calcContainer.appendChild(newButton);
// });

// operatorButtons.forEach((button) => {
//     const newButton = document.createElement('button');
//     newButton.textContent = button;
//     newButton.className = 'operator-button';
//     newButton.addEventListener('click', () => {
//         if (!firstNumber) {
//             firstNumber = display.join('');
//             console.log(firstNumber);
//         }
//         else if (firstNumber) {
//             secondNumber = 
//             console.log(secondNumber);
//         }
//     });
//     operatorContainer.appendChild(newButton);
// });

let displayCheck = true;

numButtons.forEach((button) => {
    const newButton = document.createElement('button');
    newButton.textContent = button;
    newButton.className = 'calc-button';
    newButton.addEventListener('click', () => {
        
        //undo.push(display); //almost there, i need to relocate it i think, removing until later
        
        if (displayCheck === true) {
            displayCheck = false;
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
            displayCheck = true;
            console.log(firstNumber);
        }
        else if (firstNumber) {
            secondNumber = display.join('');
            displayCheck = true;
            console.log(secondNumber);
        }
    });
    operatorContainer.appendChild(newButton);
});





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














