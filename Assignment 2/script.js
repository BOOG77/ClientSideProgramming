// Define a class that represents a financial transaction.
class Transaction{
    constructor(amount, category, type, date){
        this.amount = amount;
        this.category = category;
        this.type = type;
        this.date = date;
    }
}

class BudgetTracker{
    constructor(){
        this.balance = 0;
        this.expenseTotal = 0;
        this.incomeTotal = 0;
    }

    addExpense(){ 
        let todayDate = new Date();
        let expense = new Transaction(prompt("Amount: "), prompt("Income or Expense?: "), prompt("Type: "), todayDate.toDateString());
        this.balance = this.balance - expense.amount;
        console.log(expense);
    }
    addIncome(){
        balance = transaction.amount + balance;
    }
    
};

let budgetTracker = new BudgetTracker();

budgetTracker.addExpense();
console.log(budgetTracker.balance);