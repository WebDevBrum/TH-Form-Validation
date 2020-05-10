/**
 * Returns a random number between two numbers.
 *
 * @param {number} lower - The lowest number value.
 * @param {number} upper - The highest number value.
 * @return {number} The random number value.
 */

function randomChallenge(lower, upper = 100) {
  if (isNaN(lower) || isNaN(upper) ){
     
    throw Error("Both arguments must be numbers.");  
  }
   return Math.floor(Math.random() * (upper - lower + 1)) + lower;
  }
// Call the function and pass it different values

console.log(randomChallenge(5, 25));
console.log(randomChallenge(100, 82));
console.log(`${randomChallenge(345, 1000)} is a number between 345 and 1000`);
console.log(randomChallenge(1000, 1000000000));
console.log(randomChallenge(1000, "three thousand"));

