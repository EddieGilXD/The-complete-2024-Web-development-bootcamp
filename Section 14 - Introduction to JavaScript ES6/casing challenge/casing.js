let name = prompt("What is your name?");
let firstLetter = name.slice(0,1);
let restWorld = name.slice(1,name.length);
restWorld = restWorld.toLowerCase();
alert("Hello, " + firstLetter.toUpperCase() + restWorld);