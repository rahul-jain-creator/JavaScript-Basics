// Write a function that takes two strings (a and b) as arguments
// If a contains b, append b to the beginning of a
// If not, append it to the end
// Return the concatenation

function myFunc(a,b){
    if(a.includes(b)){
    return b.concat(a);} else return a.concat(b);
}

//Another Method
function myFunc2(a,b){
   return a.includes(b) ? b.concat(a) : a.concat(b)  // can be return as b+a : a+b as well.
}

//Another Method

function myFunc3(a,b){
    return a.indexOf(b) === -1 ? a+b : b+a;
}

let var1 = "o";
let var2 = "world";

console.log(myFunc(var1,var2));
console.log(myFunc2(var1,var2));
console.log(myFunc3(var1,var2));