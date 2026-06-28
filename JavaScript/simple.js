document.writeln("Hello");
document.writeln("<h1>Welcome</h1>"); ("<br>");
document.writeln("3 + 4 =" + (3 + 4));
document.write("<br>");
document.write(5 + 10);
document.write("<br>");
document.write("3" + "3");
document.write("<br>");
document.writeln("3" + 4 + 1);



// Var Variable Scopr = function scope
function varvari() {
    var name = "Akshatha";
    console.log(name);
}
varvari() 
console.log(name);// This will cause an error because 'name' is not defined outside the function

//Let Variable Scope - Block scope
let a = 10;
a = 20;
console.log(a);
//let a = 30; //error


//const Variable Scope - Block scope
const pi = 3.14;
console.log(pi);






