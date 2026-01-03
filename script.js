/* 
functions: 
    - numbers
    - delete
    - all clear
    - addition
    - subtraction
    - multiplication
    - division
    - decimals
*/

const display = document.getElementById("display");
const numerals = document.querySelectorAll(".numerals");
const operations = document.getElementById("operations");
const prevAns = document.getElementById("previous-answer");
const clearBtn = document.getElementById("clear");
const clearAllBtn = document.getElementById("clear-all");
const equal = document.getElementById("equal");

let firstNumber = "";
let secondNumber = "";
let currentOperation;

function add(a, b) {

}

function subtract(a, b) {
    
}

function multiply(a, b) {
    
}

function divide(a, b) {
    
}

function clear() {

}

function clearAll() {

}

function inputNumber(button) {

}

function changeOperation() {

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

prevAns
