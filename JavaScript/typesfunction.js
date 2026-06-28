//function declartion
function greet() {
    console.log("Hello, Welcome to JavaScript Functions!");
}
greet();

//function Expression
let greet1 = function() {
    console.log("Hello, Everyone! This is function expression.");
}
greet1();


//Arrow Function
let greet2 = () => console.log("Hello, Everyone! This is Arrow Function");
greet2();


//IIFE (Immediately Invoked Function Expression)
(function() {
    console.log("Hello, EveryOne! This is IIFE");
})();
