/* 
2. In JavaScript, write a regular expression for the following situations

A single regular expression that uses JavaScript’s regexObj.test method to test whether a string contains only characters
Test strings:
[“abcde”, “0abcd”, “^abcd”, “ABCDE”]

A single regular expression that uses JavaScripts’s string.match to return an array of words that contain foo
Test string:
“foobar coobar toobar barfoo bafoor foooo foot fobart”

Deliverable:
JavaScript source file that runs the samples from above, a tester should be able to copy and paste the code from the file into the browser console to execute and verify */


/* I'm not super familiar with Regex so I'm not sure if there would be a better way to do this first one not involving a loop */
//regEx.test
const strings = ['abcde', '0abcd', '^abcd', 'ABCDE', '@fsD983'];
const regex = /\W/;

strings.forEach(string => {
  console.log(string, regex.test(string));
})

//regex.match
const words = 'foobar coobar toobar barfoo bafoor foooo foot fobart';
console.log(words.match(/([a-zA-Z]*foo[a-zA-Z]*)/g));



