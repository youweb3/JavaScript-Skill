class BankAccount {
    constructor(accountNumber, accountHolder, balance =0) {
        this.accountNumber = accountNumber;
        this.accountHolder = accountHolder;
        this.balance = balance;
    }

    deposit(amount) {
        this.balance += amount;
        console.log(`Deposited: ${amount}. New balance: ${this.balance}`);
    }

    withdraw(amount) {
        if (amount > this.balance) {
            console.log('Insufficient funds');
        } else {
            this.balance -= amount;
            console.log(`Withdrawn: ${amount}. New balance: ${this.balance}`);
        }
    }

    checkBalance() {
        console.log(`Account balance: ${this.balance}: Account holder: ${this.accountHolder}: Account number: ${this.accountNumber}`);
    }
}
export default BankAccount;
