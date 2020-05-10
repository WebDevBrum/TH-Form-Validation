let randomNumber = getRandomNumber(10);
let guess;
let guessCount = 0;
let correctGuess = false;

function getRandomNumber( upper ) {
  let num = Math.floor(Math.random() * upper) + 1; 
  return num;
}

do {
  guess = prompt("I am thinking of a number between 1 and 10. What is it?");
  guessCount += 1;
  if (parseInt(guess) === randomNumber){
    correctGuess = true;
  }
} while (! correctGuess) //as this would evaluate to true if the guess is wrong and  and repeat the loop
  
  document.write(`<h1>You guessed the number</h1>`);
  document.write(`It took you ${guessCount} attempts to guess the number ${randomNumber}!`);