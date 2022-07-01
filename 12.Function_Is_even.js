// Write a function that takes a number as argument
// If the number is even, return true
// Otherwise, return false

function myFunc1(a){
    if ( a % 2 == 0) {
        return true; } else {
            return false;
    }
}

console.log("Value of 1st functions is "+ myFunc1(10));


// Another Method 

function myFunc2(a){
    return a % 2 ===0;
}

console.log("Value of 2nd function is "+ myFunc2(10));