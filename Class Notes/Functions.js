// function
function helloHello(){
	document.write("hello hello <br>");
  document.write("end of hello hello <br>");
}

helloHello();

function helloAgain(name){
	// a way of combining the text with variables
	document.write(`Nice to meet you ${name}!<br>`);
}

helloAgain("Dawson");

function addition(a, b){
	let result = a + b;
	return result;
}

document.write(addition(3,4));

// back ticks allow this to happen, double quotes give an error
let v = `<br>I think I like Java more`;

document.write(v);