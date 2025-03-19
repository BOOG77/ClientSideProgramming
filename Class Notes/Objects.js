let user = {
  theName: "Osama",
  theAge: 38,
  
  // dot notation
  sayHello: function () {
    return user.theName + ":" +  " Hello";  
  },
  
  // bracket notation
    sayHello2: function () {
    return user["theName"] + ":" +  " Hello";  
  }
};
 
console.log(user.sayHello());
console.log(user.sayHello2());


const contact = {};
contact.email =  "RonaldSMurphy@freepost.org";
 
console.log(contact);
 
delete contact.email ;
console.log(contact);


let userTwo= {
 
  //attributes
  userName: "N",
  userAge:20,
  //methods
  sayHello: function() {
    return this.userAge*2;
  }
  };
  
  console.log(userTwo);
  console.log("Dot Notation: ", userTwo.userAge);
  console.log("Bracket Notation: ", userTwo["userAge"])
  console.log(user.sayHello());
  
  
  let contact = {
      email_1: "RonaldSMurphy@freepost.org",
      email_2: "rsmurphy@briazz.com",
      email_3: "email@email.com"
  };
  for(let i=1; i<=Object.keys(contact).length; i++) {
      let key = "email_" + i;
      console.log(key);
      console.log(contact[key]);
  }
  

  let contact1 = {
    tel: 90277741111
    };
     
     
    let contact2 = {
    tel: 90277741111
    };
    
    console.log(contact1 === contact2)
    
    let contact3 = contact2
    
    console.log("contact3:", contact3)
    console.log(contact3 == contact2)
    
    contact2.tel = 9999
    console.log("contact3: ", contact3)
    