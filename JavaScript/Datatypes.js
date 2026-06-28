//primitive
//Number
//dynamically typed language

let a = 10;
console.log(typeof a, a);


a = "AkShaTha";
console.log(typeof a, a);

//Javascript loosely typed
let b = 3.16
const pi = 3.14
console.log(typeof b, b);

//String - " " OR ' ' OR ` `
let str = "Akshatha";
console.log(str, typeof str);

//My Name is 
console.log("My Name is", str + " age around " + a + " years");
console.log("My Name is " +  str);

//ESG string Literals '${pi}'
console.log(`Value of pi is ${pi} and value of b is ${b}`);

//boolean true or false
let isvalid = true;
console.log(typeof isvalid, isvalid);

//Undifined
let c;
console.log(typeof c, c);
console.log(c);

let z = 10/0;
console.log(z, typeof z);

let zz = 0/0;
console.log(zz, typeof zz);


//null
let payment = null;
console.log(typeof payment, payment);
console.log(payment);

//bigint
let g = 100n;
console.log(typeof g, g);

//symbol
let x = Symbol("Anu");
console.log(x);
console.log(typeof x);

//Complex 
//Array - [1,2,3,4,5]
let arr = [1,2,3,4,5];
console.log(arr);
console.log(arr, arr[3]);


//object 
let person = {
    name: "Anu",
    age: 25
}

console.log(person);
console.log(person.name);
console.log(Object.keys(person));
console.log(Object.values(person));


//funtion
function add() {
    c = 6 + 7;
    console.log(c);
}
add();