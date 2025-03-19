/*
 * Author: Dawson Brown
 * LMD: March 16 2025
 * School: NSCC
 * Course: Client Side Programming
 * Exercise: Library Management System
 */

// Create a book Object

let book = {
    title: "Life of Pi",
    author: "Yann Martel",
    available: true,
    
    getDetails() {
        return `Title: ${this.title}, Author: ${this.author}, Available: ${this.available}`;
    },

    borrowBook() {
        if (this.available) {
            this.available = false;
            return "Book borrowed successfully!";
        } else {
            return "Sorry, the book is already borrowed.";
        }
    },

    returnBook() {
        if (!this.available) {
            this.available = true;
            return "Book returned successfully!";
        } else {
            return "The book is already available.";
        }
    }
};

// ✅ TEST: Call these functions and check if they work
console.log(book.getDetails());  
console.log(book.borrowBook());  
console.log(book.borrowBook());  
console.log(book.returnBook());
console.log(book.returnBook());

// Create a librarian Object

let librarian = {
    firstName: "Sarah",
    lastName: "Smith",
    _shift: "morning",

    get fullName() {
        return `${this.firstName} ${this.lastName}`;
    },

    set shift(newShift) {
        if (newShift === "morning" || newShift === "evening") {
            this._shift = newShift;
        } else {
            console.log("Invalid shift. Please enter 'morning' or 'evening'.");
        }
    },

    get shift() {
        return this._shift;
    }
};

// ✅ TEST: Call these functions and check if they work
console.log(librarian.fullName);  
librarian.shift = "night";  
librarian.shift = "evening";  
console.log(librarian.shift);  

// Create a library Object

let library = {
    books: [],
    librarian: librarian,

    addBook(newBook) {
        this.books.push(newBook);
    },

    listAvailableBooks() {
        return this.books.filter(book => book.available).map(book => book.title);
    }
};

// ✅ TEST: Add books and check available books
library.addBook({ title: "Life of Pi", author: "Yann Martel", available: true });
library.addBook({ title: "Introduction to JavaScript", author: "John Doe", available: false });
library.addBook({ title: "The Catcher in the Rye", author: "J.D. Salinger", available: true });

console.log(library.listAvailableBooks());  