function myFunc(a){
    let var1 = a.toString();
    return var1.split("").map(Number);
}

console.log(myFunc(1234));