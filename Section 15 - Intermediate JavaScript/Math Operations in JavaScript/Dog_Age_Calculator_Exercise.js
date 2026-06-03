/**
 * Math Operations in JavaScript
 * 
 * Exercise 1: Dog Age to Human Age Converter
 * 
 * Description:
 * Create a dog age to human age converter using JavaScript to calculate the equivalent age of your dog if it were a human.
 * 
 * Requirements:
 * - Go to Chrome Developer Tools, open the Sources tab, and create your code inside a snippet named `index.js`.
 * - Create a prompt to ask the user for their dog's age.
 * - Calculate the equivalent human age of the dog using the following formula: first subtract 2 from the dog's age, then multiply by 4, and then add 21.
 * - Use parentheses to correctly apply the rules of precedence in your mathematical expression.
 * - Return this calculated answer to the user via an alert.
 * 
 * Your Answer Below:
 */

let dogAge = prompt('How old is your dog?');
let humanAge = ((dogAge - 2)*4) +21;
alert(`Your dog is ${humanAge} years old in human years`);

