// 📌 Create a Transaction Class
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

// 📌 Create a BudgetTracker Class
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
        console.log("=====All transactions=====");
        for(let i = 0; i < this.transactions.length; i++){
            console.log(this.transactions[i].transactionSummary());
        }
        console.log("==========================");
    }

    getIncome(){
        //console.log("Income transactions: ");
        this.incomeTotal = 0;
        for(let i = 0; i < this.transactions.length; i++){
            if (this.transactions[i].type === "income"){
                this.incomeTotal += this.transactions[i].amount;
                //console.log(this.transactions[i].transactionSummary());
            }
        }
        //console.log("Total income: ", this.incomeTotal);
        return this.incomeTotal;
    }

    getExpenses(){
        //console.log("Expense transactions: ");
        this.expenseTotal = 0;
        for(let i = 0; i < this.transactions.length; i++){
            if (this.transactions[i].type === "expense"){
                this.expenseTotal += this.transactions[i].amount;
                //console.log(this.transactions[i].transactionSummary());
            }
        }
        //console.log("Total expense: ", this.expenseTotal);
        return this.expenseTotal;
    }

    getBalance() {
        return this.getIncome() - this.getExpenses();
    }

    accountDetails(){
        console.log("Total expense: ", this.getExpenses());
        console.log("Total income: ", this.getIncome());
        console.log("Current balance: ", this.getBalance());
    }
};

let todayDate = new Date();

// 📌 Create an instance of the BudgetTracker class.
let budgetTracker = new BudgetTracker();

// 📌 Add at least three transactions: One income (e.g., Salary). Two expenses (e.g., Food, Shopping).
budgetTracker.addTransaction(new Transaction(5000, "salary", "income", todayDate.toDateString()));
budgetTracker.addTransaction(new Transaction(2000, "late rent", "expense", todayDate.toDateString()));
budgetTracker.addTransaction(new Transaction(1000, "bad boy fine", "expense", todayDate.toDateString()));

// 📌 Display all transactions in the console or UI.
budgetTracker.showTransactions();
budgetTracker.accountDetails();