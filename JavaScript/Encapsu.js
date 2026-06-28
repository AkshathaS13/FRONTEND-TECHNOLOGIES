class BankBalance {
    #balance;
    constructor(balance) {
        this.#balance = balance;
    }

    getBalance() {
        return this.#balance;
    }

    deposite(amount) {
        this.#balance += amount;
        console.log(`Deposited: ${amount}. New Balance: ${this.#balance}`);
    }
}

let b = new BankBalance(20000);
console.log(b.getBalance());
b.deposite(10000);
console.log(b.getBalance());