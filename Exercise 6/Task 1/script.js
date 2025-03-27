/*
 * Author: Dawson Brown
 * LMD: March 16 2025
 * School: NSCC
 * Course: Client Side Programming
 * Exercise: Library Management System
 */

class book {
    //fisrt step is creating constructor
    constructor (title, author){
    this.title= title;
    this.author= author;
    this.available=true;
    }
     
     
    //methods get and set returned 
    borrowBook() {
        if(this.available){
          this.available=false;
        console.log(`${this.title} is borrowed`);
      }else {
          console.log(`${this.title} is already borrowed`)
      }
    
     
    }
     
    returnBook() {
     
     if(!this.available){
         this.available=true;
        console.log(`${this.title} is returned`);
     }else{
             console.log(`${this.title} is already available`);
     }
     
    }
    }
     
    let book1 = new book("Lovely Java", "Dawson");
    book1.borrowBook();
    book1.borrowBook();
    book1.returnBook();