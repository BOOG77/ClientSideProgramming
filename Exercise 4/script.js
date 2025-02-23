studentName = "Nadia";  // student_name changed to studentName. meets typical naming conventions, and matches variable on line 6. quotes were missing around the string.
studentAge = "20"; // == changed to =
isEnrolled = true; // True changed to true so the datatype is actually a boolean

document.write("<h2>Student Info</h2>"); // semicolon missing
document.write("Name: " + studentName + "<br>"); // quotes missing around <br>
document.write("Age: " + studentAge); // student_age changed to studentAge
document.write("Enrolled: " + isEnrolled); // semicolon missing

let ageString = String(studentAge)
document.write("Age Type: ", typeof(ageString)); // missing , after string. brackets were missing in typeof(ageString)

num1 = prompt("Enter first number");
num2 = prompt("Enter second number");
total = num1 + num2; 

document.write("Sum: " + total)

userAge = prompt("Enter your age");
if (userAge == 18) { // assignment operator changed to comparison(= changed to ==)
    document.write("You can vote!"); 
} else { // unnecessary condition removed
    document.write("Sorry, you can't vote."); 
}

for (i = 1; i < 10; i++) 
    document.write(i)

let num; // variable needs to be assigned outside of the loops scope
while (num < 10) // missing brackets for condition 
    num = prompt("Enter a number greater than 10")

