// Write a function that takes a number (a) as argument
// If a is a whole number (has no decimal place), return true
// Otherwise, return false


function myFunc1(a){
    return a % 1 === 0;
}

console.log("Value of 1st function is "+ myFunc1(10.1));

//Another Method

function myFunc(a){
    return a - Math.floor(a) === 0;
}

console.log("Value of nd function is "+ myFunc(10));



