// Trigger script on pressing on the button. If not specified with query.Selector, any click will trigger the script
const button = document.querySelector("button");
button.addEventListener("click", (event) => {
  //Specify that will happen after the button is pressed
  //Trigger prompt to obtain value for manipulation
  const input = prompt("Enter a number with at least 3 digits:");
  //Display value obtained by prompt in html element
  document.getElementById("yourNumber").innerHTML = input;
  //Create array from the input
  let inputArray = input.split("");
  //Create a for loop to ensure it runs only once
  for (let i = 0; i < 2; i++) {
    //Create the swap of indexes with temp variable
    let temp = inputArray[1];
    inputArray[1] = inputArray[inputArray.length - 1];
    inputArray[inputArray.length - 1] = temp;
    //Join array back into a string
    let swappedNumber = inputArray.join("");
    //Stop the loop in case it loops infinitely after only 1 execution
    if (i === 1) {
      break;
    }
    //display the value in html file
    document.getElementById("numberSwapp").innerHTML = swappedNumber;
  }
});
