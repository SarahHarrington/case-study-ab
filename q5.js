/* 
Write a JavaScript function to find and print the first 5 “happy numbers” that for integer inputs greater than zero. 

According to Wikipedia a “happy number” is defined by the following process :

"Starting with any positive integer, replace the number by the sum of the squares of its digits, 
and repeat the process until the number equals 1 (where it will stay), 
or it loops endlessly in a cycle which does not include 1. 
Those numbers for which this process completes in a result of 1 are happy numbers, 
while those that do not complete in a result of 1 are unhappy numbers (or sad numbers)". */

let number = 49;
let happyNumbers = [];
let tempNumberHolder = 0;
let loopCount = 0;

function isItHappy(number) {
  console.log(number)
  tempNumberHolder = number;
  while (number !== 1) {
    console.log('first while')
    loopCount = loopCount + 1;
    let numArr = number.toString().split('');
    let tempArr = [];
    for (let i = 0; i < numArr.length; i++) {
      tempArr.push(Math.pow(parseInt(numArr[i]), 2))
    }
    number = tempArr.reduce((accum, currentValue) => accum + currentValue, 0);
    return (number == 1);
  }
  console.log('got a happy number', happyNumbers)
  console.log('number', number);
  console.log('tempNumberHolder', tempNumberHolder);
  while (happyNumbers.length < 5) {
    console.log('second while')
    while (!isItHappy(number)) {
      tempNumberHolder = tempNumberHolder + 1;
      number = tempNumberHolder;
    }
    happyNumbers.push(tempNumberHolder);
    console.log('in the happy number while')
  }
}

isItHappy(number);

// function happy_number(num) {
//   let m, n;
//   let array = [];

//   while (num != 1 && array[num] !== true) {
//     array[num] = true;
//     console.log(array)
//     m = 0;
//     while (num > 0) {
//       n = num % 10;
//       m += n * n;
//       num = (num - n) / 10;
//     }
//     num = m;
//   }
//   console.log('right before the return', num == 1);
//   return (num == 1); 
// }

// let cnt = 5;
// var num = 1;
// let f5 = '';

// while (cnt-- > 0) {
//   while (!happy_number(num)) {
//     num ++;
//   }
//   f5 = f5 + (num + ', ');
//   num++;
// }


// console.log('First 5 happy numbers are: ' +f5)