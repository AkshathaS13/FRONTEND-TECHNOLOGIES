//Takes another function as an argument(input)
function order(callprepare, callserve) {
    console.log("1. Order Food..");
    callprepare();
    callserve();
} 

function prepare() {
    console.log("2. Preparation started");
}


function servecustomer() {
    console.log("3. Enjoy your Food..");
}
order(prepare, servecustomer);


//Professional Example for Higher order function.
function greet(name,age) { // CallBack Funtion
    console.log(`Name: ${name}`);
    console.log(`Age: ${age}`);
}

function processUser(name, age, callBack){ // higher Order Function
    console.log("Write your Profeesional Name at below")
    callBack(name,age);
}

processUser("Anusha",23, greet);

const numbers = [1, 2, 3, 4, 5, 6];
//step1 : doubel each number
const doubled = numbers.map(num => num * 2);
//step2 : keep only numbers greater than S
const filtered = doubled.filter(num => num > 5);
//step 3: finda the sum of remaining numbers
const total = filtered.reduce((sum, num) => sum + num, 0);

console.log("Doubled:",doubled);
console.log("Filtered:",filtered);
console.log("Total:",total);