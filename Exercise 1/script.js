// onload makes it so when the page is loaded, the function is applied. the function uses querySelector to query for h1, then select it and apply the style red
onload = function(){
    document.querySelector('h1').style.color='red';
}

// logging to console
console.log("This is my first JavaScript script!"); 

// writing text on the screen
document.write("<h1>ANNOYING ALERT</h1>");
document.write("making a new line");
document.write("<br>");
document.write("making a new line");
document.write("making a new line");

/*
When to Use var, let, or const?
1. Always declare variables
2. Always use const if the value should not be changed
3. Always use const if the type should not be changed (Arrays and Objects)
4. Only use let if you can't use const
5. Only use var if you MUST support old browsers.
*/

// per nadia's instructions, we will always be using let not var for this course

// x will be assigned 88 as the value
var x;
x = 55;
x = 88;

// initializing and declaring again to showcase that you can initialize var with the same name twice. this works with var, but not let
var x = 99;

console.log(x);

// you can put var in curly brackets, then log it outside of the scope of the brackets and it will work. however with const and let, it will cause an error
{
// initializing f
var f;
}

// declaring f
f = 30;
f = 'hello';

// datatype changing
let j;
j = 50;
j = 'hello';

console.log(f);
console.log(j);

// const declarations must be initialized. const means the value can never change
const z = 123;

// student id info mock

let st_ID = 102;
let st_Name = "Bob";
let st_Email = "bobemail@email.com";
let st_Active = true;
let st_Age = 10;

console.log("Student data");
console.log("Student ID: " + st_ID);
console.log("Student Name: " + st_Name);
console.log("Student Email: " + st_Email);
console.log("Student is Active?: " + st_Active);
// also works with a comma. putting a comma takes the actual value. putting a + makes it a string
console.log("Student Age: " , st_Age);



// The defer attribute is a boolean attribute.
// If the defer attribute is set, it specifies that the script is downloaded in parallel to parsing the page, and executed after the page has finished parsing.

// this will do the math and log it
let A = 2;
let B = 7.5;
console.log("addition: " , A + B);
console.log("subtraction: " , A - B);
console.log("division: " , A / B);
console.log("multiply: " , A * B);

// infinity is a declarable thing, needs to be a capital I or it doesn't work
let N3= Infinity;
console.log(N3);

// this logs infinity
console.log(10 / 0);