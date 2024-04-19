//Function to add all values in the array, define parameters as 3 separate values required for addition, otherwise return NaN
function findSum(a, b, c) {
  return a + b + c;
}

//Function to subtract second value from third in the array, 2 values required in arguments to work
function subtractNumbers(a, b) {
  return b - a;
}
//Function to miltiply second value by third value in the array
function multiplyNumbers(a, c) {
  return c * a;
}
//Function to divide first value by second value, if statement ennsuring divid eby 0 is not allowed and returning a message instead
function divideNumbers(sum, c) {
  if (c === 0) {
    return "Cannot divide";
  } else {
    return sum / c;
  }
}
//create an array and define variables to access the values in the code, not the most elegant solution;
const array = [411, 419, 3131];
let a = array[0];
let b = array[1];
let c = array[2];

//Use variable to call the funcion;
let sum = findSum(a, b, c);
console.log(sum);

let subtract = subtractNumbers(a, b);
console.log(subtract);

let multiply = multiplyNumbers(a, c);
console.log(multiply);

let divide = divideNumbers(sum, c);
console.log(divide);

//My reading comprehension has been severely challenged during this task because apparently reading hard, algebra hard too XD
