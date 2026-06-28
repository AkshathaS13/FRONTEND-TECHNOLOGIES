//Splice and slice

let nums = [10,20,30,40,50];
console.log(nums);
//splice(start, deleteCount, item1, item2, ...)
//console.log(nums.splice(2, 3));
//console.log(nums);

//console.log(nums.splice(4, 0, 60, 70));
//console.log(nums);

let arr1 = nums.slice(1,5);
console.log(arr1);
console.log(nums);


let fruits = ["apple", "banana", "cherry", "date", "elderberry"];
console.log(fruits.indexOf("cherry")); // Output: 2
console.log(fruits.indexOf("fig")); // Output: -1 (not found)

console.log(fruits.sort());
console.log(fruits.reverse());

//forEach Loop
let fr = ["apple", "banana", "Cherry"];
fr.forEach(fruit => console.log(fruit));


let num = [1, 2,3];
console.log(num);
num.forEach(nos => console.log(`The Numbers is ${nos * 5}`));
console.log(num);


//Map method
let numbers = [1,2,3,4,5];
let square = numbers.map(nu => nu * 10);
console.log(square);
console.log(numbers);

//filters method
let marks = [45, 60, 35, 70, 90];
let passmarks = marks.filter( mark => mark >= 50);
console.log(passmarks);
console.log(marks);


//Join Method

let word = ["world", "Hello", "Hi"];
let sentance = word.join(" ");
console.log(sentance);
