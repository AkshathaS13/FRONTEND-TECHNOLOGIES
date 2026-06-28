let student = {
    name : "Anu",
    age : 23,

    study() {
        console.log(this.name + " is studying.");
    }
};
console.log(student.name);
console.log(student.age);
student.study();

class Student1 {
        name = "Aruch";
        age = 22;

    study() {
        console.log(this.name + " is studying.");
    }
};
let s = new Student1();
console.log(s.name);
console.log(s.age);
s.study();
