class CoffeeMaking {
    boilWater() {
        console.log("Boiling water");
    }

    addCoffee() {
        console.log("Adding coffee powder");
    }

    addMilk() {
        console.log("Adding milk");
    }

    addSugar() {
        console.log("Adding sugar");
    }

    makeCoffee() {
        this.boilWater();
        this.addCoffee();
        this.addMilk();
        this.addSugar();
    }
}

const machine = new CoffeeMaking();
machine.makeCoffee();