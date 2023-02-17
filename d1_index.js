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

    // for (let i = 10; i <= 400; i++) {
    //     console.log(i);
    // }    

// 3. Write a loop that will print out every third number starting with 12 and going no higher than 4000

    // for (let i = 12; i <= 4000; i += 3) {
    //     console.log(i);
    // }

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


// F. Biggie Smalls ------------------------------------------------------------------------------------
// Create a variable that contains an integer.

let num = 8;

// Write an if ... else statement that:

// 1. console.log()s "little number" if the number is entered is less than 100

if (num < 100) {
    console.log("little number");
}

// 2. console.log()s big number if the number is greater than or equal to 100.

if (num < 100) {
    console.log("little number");
} else {
    console.log("big number");
};

// G. Monkey in the Middle ----------------------------------------------------------------------------
// Write an if ... else if ... else statement:
// 1. console.log()little number if the number entered is less than 5.

if (num < 5) {
    console.log("little number");
} else if (num > 10) {
    console.log("big number");
} else {
    console.log("monkey");
}

// H. What's in Your Closet? --------------------------------------------------------------------------
// Below, we've given you examples of Kristyn and Thom's closets modeled as data in JavaScript.
const kristynsCloset = [
    "left shoe",
    "cowboy boots",
    "right sock",
    "Per Scholas hoodie",
    "green pants",
    "yellow knit hat",
    "marshmallow peeps"
  ];

// Thom's closet is more complicated. Check out this nested data structure!!
const thomsCloset = [
    [
      // These are Thom's shirts
      "grey button-up",
      "dark grey button-up",
      "light blue button-up",
      "blue button-up",
    ],[
      // These are Thom's pants
      "grey jeans",
      "jeans",
      "PJs"
    ],[
      // Thom's accessories
      "wool mittens",
      "wool scarf",
      "raybans"
    ]
  ];

// 1. What's Kristyn wearing today? Using bracket notation to access items in kristynsCloset, log the sentence "Kristyn is rocking that " + the third item in Kristyn's closet + " today!" to the console.

console.log("Kristyn is rocking that " + kristynsCloset[2] + " today!");

// 2. Kristyn just bought some sweet shades! Add "raybans" to her closet after "yellow knit hat".

kristynsCloset.splice(6, 0, "raybans");

console.log(kristynsCloset);

// 3. Kristyn spilled coffee on her hat... modify this item to read "stained knit hat"instead of yellow.

kristynsCloset[5] = "stained knit hat";

console.log(kristynsCloset[5]);

// 4. Put together an outfit for Thom! Using bracket notation, access the first element in Thom's shirts array.

console.log(thomsCloset[0][0]);

// 5. In the same way, access one item from Thom's pants array.

console.log(thomsCloset[1][1]);

// 6. Access one item from Thom's accessories array.

console.log(thomsCloset[2][2]);

// 7. Log a sentence about what Thom's wearing. Example: "Thom is looking fierce in a grey button-up, jeans and wool scarf!"

console.log("Thom is rocking a crisp " + thomsCloset[0][0] + " with some fresh " + thomsCloset[1][1] + " and a mean pair of " + thomsCloset[2][2] + " today!");

// 8. Get more specific about what kind of PJs Thom's wearing this winter. Modify the name of his PJ pants to Footie Pajamas.

thomsCloset[1][2] = "Footie Pajamas";

console.log(thomsCloset[1][2]);
//_____________________________________________________________








// IV. Functions
// A. ------------------------------------------------------------------------------------------------------
// Do you think you could write a function called printGreeting with a parameter name that returns a greeting with the argument interpolated into the greeting?

// Like so?

// console.log(printGreeting("Slimer"));
// => Hello there, Slimer!

// You think you could? I think so too. Feel free to skip this problem, because you've already done it. If you've done the problem twice, read entire problems carefully before doing them from now on.


function printGreeting(name) {
    console.log("Hello there, " + name + "!");
}

printGreeting("Slimer");

// B. ----------------------------------------------------------------------------------------------------
// Write a function printCoolthat accepts one parameter, name as an argument. The function should print the name and a message saying that that person is cool.

// console.log(printCool("Captain Reynolds"));
// => "Captain Reynolds is cool";

function printCool(name) {
    console.log(name + " is cool!");
}

printCool("Captain Reynolds");

// C. -----------------------------------------------------------------------------------------------------
// Write a function calculateCube that takes a single number and prints the volume of a cube made from that number.

// console.log(calculateCube(5));
// => 125

function calculateCube(num1) {
    console.log(num1 ** 3);
}

calculateCube(5);

// D. ------------------------------------------------------------------------------------------------------
// Write a function isVowel that takes a character (i.e. a string of length 1) and returns true if it is a vowel, false otherwise. The vowel could be upper or lower case. Test your function on every vowel and make sure it's working. In general, when you write functions, take a minute to test them with different values to make sure they behave the way you want.

// console.log(isVowel("a"));
// => true

function isVowel(char) {
    char = char.toLowerCase()
    if (char === "a" || char === "e" || char === "i" || char === "o" || char === "u") {
       return true; 
    } else {
        return false;
    }
}

console.log(isVowel("E"));

// E. ----------------------------------------------------------------------------------------------------
// Write a function getTwoLengths that accepts two parameters (strings). The function should return an array of numbers where each number is the length of the corresponding string.

// console.log(getTwoLengths("Hank", "Hippopopalous"));
// => [4, 13]

function getTwoLengths(str1, str2) {
    return [str1.length, str2.length]
}

console.log(getTwoLengths("Hank", "Hippopopalous"));

// F. --------------------------------------------------------------------------------------------------
// Write a function getMultipleLengths that accepts a single parameter as an argument: an array of strings. The function should return an array of numbers where each number is the length of the corresponding string.

// console.log(getMultipleLengths(["hello", "what", "is", "up", "dude"]));
// => [5, 4, 2, 2, 4]

// arrayOfStrings.foreach(function(arrayOfStrings) {
//     return arrayOfStrings.length
// })

// function getMultipleLengths(arrayOfStrings) {
//     return [arrayOfStrings.length]
// }

// G. --------------------------------------------------------------------------------------------------
// Define a function maxOfThree that takes three numbers as arguments and returns the largest of them. If all numbers are the same, it doesn't matter which one is returned. If the two largest numbers are the same, one of them should be returned. Be sure to test it with larger values in each of the three locations.

// console.log(maxOfThree(6, 9, 1));
// => 9

// Did you use Google and find Math.max()? If so, great job! Very resourceful—keep looking stuff up! However, for this particular question, we need you to submit a solution that does not use Math.max().

function maxOfThree(num1, num2, num3) {
    if (num1 > num2 && num1 > num3) {
        return num1
    } 
    else if (num2 > num1 && num2 > num3) {
        return num2
    }
    else {
        return num3
    }
}

console.log(maxOfThree(66, 98, 10));

// H. -------------------------------------------------------------------------------------------------
// Write a function printLongestWord that accepts a single argument, an array of strings. The method should return the longest word in the array. In case of a tie, the method should return the word that appears first in the array.

// console.log(printLongestWord(["BoJack", "Princess", "Diane", "a", "Max", "Peanutbutter", "big", "Todd"]));
// => "Peanutbutter"

function printLongestWord(arg) {
    let longestWord = arg[0] // selects BoJack
    let longestWordLength = arg[0].length // gets the number of letters for BoJack

    
    arg.forEach(currentElement => {
        previousLength = longestWordLength
        longestWordLength = Math.max(longestWord.length, currentElement.length)
        if (previousLength !== longestWordLength) {
            longestWord = currentElement
        }
    });
    return longestWord
}

console.log(printLongestWord(["BoJack", "Princess", "Diane", "a", "Max", "Peanutbutter", "big", "Todd"]));

//_____________________________________________________________






// V. Objects
// A. Make a user object -------------------------------------------------------------------------------
// 1. Create an object called user.

// 2. Write in to the object the key-value pairs for name, email, age, and purchased. Set the value of purchasedto an empty array []. Set the other values to whatever you would like.

const user = {
    name: "Trey",
    email: "trey@email.com",
    age: 30,
    purchased: [],
}

console.log(user);

// B. Update the user -----------------------------------------------------------------------------------
// 1. Our user has changed his or her email address. Without changing the original user object, update the email value to a new email address.

user.email = "trey30@newemail.com"

console.log(user.email);

// 2. Our user has had a birthday! Without changing the original user object, increment the age value using the postfix operator. Hint: age++

user.age = user.age += 1;

console.log(user.age);

// C. Adding keys and values ----------------------------------------------------------------------------
// You have decided to add your user's location to the data that you want to collect.

// 1. Without changing the original user object, add a new key location to the object, and give it a value or some-or-other location (a string).

user["location"] = "Trenton";

console.log(user);

// D. Shopaholic! ---------------------------------------------------------------------------------------
// 1. Our user has purchased an item! They have purchased some "carbohydrates". Using .push(), add the string "carbohydrates" to the purchased array.

user.purchased.push("carbohydrates");

console.log(user.purchased);

// 2. Our user has purchased an item! They have purchased some "peace of mind". Using .push(), add the string "peace of mind" to the purchased array.

user.purchased.push("peace of mind");

console.log(user.purchased);

// 3. Our user has purchased an item! They have purchased some "Merino jodhpurs". Using .push(), add the string "Merino jodhpurs" to the purchased array.

user.purchased.push("Merino jodhpurs");

console.log(user.purchased);

// 4. Console.log just the "Merino jodhpurs" from the purchased array.

console.log(user.purchased[2]);

// E. Object-within-object

// 1. Write a friend object into your user object and give the friend a name, age, location, and purchased array (empty for now)

user.friend = {
    name: "Deuce",
    age: 22,
    location: "Denver",
    purchased: []
};

console.log(user);

// 2. Console.log just the friend's name

console.log(user.friend.name);

// 3. Console.log just the friend's location

console.log(user.friend.location);

// 4. CHANGE the friend's age to 55

user.friend.age = 55;

console.log(user.friend.age);

// 5. The friend has purchased "The One Ring". Use .push() to add "The One Ring" to the friend's purchased array.

user.friend.purchased.push("The One Ring");

console.log(user.friend.purchased);

// 6. The friend has purchased "A latte". Use .push() to add "A latte" to the friend's purchased array.

user.friend.purchased.push("A latte");

console.log(user.friend.purchased);

// 7. Console.log just "A latte" from the friend's purchased array.

console.log(user.friend.purchased[1]);

// F. Loops
// 1. Write a for loop that iterates over the User's purchased array (NOT the friend's purchased array), and prints each element to the console.

for (let i = 0; i < user.purchased; i++);

// console.log(user.purchased[i]);

// G.

function updateUser () {
    user.age++
    user.name = user.name.toUpperCase()
}

updateUser(user)
console.log(user);


function oldAndLoud(person) {
    person.age++
    person.name = person.name.toUpperCase()
}

//_____________________________________________________________


// Extra
