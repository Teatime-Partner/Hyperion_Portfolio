// Trigger script on pressing on the button. If not specified with query.Selector, any click will trigger the script
const button = document.querySelector("button");
button.addEventListener("click", (event) => {
  //Specify that will happen after the button is pressed
  //Trigger prompt to obtain value for manipulation
  //Declate input as a const variable that will be accessed by the function as a global scope
  const input = prompt("Please enter a word:");
  //Print the word from prompt
  document.getElementById("word").innerHTML = input;

  //create a function that will check if the word is a palindrome
  function palindromeCheck(word) {
    //create variables to store values and reversed word to check
    let index = 0;
    let len = word.length - 1;
    //create a condition for the while loop
    while (index < len) {
      //if statement checks both sides of the word and returns fales if they are not equal
      if (word.charAt(index) !== word.charAt(len)) {
        return `This word is not a palindrome`;
      }
      //while loop closure
      index++;
      len--;
    }
    return `This word is a palindrome`;
  }

  let result = palindromeCheck(input);
  console.log(result);
  //display the results on the console and in specified paragraph on the html page
  document.getElementById("palindrome").innerHTML = result;
});
