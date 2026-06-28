class Employee {
    constructor(name, age, role) {
        this.name = name;
        this.age = age;
        this.role = role;
    }

    display() {
        return `Name: ${this.name}, Age: ${this.age}, Role: ${this.role}`;
    }

    designation() {
        return `The Designation of ${this.name}, is ${this.role}`;
    }
}

class Developer extends Employee {
    work() {
        console.log("I do Coding.");
    }
}

class Tester extends Employee {
    work() {
        console.log("I do Testing.");
    }
}

const dev = new Developer("Anusha", 20, "Frontend Developer");
console.log(dev.display());
console.log(dev.designation());
dev.work();

const tes = new Tester("Anu", 23, "QA Tester");
console.log(tes.display());
console.log(tes.designation());
tes.work();