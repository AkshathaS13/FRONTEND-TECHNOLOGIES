function add(a,b,c) {
    let sum = a + b + c;
    console.log("Sum :", sum);
}
add(10,5,6);

let add1 = function(a, b, c) {
    console.log("Sum:", a + b + c);
}
add1(10, 3, 2);

let add2 = (a, b, c) => console.log("Sum:", a + b + c);
add(10, 5, 7);

(function(a, b, c){
    console.log("Sum:", a + b + c);
})(9, 7, 8);