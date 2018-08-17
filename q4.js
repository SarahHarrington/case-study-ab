/* 4. Write a JavaScript function to replace every character in a given 
string with the character following it in the alphabet.

Example 1 input string:
“tester”
Example 1 output:
“uftufs”
Example 2 input string:
“ExamPLE”
Example 2 output:
“FybnQMF”

Deliverable:
A JavaScript source file that runs the samples from above, a tester should be able to copy 
and paste the code from the file into the browser console to execute and verify */

let string = 'Example';
const lowerCase = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];
const upperCase = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];


function jumbleTheWord(string) {
  let stringArr = string.split('');
  let newWord = [];
  for(let i = 0; i < stringArr.length; i++) {
    let lowerLetter = lowerCase.indexOf(stringArr[i]);
    if (lowerLetter === -1) {
      let upperLetter = upperCase.indexOf(stringArr[i]);
      if (upperLetter === upperCase.length - 1) {
        newWord.push(upperCase[0]);
      }
      else{
        newWord.push(upperCase[upperLetter + 1]);
      }
    }
    else {
      if (lowerLetter === lowerCase.length - 1) {
        newWord.push(lowerCase[0]);
      }
      else {
        newWord.push(lowerCase[lowerLetter + 1]);
      }
    }
  }

  console.log(newWord.join(''));
  return newWord.join('');
}

jumbleTheWord(string);