import { question } from "readline-sync";

type Operator = "+" | "-" | "*" | "/";

const isOperator = (operator: Operator): boolean => {
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

const isNumber = (num: string): boolean => {
  const input = parseInt(num);
  const result = !isNaN(input);
  return result;
};

const calculate = (firstNum: number, operator: Operator, secondNum: number) => {
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

const askQuestion = () => {
  const firstStr = question("enter first number: \n");
  const operator = question("enter operator: \n");
  const secondStr = question("enter second number: \n");
  const validInput =
    (isNumber(firstStr), isOperator(operator as Operator), isNumber(secondStr));

  if (validInput) {
    const firstNum = parseInt(firstStr);
    const secondNum = parseInt(secondStr);
    const result = calculate(firstNum, operator as Operator, secondNum);
    console.log(result);
  } else {
    console.log("inputs are not valid\n");
    askQuestion();
  }
};

askQuestion();
