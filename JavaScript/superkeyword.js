//Method Overridiing

class Parent {
    constructor(name) {
        this.name = name;
    }

    marry() {
        console.log("Marry at 25")
    }
}

class Child extends Parent {
    constructor(name, age) {
        super(name);
        this.age = age;        
    }

    marry() {
        super.marry(); // Calls the marry method from the Parent class
        console.log("Marry at 26");
    }
}

let c = new  Child("Harry", 25);
console.log(c.name);
console.log(c.age);
c.marry();
