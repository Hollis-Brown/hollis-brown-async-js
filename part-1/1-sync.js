// Introduction to synchronous JavaScript execution.
// Code execution sequentially steps through the program from top-to-bottom
console.log("Before");
const calculateNum = (a, b) => a * b;

const num1 = 10;
const num2 = 5;
const calculation = calculateNum(num1, num2);
console.log(calculation);
console.log("After");
// Just straightforward line-by-line code execution. Nothing fancy.