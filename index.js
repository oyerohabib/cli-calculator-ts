"use strict";
exports.__esModule = true;
var readline_sync_1 = require("readline-sync");
var isOperator = function (operator) {
    switch (operator) {
        case "+":
        case "-":
        case "/":
        case "*":
            return true;
        default:
            return false;
    }
};
var isNumber = function (num) {
    var input = parseInt(num);
    var result = !isNaN(input);
    return result;
};
var calculate = function (firstNum, operator, secondNum) {
    switch (operator) {
        case "+":
            return firstNum + secondNum;
        case "-":
            return firstNum - secondNum;
        case "/":
            return firstNum / secondNum;
        case "*":
            return firstNum * secondNum;
    }
};
var askQuestion = function () {
    var firstStr = (0, readline_sync_1.question)("enter first number: \n");
    var operator = (0, readline_sync_1.question)("enter operator: \n");
    var secondStr = (0, readline_sync_1.question)("enter second number: \n");
    var validInput = (isNumber(firstStr), isOperator(operator), isNumber(secondStr));
    if (validInput) {
        var firstNum = parseInt(firstStr);
        var secondNum = parseInt(secondStr);
        var result = calculate(firstNum, operator, secondNum);
        console.log(result);
    }
    else {
        console.log("inputs are not valid\n");
        askQuestion();
    }
};
askQuestion();
