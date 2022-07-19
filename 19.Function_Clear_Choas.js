// It seems like something happened to these strings
// Can you figure out how to clear up the chaos?
// Write a function that joins these strings together such that they form the following words:
// 'Javascript', 'Countryside', and 'Downtown'
// You might want to apply basic JS string methods such as replace(), split(), slice() etc

function myFunc(a,b){
    let var1 = a.replace("%","");
    let removefirst = var1.slice(1);
    let capital = a.charAt(0).toUpperCase();
    let var2 = capital+removefirst;
    let var3 = b.replace("%","").split("").reverse().join("");
    let var4 = var2+var3;
    return var4.toString();

}

console.log(myFunc("java","tpi%rcs"));
console.log(myFunc('c%ountry','edis'));
console.log(myFunc('down','nw%ot'));