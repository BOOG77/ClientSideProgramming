// Define a class that represents a financial transaction.
class Transaction{
    constructor(amount, category, type, date){
        this.amount = amount;
        this.category = category;
        this.type = type;
        this.date = date;
    }

    transactionSummary(){
        return this.date + " " + this.type + " " + this.category + " " + this.amount;
    }
}

class BudgetTracker{
    constructor(){
        this.balance = 0;
        this.expenseTotal = 0;
        this.incomeTotal = 0;
        this.transactions = [];
    }

    addTransaction(Transaction){
        this.transactions.push(Transaction);
    }

    showTransactions(){
        console.log("All transactions: ");
        for(let i = 0; i < this.transactions.length; i++){
            console.log(this.transactions[i].transactionSummary());
        }
    }

    showIncomeTransactions(){
        console.log("Income transactions: ");
        for(let i = 0; i < this.transactions.length; i++){
            if (this.transactions[i].type === "income"){
                this.incomeTotal += this.transactions[i].amount;
                console.log(this.transactions[i].transactionSummary());
            }
        }
        console.log("Total income: ", this.incomeTotal);
        return this.incomeTotal;
    }

    showExpenseTransactions(){
        console.log("Expense transactions: ");
        for(let i = 0; i < this.transactions.length; i++){
            if (this.transactions[i].type === "expense"){
                this.expenseTotal += this.transactions[i].amount;
                console.log(this.transactions[i].transactionSummary());
            }
        }
        console.log("Total expense: ", this.expenseTotal);
        return this.expenseTotal;
    }

    showBalance() {
        return console.log(this.showIncomeTransactions() - this.showExpenseTransactions());
    }
};

let todayDate = new Date();
let budgetTracker = new BudgetTracker();

budgetTracker.addTransaction(new Transaction(5000, "salary", "income", todayDate.toDateString()));
budgetTracker.addTransaction(new Transaction(2000, "lottery", "income", todayDate.toDateString()));
budgetTracker.addTransaction(new Transaction(1000, "bad boy fine", "expense", todayDate.toDateString()));
budgetTracker.showIncomeTransactions();
budgetTracker.showExpenseTransactions();
budgetTracker.showTransactions();
budgetTracker.showBalance();