function createBankAccount() {

    let balance = 0;                // private
    let transactions = [];          // private (stores history)

    return {
        deposit(amount) {
            balance += amount;
            transactions.push(`Deposited: ${amount}`);
            console.log(`Deposited: ${amount}`);
        },

        withdraw(amount) {
            if (amount > balance) {
                transactions.push(`Failed withdrawal: ${amount}`);
                console.log("Insufficient balance");
            } else {
                balance -= amount;
                transactions.push(`Withdrawn: ${amount}`);
                console.log(`Withdrawn: ${amount}`);
            }
        },

        checkBalance() {
            console.log("Current Balance:", balance);
        },

        getHistory() {
            console.log("Transaction History:", transactions);
        }
    };
}
// Example usage:
const account = createBankAccount();
account.deposit(500); // Output: Deposited: 500
account.withdraw(200); // Output: Withdrawn: 200
account.withdraw(400); // Output: Insufficient balance
console.log(account.balance); // Output: undefined
