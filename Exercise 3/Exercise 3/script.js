// Part 1: Arithmetic Operators
console.log("===Part 1 Start===");

    // Declare two variables, num1 and num2
        let num1 = 10;
        let num2 = 5;
    
    // Use arithmetic operators (+, -, *, /, %) to perform calculations. Display the results in the console
        console.log("The sum of " + num1 + " + " + num2 + " is ", (num1 + num2));
        console.log("The sum of " + num1 + " - " + num2 + " is ", (num1 - num2));
        console.log("The sum of " + num1 + " * " + num2 + " is ", (num1 * num2));
        console.log("The sum of " + num1 + " / " + num2 + " is ", (num1 / num2));
        console.log("The sum of " + num1 + " % " + num2 + " is ", (num1 % num2));

console.log("===Part 1 End===");  

// Part 2: Relational Operators
console.log("===Part 2 Start===");

    // Compare the two variables using relational operators (>, <, >=, <=, ===, !==). Log the results to the console
        console.log(num1 + " is greater than " + num2 + " = ", (num1 > num2));
        console.log(num1 + " is less than " + num2 + " = ", (num1 < num2));
        console.log(num1 + " is greater than or equal to " + num2 + " = " , (num1 >= num2));
        console.log(num1 + " is less than or equal to " + num2 + " = " , (num1 <= num2));
        console.log(num1 + " is equal to " + num2 + " = " , (num1 === num2));
        console.log(num1 + " is not equal to " + num2 + " = " , (num1 !== num2));

console.log("===Part 2 End===");

// Part 3: Logical Operators
console.log("===Part 3 Start===");

    // Create two boolean variables
        let isSunny = false;
        let isWeekend = true;

    // Use logical operators (&&, ||) to check combinations of conditions. Display the results in the console
        console.log("isSunny and isWeekend = true?: " , (isSunny === true && isWeekend === true));
        console.log("isSunny or isWeekend = true?: ", (isSunny === true || isWeekend === true));

console.log("===Part 3 End===");

// Part 4: Assignment Operators
console.log("===Part 4 Start===");

    // Declare a variable score and assign it a value
        let score = 0;
        console.log("Score: ", score);

    // Use assignment operators (+=, -=, *=) to modify the value. Log the updated values to the console.
        console.log("Modifying score by +5.")
        score += 5;
        console.log("Score: ", score);

        console.log("Modifying score by -3.");
        score -= 3;
        console.log("Score: ", score);

        console.log("Modifying score by *3");
        score *= 3;
        console.log("Score: ", score);

console.log("===Part 4 End===");

// Part 5: User Interaction
console.log("===Part 5 Start===");

    // Use the prompt method to capture user input for their name and age.
    let userName = prompt("Enter your name");
    let userAge = prompt("Enter your age");
    console.log("User's name: " + userName + " User's age: " + userAge);

console.log("===Part 5 End===");
    
