for(let i=1; i<=10; i++){
    process.stdout.write(i + " ");
}
console.log("<br>");

//for-of Loop 
let fruits = ["apple","banana", "orange"];
for(let fruit of fruits){
    console.log(fruit);
}

//for-in Loop
let student = {name: "John", age: 20, grade: "A"};
for(let key in student){
    console.log(key + ": " + student[key]);
}

//ForEach Loop
let numbers= [ 1, 2, 3, 4, 5];


//Break Statement
for(let i =1; i<=5; i++){
    if(i === 3){
        break;
    }
    console.log(i);
}

//Continue Statement
for(let i=1; i<=5; i++){
    if(i=== 3){
        continue;
    }
    console.log(i);
}

//retrun Statement
