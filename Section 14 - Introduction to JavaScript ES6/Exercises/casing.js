// Exercise 1
// let nombre = "eddie";
// console.log(nombre.toUpperCase());

/*Imprime EDDIE*/

// Exercise 2 
// let nombre = "EDDIE";
// nombre = nombre.toLowerCase();
// console.log(nombre);

// primer paso se le agrega a la variable nombre el valor EDDIE, luego este se cambia a lower case y se asigna de nuevo a nombre para cambiarlo, luego imprime eddie

// Exercise 3 and 4 


let nombre = prompt("Ingresa tu primer nombre");
let firstLetter = nombre.slice(0,1); 
firstLetter = firstLetter.toUpperCase();
console.log(firstLetter);

let restWord = nombre.slice(1);
restWord = restWord.toLowerCase();
console.log(restWord);

console.log(firstLetter+restWord);
