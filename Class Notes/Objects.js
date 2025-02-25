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