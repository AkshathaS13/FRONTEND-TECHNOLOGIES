//Function Overloading
function add() {
    console.log("Sum:", 10 + 10);
}


function add(a) {
    console.log("Sum:", a + 15);
}

function add(a, b){
    console.log("Sum:", a + b);
}

add();
add(10);
add(10, 20);


// ... = 0 - n = 1D[]
function add(... numbers) {
    let sum =0;
    for(let num of numbers){
        sum = sum + num;
    }
    return sum;
    
}
console.log(add(10));
console.log(add(10, 20));
console.log(add(10, 20, 30));
