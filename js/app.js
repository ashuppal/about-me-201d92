'use strict';

let visitorName = prompt('what is your name?');
console.log('User has been asked to enter the name');
alert(
  `Welcome to my site ${visitorName}! Please entered yes or no for the following questions`
);
console.log('User entered their name');

let questionOneGuess = prompt('Do I have pets?').toLowerCase();

if (questionOneGuess === 'yes' || questionOneGuess === 'y') {
  alert('correct, I have a dog - a goldern retriever!');
} else if (questionOneGuess === 'no' || questionOneGuess === 'n') {
  alert('Incorrect, I have a pet -  a golden retriever!');
} else {
  alert('Invalid input: Enter either yes,y or no/n');
}

console.log('User entered their response for the pet question');

let questionTwoGuess = prompt('Do I love to hike?');
questionOneGuess.toLowerCase();

if (questionTwoGuess === 'yes' || questionTwoGuess === 'y') {
  alert('correct, I love to hike with my dog!')
} else if (questionTwoGuess === 'no' || questionTwoGuess === 'n') {
  alert('Incorrect, I actually love to hike with my dog!')
} else {
  alert('Invalid input: Enter either yes/y or no/n')
}

console.log('User entered their response for the hike question')

let questionThreeGuess = prompt('Do I like to dance?')
questionThreeGuess.toLowerCase()

if (questionThreeGuess === 'yes' || questionThreeGuess === 'y') {
  alert('Incorrect, I think I am a terrible dancer')
} else if (questionThreeGuess === 'no' || questionThreeGuess === 'n') {
  alert('Correct, I have two left feet')
} else {
  alert('Invalid input: Enter either yes/y or no/n')
}

console.log('User entered their response for the dance question')

let questionFourGuess = prompt('Do I like ice-cream?')
questionThreeGuess.toLowerCase()

if (questionFourGuess === 'yes' || questionFourGuess === 'y') {
  alert('nope! Weird, I know! but I donot eat ice cream ')
} else if (questionFourGuess === 'no' || questionFourGuess === 'n') {
  alert('Right on! I am not carzy about ice cream')
} else {
  alert('Invalid input: Enter either yes/y or no/n')
}

console.log('User entered their response for the ice cream question')

let questionFiveGuess = prompt('Do I like to code?')
questionThreeGuess.toLowerCase()

if (questionFiveGuess === 'yes' || questionFiveGuess === 'y') {
  alert('spot on! That is why I am here!')
} else if (questionFiveGuess === 'no' || questionFiveGuess === 'n') {
  alert('Incorrect, I love to code!')
} else {
  alert('Invalid input: Enter either yes/y or no/n')
}

console.log('User entered their response for the coding question')

let myNum = 6
let guessesSoFar = 0
let hasWon = false

//putting a plus in front of prompt will convert in into a number.
//  let questionSixGuesses = +prompt(
//     "I am thinking of a number. Can you guess it? I will give you 4 guesses!"
//   );

/* let score = 0;


*/

let questionSixGuess = Number(
  prompt(
    'I am thinking of a number. Can you guess it? I will give you 4 guesses!'
  )
)
while (guessesSoFar < 4 && !hasWon) {
  if (questionSixGuess === myNum) {
    alert('That is absolutely right!')
    //score++
    hasWon = true
    break
  } else if (questionSixGuess > myNum) {
    alert('That is higher than my number...guess again')
  } else if (questionSixGuess < myNum) {
    alert('That is lower than my number...guess again')
  }

  questionSixGuess = Number(prompt('keep guessing'))
  guessesSoFar++
  // if(guessesSoFar === 0){
  //   alert('The correct answer was 6');
  // }
}
if (hasWon === true) {
  alert('You won!')
}

let myFavoriteFood = [
  'indian',
  'mexican',
  'chinese',
  'burger',
  'pizza',
  'pasta'
]

let guessFood = 6
let guessedRight = false

while (guessFood > 0 && !guessedRight) {
  let questionSevenGuess = prompt(
    'Can you guess one of my favorite food'
  ).toLowerCase()

  for (let i = 0; i < myFavoriteFood.length && !guessedRight; i++) {
    if (myFavoriteFood[i] === questionSevenGuess) {
      alert('You got it! ')
      guessedRight = true
    }
  }
  guessFood--
}
if (guessedRight === true) {
  alert('You have guessed it right! My favorite foods are: ' + myFavoriteFood)
}
