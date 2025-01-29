// 2. JavaScript File

    // Part 1: Variables and Constants

        // 1. Declare and initialize variable for user's age
            let userAge = 23;

        // 2. Declare and initialize constant for user's height.
            let userHeight = 5.9;

    // Part 2: Arrays

        // 1. Declare an array with three elements representing pet names
            const petNames = ["Olivia", "Weston", "Roxy"];
            console.log("initial petNames Array : ", petNames);

        // 2. Add a new element to the array using push() and remove the last element using pop()
            petNames.push("Loki");
            console.log("push(Loki) to petNames: ", petNames);
            petNames.pop();
            console.log("petNames.pop effect: ", petNames);

        // 3. Reverse the array and display the elements in the console
            petNames.reverse();
            console.log("petNames.reverse() effect: ", petNames);

    // Part 3: Objects

        // 1. Declare an object representing a car with properties like make, model, and year
            const car = {
                type:"Honda", 
                model:"Civic", 
                colour:"White"
            };
            console.log("initial car object: ", car);

        // 2. Update one of the object's properties
            car.colour = "Red";
            console.log("car.colour = Red effect: ", car);

        // 3. Add a new property to the object and log the updated object to the console
            car.year = 2025;
            console.log("car.year property added: ", car);

    // Part 4: Type Operations
            
            // 1. Use methods like slice(), indexOf(), and length on strings and arrays
                console.log("petNames.slice(1): ", petNames.slice(1));
                console.log("petNames, index of Roxy: ", petNames.indexOf("Roxy"));
                console.log("petNames, length of index 1: ", petNames[1], petNames[1].length);
