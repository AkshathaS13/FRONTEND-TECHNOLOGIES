//the same method name, call behave in many form
//ploy - many, morphsium - forms
///on interface, many forms


class Animal {
    makeSound() {
        console.log("Animal makes sound");
    }
}

class Dog extends Animal {
    makeSound() {
        console.log("Dog barks");
    }
}

class Car extends Animal {
    makeSound() {
        console.log("Car honks");
    }
}

const dog = new Dog();
const car = new Car();

dog.makeSound();
car.makeSound();