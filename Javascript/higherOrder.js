//Define the array
let myArray = [
  "Ruler",
  "Pencil",
  "Crayon",
  "Ereaser",
  "Notebook",
  "Pen",
  "Book",
  "Paper",
  "Marker",
  "Highlighter",
];

//Declare an arrow function that takes 2 parameters
const myFilterFunction = (arr, fn) => {
  //create an empty array to take a filtered elements
  let newArray = [];
  //loop through all elements of the arr (array) parameter
  for (let element of arr) {
    //define the condition for pushing filtered elements info the array
    //fn/callback function being the condition; if condition specified in the callback function is
    //true, elements will be pushed to the new array
    if (fn(element)) {
      newArray.push(element);
    }
  }
  return newArray;
};
//define callback (fn) function that takes the element of the array and checks if it is 6 characters long
const sixLetters = (word) => word.length === 6;

//variable takes the filter function and takes myArray and sixLetters as arguments
const result = myFilterFunction(myArray, sixLetters);
console.log(result);
