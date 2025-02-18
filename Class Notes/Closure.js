// when you have a function inside of a function


function myFunction() {
	document.write("<br>calling the function<br>");
  a = 4;
  document.write("A: " + a);
  document.write("<br>");
  return a * a;
}

a = 6;

document.write("A: " + a);
document.write("The result is: " + myFunction());
document.write("<br>");


// Initiate counter
let counter = 0;
// Function to increment counter
function add() {
  counter += 1;
  document.write("Counter: " + counter);
  document.write("<br>");
}
// Call add() 3 times
add();
add();
add();
// The counter should now be 3

for(var i = 0; i < 3; i++){
	const log = () =>{
  	console.log(i);
  }
  
  setTimeout(log, 100);
}

function counter2(){
  let count = 0;

  return function(){
    count++;
    document.write(count);
  }
}

const newvar = counter();

newvar();
newvar();