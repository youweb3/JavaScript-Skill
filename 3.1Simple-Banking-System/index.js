import BankAccount from './bankAccount.js';


// Create a new BankAccount object
let account1 = new BankAccount(123456, 'John shaikh',100);
let account2 = new BankAccount(654321, 'kami sh',10);

// Deposit
// account1.deposit(0);
// account2.deposit(0);

//Withraw
// account1.withdraw(0);
// account2.withdraw(0);

//check balance
// account1.checkBalance();
// account2.checkBalance();

//Deposit, Withdraw and check balance for Accunt Holder
account1.deposit(500);
account1.withdraw(1000);
account1.checkBalance();

account2.deposit(10);
account2.withdraw(10);
account2.checkBalance();