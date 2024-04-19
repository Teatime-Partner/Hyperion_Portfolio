//Part 1
//After the first review the code has been rewritten in various parts to test different output results and configurations
//Please comment out the parts of code as needed when looking through the code.

//Create a constant variable storage for the the nested function
//Outer function "function hide(hideLocation)" defines hidden location when defined
function hide(hideLocation) {
  //Inner function recalls the hideLocation variable defined above and returns a string with variable value
  // seek function doesn't take any parameter
  function seek() {
    return `Your location is ${hideLocation}.`;
  }
  return seek;
}
//create the variable to call for hide function to assign location to hide
//StartGame variable accessess the location hidden with hide function
let startGame = hide("Poland");
//Call for the variable, put () at the end as it's treated as function without a called parameter, otherwise will
//return [function: seek] without a parameter
console.log(startGame());

// //part 2 - - much simpler code
// // Try logging hideLocation directly from outside of the hide and seek functions.
// // Observe the result and explain why you think this happens, demonstrating your understanding of scope

// // Declare the variable with location
// let hideLocation = "Rome";
// //create a simple outer function with empty parameter as it won't be taking any
// function hide() {
//   //create a simple inner function without taking any prameter, access variable declared before the function
//   function seek() {
//     return `Your location is ${hideLocation}`;
//   }
//   return seek();
// }
// //declare the function and see the output - function will read the variable declared outside the outer function
// let startGame = hide();
// console.log(startGame); //Output "Rome"
// //if location variable is declared after the function, function cannot access the variable as it is out of scope
// // let hideLocation = "Spain";
// // console.log(startGame);

// //part 2 -cd, testing variations with declation of the location variable inside the hide funciton scope

// function hide() {
//   let hideLocation = "Paris";
//   function seek() {
//     return `Your locaiton is ${hideLocation}`;
//   }
//   return seek();
// }
// //declaring a variable to recall the function with
// let startGame = hide();
// console.log(startGame); //Output "Paris", as declared in the function

// //part 2 -cd, testing variation with declaration of the location variable inside the seek function - testing the scope

// function hide() {
//   function seek() {
//     let hideLocation = "London";
//     return `Your locaiton is ${hideLocation}`;
//   }
//   return seek();
// }
// //declare another let variable outside the function
// let hideLocation = "Belgium";
// //variable to call the function
// let startGame = hide();
// console.log(startGame); //Output "London" as the variable inside seek function hasn't been changed and the function doesn't take parameters
// //Declaration of another location variable didn't change the result of the function
// //calling location returns Belgium
// console.log(location);
