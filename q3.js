/*
Write a JavaScript function that, given a string, removes duplicate characters
Example string:
“testertester”
Example output:
“tesr”

Bonus:
What’s the worst case runtime of your algorithm?
Print duplicates out and the number of occurrences of the duplicate
Example output from above:
        Duplicates:

                t => 3
                e => 3
                s => 1
                r => 1

Print the returned string sorted by character forward and backwards
Print the duplicates list sorted by character forward and backwards

Deliverable:
A JavaScript source file that runs the samples from above, a tester should be able to copy and paste the code from the file into the browser console to execute and verify
 */
let string = 'testertester';

function removeDuplicates(string) {
  let newString = [];
  let stringArr = string.split('');
  let countedLetters = stringArr.reduce((allLetters, letter) => {
    if (letter in allLetters) {
      allLetters[letter]++;
    }
    else {
      allLetters[letter] = 1;
      newString.push(letter);
    }
    // console.log(allLetters);
    return allLetters;
  }, {});

  let allTheLetters = newString.join('');

  console.log('letter count', countedLetters);
  console.log('newString', allTheLetters);
}

removeDuplicates(string);