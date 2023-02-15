// Example of What your JS File in VS Code should look like


/*
	Remember!!! Once you’ve completed a problem,
	COMMENT OUT YOUR WORK before moving on to the next one.
	This makes it easier to read and debug the current 
	Solution you are working on.
*/


// I. Variables & Data Types
// A. Q + A
// 1. How do we assign a value to a variable?
//     - With the assignment operator ( = )

// 2. How do we change the value of a variable?
//     - By declaring with the keywords "var" & "let"
//     - By reassigning the value

// 3. How do we assign an existing variable to a new variable?
//     - By assigning the value of the new variable with the name of the existing variable
//     - let newVar = existingVar

// 4. Remind me, what are declare, assign, and define?
//     - declare is creating a variable using the keywords "var", "let", & "const"
//     - assign is giving the variable a value with the assignment operator ( = )
//     - define is declaring AND assigning

// 5. What is pseudocoding and why should you do it?
//     - fake code, informal way of coding that explains in a more understandable manner what you want the code to do without all of the strict syntax computer language rules
//     - because it allows you to plan instructions which follow a logical pattern, without including all of the technical details

// 6. What percentage of time should be spent thinking about how you're going to solve a problem vs actually typing in code to solve it?
//     - 80% ?

// B. Strings
// 1. Create a variable called firstVariable
    
    var firstVariable;

// 2. Assign it the value of the string "Hello World"
    
    var firstVariable = "Hello World";
    // console.log(firstVariable);

// 3. Change the value of this variable to some number

    var firstVariable = 10;
    // console.log(firstVariable);

// 4. Store the value of firstVariablein a new variable called secondVariable

    var secondVariable = firstVariable;
    // console.log(secondVariable);

// 5. Change the value of secondVariableto any string.

    var secondVariable = "Tuesday";
    // console.log(secondVariable);

// 6. What is the value of firstVariable?

    10

// 7. Create a variable called yourName and set it equal to your name as a string. Then, write an expression that takes the string "Hello, my name is " and the variable yourName so that it returns a new string with them concatenated. ex: Hello, my name is Jean Valjean

    var yourName = "Myron Ingram";
    "Hello, my name is " + yourName
    // console.log(yourName);

// C. Booleans
// Using the provided variable definitions, replace the blanks so that all log statements print true in the console. Answers should be all be valid JS syntax and not weird things that don't make sense but happen to print true to the console

const a = 4;
const b = 53;
const c = 57;
const d = 16;
const e = 'Kevin';

console.log(a < b);
console.log(c > d);
console.log('Name' === 'Name');

// FOR THE NEXT TWO, USE ONLY && OR ||
/*H*/ console.log(true || false);
/*H*/ console.log(false || false || false || false || false || true);
/*H*/ console.log(false === false)
/*H*/ console.log(e === 'Kevin');
/*H*/ console.log(a + b == c); // note: a < b < c is NOT CORRECT (and is not a valid JS expression, think about using other math operations)
/*H*/ console.log(a * a == d); // note: the answer is a simple arithmetic equation, not something "weird"
console.log(48 == '48');

// D. The Farm
// 1. Declare a variable animal. Set it to be either "cow" or something else

    let animal = "cow";

// 2. Write code that will print out "mooooo" if the it is equal to cow

    if (animal === "cow") { console.log("mooooo");}

// 3. Change your code so that if the variable animal is anything other than a cow, it will print "Hey! You're not a cow."

    if (animal === "cow") { 
        console.log("mooooo");
    } else { 
        console.log("Hey! You're not a cow.");
    }

// 4. Commit

// E. Driver's Ed
// 1. Make a variable that holds a person's age; be semantic.

    let age = 20;

// 2. Write code that will print out "Here are the keys!", if the age is 16 years or older, or, if the age is younger than 16, a message should print "Sorry, you're too young."

    if (age >= 16) {
        console.log("Here are the keys!");
    } else {
        console.log("Sorry, you're too young.");
    }
//_____________________________________________________________






// II. Loops
// Remember: USE let when you initialize your for loops!

// This is GOOD: for(let i = 0; i < 100; i++)

// This is NO GOOD: for(i = 0; i < 100; i++)

// A. The Basics
// 1. Write a loop that will print out all the numbers from 0 to 10, inclusive

    for (let i = 0; i <= 10; i++) {
        console.log(i);
    }

// 2. Write a loop that will print out all the numbers from 10 up to and including 400

    for (let i = 10; i <= 400; i++) {
        console.log(i);
    }    

// 3. Write a loop that will print out every third number starting with 12 and going no higher than 4000

    for (let i = 12; i <= 4000; i += 3) {
        console.log(i);
    }

// B. Get even
// 1. Print out the numbers that are within the range of 1 - 100

    for (let i = 1; i <= 100; i++) {
        console.log(i);
    }

// 2. Adjust your code to add a message next to even numbers only that says: "<-- is an even number"

    for (let i = 1; i <= 100; i++) {

        if (i % 2 === 0) {
            console.log(i + " <-- is an even number");
        } else {
            console.log(i);
        }
    }

// C. Give me Five
// 1. For the numbers 0 - 100, print out "I found a number. High five!" if the number is a multiple of five
//    Example Output: 
//    I found a 5. High five! 
//    I found a 10. High five!

    for (let i = 0; i <= 100; i++) {

        if (i % 5 === 0 && i > 0) {
            console.log("I found a " + i + ". High five!");
        }
    }

// 2. Add to the code from above to print out "I found a number. Three is a crowd" if the number is a multiple of three
// Example Output:

// I found a 3. Three is a crowd
// I found a 5. High five!
// I found a 6. Three is a crowd
// I found a 9. Three is a crowd
// I found a 10. High five!

    for (let i = 0; i <= 100; i++) {

        if (i % 5 === 0 && i > 0) {
            console.log("I found a " + i + ". High five!");
        } 
        else if (i % 3 === 0 && i > 0) {
            console.log("I found a " + i + ". Three is a crowd");
        }
        else if (i % 5 === 0 && i % 3 === 0 && i > 0) {
            console.log();
        }
    }
    
// 3. For numbers divisible by both three and five, be sure your code prints both messages


    for (let i = 0; i <= 100; i++) {
    
        let multOfFive = "I found a " + i + ". High five!";
        let multOfThree = "I found a " + i + ". Three is a crowd";

        if (i % 5 === 0 && i % 3 === 0 && i > 0) {
            console.log(multOfFive + " " + multOfThree);
        }
        else if (i % 5 === 0 && i > 0) {
            // console.log("I found a " + i + ". High five!");
            console.log(multOfFive);
        } 
        else if (i % 3 === 0 && i > 0) {
            // console.log("I found a " + i + ". Three is a crowd");
            console.log(multOfThree);
        }
        
    }
// D. Savings account
// 1. Write code that will save the sum of all the numbers between 1 - 10 to a variable called bank_account. Check your work! Your bank_account should have $55 in it.

    for (let i = 1; i <= 10; i++) {

        let bank_account = (i * (i + 1)) / 2;

        // console.log(bank_account);
    }

// 2. You got a bonus! Your pay is now doubled each week. Write code that will save the sum of all the numbers between 1 - 100 multiplied by 2.
// Check your work! Your bank_account should have $10,100 in it.

    for (let i = 1; i <= 100; i++) {

        let bank_account = (i * (i +1)) / 2;

        // console.log(bank_account * 2);
    }

//_____________________________________________________________








// III. Arrays & Control Flow
// A. Talk about it: -------------------------------------------------------------------------------------
// 1. What are the things in an array called?
//     - Elements
// 2. Do Arrays guarantee those things will be in order?
//     - No
// 3. What real-life thing could you model with an array?
//     - 

// B. Easy Does It ---------------------------------------------------------------------------------------
// 1. Create an array that contains three quotes and store it in a variable called quotes

const quotes = ["", "", ""];

console.log(quotes);

// C. Accessing elements ---------------------------------------------------------------------------------
// Given the following array 
const randomThings = [1, 10, "Hello", true];

// How do you access the 1st element in the array?

console.log(randomThings[0]);

// Change the value of "Hello"to "World"

randomThings[2] = "World";

// Check the value of the array to make sure it updated the array. How? Why, yes! console.log();

console.log(randomThings[2]);

// D. Change values ------------------------------------------------------------------------------------
// Given the following array 
const ourClass = ["Salty", "Zoom", "Sardine", "Slack", "Github"];

// 1. What would you write to access the 3rd element of the array?

console.log(ourClass[2]);

// 2. Change the value of "Github" to "Octocat"

ourClass[4] = "Octocat";

console.log(ourClass[4]);

// 3. Add a new element, "Cloud City" to the array

// ourClass[5] = "Cloud City"; 5 is the next element

ourClass.push("Cloud City"); // .push adds it to the end of the array. no counting elements needed

console.log(ourClass);

// E. Mix It Up ----------------------------------------------------------------------------------------
// Note: You don't really need .splice()for these. You could use it, but there are simpler array methods that are more appropriate.

// Given the following array: 

const myArray = [5, 10, 500, 20]

// 1. Add the string "Aegon"to the end of the array. Add another string of your choice to the end of the array.

myArray.push("Aegon", "Rhaenyra");

console.log(myArray);

// 2. Remove the 5 from the beginning of the array.

myArray.shift();

console.log(myArray);

// 3. Add the string "Bob Marley"to the beginning of the array.

myArray.unshift("Bob Marley");

console.log(myArray);

// 4. Remove the string of your choice from the end of the array.

myArray.pop();

console.log(myArray);

// 5. Reverse this array using Array.prototype.reverse(). Did you mutate the array? What does mutate mean? Did the .reverse()method return anything?

console.log(Array.prototype.reverse(myArray));


// F. Biggie Smalls
// Create a variable that contains an integer.

// Write an if ... else statement that:

// console.log()s "little number" if the number is entered is less than 100
// G. Monkey in the Middle
// H. What's in Your Closet?
//_____________________________________________________________








// IV. Functions
// A.
// B.
// C.
// D.
// E.
// F.
// G.
// H.
//_____________________________________________________________






// V. Objects
// A.
// B.
// C.
// D.
// E.
// F.
// G.
//_____________________________________________________________


// Extra
