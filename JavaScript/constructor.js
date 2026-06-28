class Student {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }

    study() {
        console.log("Studies.");
    }
}
let s = new Student("Anusha", 20);
console.log(s.name);
console.log(s.age);
s.study();

let s1 = new Student("Anu", 23);
console.log(s1.name);
console.log(s1.age);
s1.study();

