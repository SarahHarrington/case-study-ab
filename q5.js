/* 
Write a JavaScript function to find and print the first 5 “happy numbers” that for integer inputs greater than zero. 

According to Wikipedia a “happy number” is defined by the following process :

"Starting with any positive integer, replace the number by the sum of the squares of its digits, 
and repeat the process until the number equals 1 (where it will stay), 
or it loops endlessly in a cycle which does not include 1. 
Those numbers for which this process completes in a result of 1 are happy numbers, 
while those that do not complete in a result of 1 are unhappy numbers (or sad numbers)". */

let number = 49;
let loops = 0;
let originalNumber;
let happyNumbers = [];
let tempNumbers = [];
let happyNumber;

// function isItHappy(number) {
//   tempNumbers.push(number);
//   let numArr = number.toString().split('');
//   let tempArr = [];
//   for (let i = 0; i < numArr.length; i++) {
//     tempArr.push(Math.pow(parseInt(numArr[i]), 2))
//   }
//   let arrTotal = tempArr.reduce((accum, currentValue) => accum + currentValue, 0);
//   if (arrTotal === 1) {
//     happyNumber = tempNumbers.slice(0, 1)
//     console.log(parseInt(happyNumber.toString('')));
//     happyNumbers = [...happyNumber];
//     isItHappy(happyNumber + 1);
//   }
//   else {
//     loops = loops + 1;
//     if (loops < 100) {
//       isItHappy(arrTotal);
//     }
//     else {
//       console.log('all up in this else')
//       loops = 0;
//       isItHappy(happyNumber + 1);
//     }
//   }
// }

function isItHappy(number) {
  let tempNum = number;
  tempNumbers.push(number);
  while (happyNumbers.length < 5) {
    while (tempNum !== 1) {
      console.log(tempNum)
      let numArr = tempNum.toString().split('');
      let tempArr = [];
      for (let i = 0; i < numArr.length; i++) {
        tempArr.push(Math.pow(parseInt(numArr[i]), 2))
      }
      tempNum = tempArr.reduce((accum, currentValue) => accum + currentValue, 0);
      loops = loops + 1;
      console.log('loops', loops)
      if (loops === 100) {
        console.log('in the loop if, hit 100')
        tempNum = happyNumbers[happyNumbers.length - 1];
        loops = 0;
        console.log('in the loop if, hit 100', loops)
        break;
      }
    }
    happyNumber = tempNumbers.slice(0, 1);
    happyNumbers = [...happyNumber];
  }
  console.log(happyNumbers);
}


isItHappy(number);