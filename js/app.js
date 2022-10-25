"use strict";

console.log("hello world");

let visitorName = prompt("what is your name?");

alert(
  `Welcome to my site ${visitorName}! Please entered yes or no for the following questions`
);

let questionOneGuess = prompt('Do you have pets?').toUpperCase();

if (questionOneGuess === 'yes') {
  alert('Correct');
}
else if(questionOneGuess === 'NO') {
  alert('Incorrect');
}

alert('Thanks for visiting');