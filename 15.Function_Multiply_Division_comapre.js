// Write a function that takes two numbers (a and b) as arguments
// If a is smaller than b, divide a by b
// Otherwise, multiply both numbers
// Return the resulting value

function myFunc(a,b){
    if(a<b){
        return a/b;
    } else return a*b;
}

console.log(myFunc(5,10));
console.log(myFunc(5,1));

//Another Method

function myFunc2(a, b) {
    return a < b ? a / b : a * b
  }

console.log(myFunc2(5,10));
console.log(myFunc2(5,1));
