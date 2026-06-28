//add 2 Numbers
function add() {
    let c = 10 + 3;
    console.log(c);
}

//call Function 
add();

//to find area and Perimerte of a circle
function areaAndPerimeterOfCircle(radius) {
    let area = Math.PI * radius * radius;
    let perimeter = 2 * Math.PI * radius;
    console.log("Area of Circle :", area);
    console.log("Perimeter of Circle :", perimeter);
}
areaAndPerimeterOfCircle(5);

//Find Simple Intrest 
function simpleInterest(principal, rate, time) {
    let interest = (principal * rate * time) / 100;
    console.log("Simple Interest :", interest);
}

simpleInterest(1000, 6, 2);


//No Parameter and return type
function greet() {
    console.log("Hello, Welcome to JavaScript Functions!");
}

//with parameter and no return type
function greet(name) {
    console.log("Hello, " + name + "! Welcome to JavaScript Functions!");
}

//No parameter and with return type
function getCurrentYear() {
    return new Date().getFullYear();
}
console.log("Current Year :", getCurrentYear());

//With parameter and with return type
function calculateSquare(number) {
    return number * number;
}
console.log("Square of 5 :", calculateSquare(5));

//Finding Area of Rectangle
function areaOfRectangle() {
    let length =10;
    let width = 5;
    console.log("Area of Rectangle :", length * width);
}

function areaOfRectangle(length, width) {
    let result = length * width;
    console.log("Area of Rectangle :", result);
}
areaOfRectangle(10, 5);

function areaOfRectangle() {
    let l = 6;
    let w = 5;
    return l * w;
}
console.log(areaOfRectangle());


function areaOfRectangle(l, w) {
    return l * w;
}
let res = areaOfRectangle(6, 5);
console.log("Area of the Rectangle is: " + res);    
console.log(`Area of the Rectangle is: ${areaOfRectangle(6, 5)}`);