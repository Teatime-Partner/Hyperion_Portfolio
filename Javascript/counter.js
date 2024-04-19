let intervalID;
let counter = 0;

let startCounter = function () {
  intervalID = setInterval(counting, 1000);
  // Create the logic needed in the setInterval() function for
  //incrementing the counter and outputting to the console
};

function counting() {
  counter++;
  console.log(counter);
}

let count = startCounter();

console.log(count);
