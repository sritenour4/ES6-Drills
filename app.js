/* Template literals and default parameters value */

function favMovie(name = 'Tommy Wiseau', movie = 'The Room') {
    console.log(`My name is ${name} and my favorite movie is ${movie}.`);
}

favMovie('Shannon Ritenour', 'LOTR')
favMovie();


/* Arrow functions */

// let favMovie = (name = 'Tommy Wiseau', movie = 'The Room') => {
//     console.log(`My name is ${name} and my favorite movie is ${movie}.`);
// }

// Use the shorthand "concise body" syntax for this arrow function so that the console.log statement is on the same line as the arrow.
// let favMovie = (name = 'Tommy Wiseau', movie = 'The Room') => console.log(`My name is ${name} and my favorite movie is ${movie}.`);

// favMovie();

// When a full name is passed to the function, the function should return the first name.
let getFirstName = (fullName) => {
    const name = fullName.split(' ');
    console.log(name[0]);
};

getFirstName('Shannon Ritenour');

// Create a second arrow function called getFirstNameConcise using the concise body syntax
const fullName = 'Shannon Ritenour';
const name = fullName.split(' ');

let getFirstNameConcise = (fullName) => console.log(name[0]);

getFirstNameConcise();


// Create a new function named doMath that will take in two parameters and return an object literal. 
// It should have two properties, the exponent result (x^y) and the product of the two numbers. (the curly braces of the object must be wrapped in parenthesis)
let doMath = (num1, num2) => ({
    exponent: Math.pow(num1, num2),
    product: num1 * num2,     
});

let result = doMath(3, 5);
// Log each property using a template literal.
console.log(`${result.exponent} ${result.product}`);


/* Spread Syntax */

// Write a function that takes 3 parameters: name, location, favFood and logs them to the console (either separately or all at once using a template literal)
function displayPersonalDetails (name, location, favFood) {
    console.log(`My name is ${name}. I live in ${location}. My favorite food is ${favFood}.`)
}

let personalDetailsArray = ['John', 'Atlanta', 'pizza'];

// Using a spread operator, insert the values of the array into the function
displayPersonalDetails(...personalDetailsArray);

const myName = 'Shannon';

// Using spread syntax, create a variable in the function that takes the string you pass into the function and spreads it into an array
function spreadArray(str) {
    let chars = [...str];
    // Using a for loop, loop through the spread string and console log each value of the string
    for(let i = 0; i < chars.length; i++) {
        console.log(chars[[i]]);
    }    
}

spreadArray(myName);
