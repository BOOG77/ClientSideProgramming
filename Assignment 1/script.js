// Part 1: Variables, Data Types & Type Casting

    /* Declare three variables:
        studentName (string)
        studentAge (number)
        isEnrolled (boolean)
    */
        let studentName = "Dawson";
        let studentAge = 23;
        let isEnrolled = true;

    // Display these values on the webpage using document.write().    
        document.write("studentName = ", studentName, "<br>studentAge = ", studentAge, "<br>isEnrolled = ", isEnrolled);

    // Convert studentAge into a string
        document.write("<br>typeof studentAge = String?: ", typeof(studentAge));
        document.write("<br>**converting studentAge to a string**");
        studentAge = String(studentAge);
        document.write("<br>typeof studentAge = String?: ", typeof(studentAge));

// Part 2: Operators & User Interaction
    // Ask the user to enter two numbers using prompt()
    // Convert the inputs to numbers
        let numOne = Number(prompt("Enter a number:"));
        let numTwo = Number(prompt("Enter a number:"));
        document.write("<p style=\"color:green;font-size: 200%;\">Thank you for your submission of: ", numOne , " & ", numTwo, "</p>");

    // Perform operators
    document.write("Applying operators to your numbers: <br>");
    document.write(numOne , " + ", numTwo, " = ", numOne + numTwo, "<br>");
    document.write(numOne , " - ", numTwo, " = ", numOne - numTwo, "<br>");
    document.write(numOne , " * ", numTwo, " = ", numOne * numTwo, "<br>");
    document.write(numOne , " / ", numTwo, " = ", numOne / numTwo, "<br>");
    document.write(numOne , " % ", numTwo, " = ", numOne % numTwo, "<br>");

// Part 3: Conditional Execution
    // Ask the user to enter their age.
    let userAge;
    document.write("<p style=\"font-size: 150%;\">Enter your age: <p>");
    document.write("Age: <input type=\"number\" id=\"userAge\">");
    document.write("<p style=\"color:green\" id=\"voteEligible\"></p>")

    // button
    // https://www.w3schools.com/jsref/dom_obj_text.asp
    // https://stackoverflow.com/questions/1947263/using-an-html-button-to-call-a-javascript-function
    document.write("<input type=\"button\" onclick=\"getAge();\" value=\"Submit\"></button>")

    // Function used for dynamic age submitting
    function getAge(){
        // https://stackoverflow.com/questions/11563638/how-do-i-get-the-value-of-text-input-field-using-javascript
        userAge = document.getElementById("userAge").value;
        if(userAge >= 18){
            // https://stackoverflow.com/questions/68480067/javascript-button-leads-to-another-page
            document.getElementById('voteEligible').innerText = "You are elegible to vote!";

            // https://www.geeksforgeeks.org/how-to-change-the-color-of-html-element-in-javascript/
            voteEligible.style.color = "green";
        }
        else{
            document.getElementById('voteEligible').innerText = "You are not eligible to vote yet.";
            voteEligible.style.color = "red";
        }
    };

// Part 4: Loops

    // For Loop: Print numbers from 1 to 10 on the webpage.
    document.write("<p style=\"font-size:150%\">Printing 1-10 on the webpage</p>")
    for(let i = 1; i < 11; i++){
        document.write(i);
        document.write("<br>");
    };

    let numPrompt = 0;
    while(numPrompt < 10){
        numPrompt = prompt("Enter a number greater than 10");
    };

    document.write("<p style =\"font-size:150%\">Your greater than 10 number:</p>")
    document.write("<p>Thank you for your submission of ", numPrompt + "</p>");



