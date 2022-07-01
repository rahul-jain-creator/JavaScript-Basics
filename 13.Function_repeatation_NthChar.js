// Write a function that takes two strings (a and b) as arguments
// Return the number of times a occurs in b

let a = "o";
let b = "Hello World is again here too";

function myFunc(a,b){
    return b.split(a).length - 1;
}

console.log(myFunc(a,b));

