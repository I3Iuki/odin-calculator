const display = document.getElementById("display");
const numerals = document.querySelectorAll(".numerals");
const operations = document.querySelectorAll("operations");
const prevAns = document.getElementById("previous-answer");
const clearBtn = document.getElementById("clear");
const clearAllBtn = document.getElementById("clear-all");
const equal = document.getElementById("equal");
const preview = document.getElementById("preview");
const currentInput = document.getElementById("current-input")

let firstNumber;
let secondNumber;
let operationSymbol;
let currentOperation;

let previewEquation = `${firstNumber} + ${operationSymbol} + ${secondNumber}`

console.log(previewEquation)

function add(a, b) {
    return a + b;
}

function subtract(a, b) {
    return a - b
}

function multiply(a, b) {
    return a * b
}

function divide(a, b) {
    return a / b
}

function clear() {
    if (secondNumber) {
        secondNumber.split("").pop().join("");
    } else if (operator) {
        operator = "";
    } else if (firstNumber) {
        firstNumber.split("").pop().join("");
    }
}

function clearAll() {
    firstNumber = "";
    secondNumber = "";
    operationSymbol = "";
    currentOperation = null;

}

function inputNumber(button) {
    if (!currentOperation) {
        firstNumber += button.innerHTML;
    } else if (currentOperation) {
        secondNumber += button.innerHTML;
    }
}

function changeOperation() {
    if (!currentOperation || currentOperation && !secondNumber) {
        console.log("changed operation" + currentOperation + secondNumber);
    }
}


function updateDisplay() {

}

function result() {

}

for (button of numerals) {
    button.addEventListener("click", function(e) {
        inputNumber(e);
    });
}

for (button of operations) {
    button.addEventListener("click", function(e) {
        changeOperation(e);
    });
}