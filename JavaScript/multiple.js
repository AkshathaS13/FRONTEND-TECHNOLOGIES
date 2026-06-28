//Multiple Inheritance
const fly = {
    fly() {
        console.log('I can fly');
    }
}

const swim = {
    swim() {
        console.log('I can swim');
    }
}

class Duck {}
//mixin
Object.assign(Duck.prototype, fly, swim);

let d = new Duck();
d.fly();
d.swim();