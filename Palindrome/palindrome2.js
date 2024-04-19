const input = "anna";
function palindromeCheck(word) {
  let index = 0;
  let len = word.length - 1;

  while (index < len) {
    if (word.charAt(index) !== word.charAt(len)) {
      return `This word is not a palindrome`;
    }
    index++;
    len--;
  }
  return `This word is a palindrome`;
}

let result = palindromeCheck(input);
console.log(result);
