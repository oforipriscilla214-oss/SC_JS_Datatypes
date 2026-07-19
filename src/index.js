// TASK 1 & 2: DATATYPES AND USING TYPEOF
// JavaScript has different types of data.

// i. String (Text surrounded by quotes)
let country = "Ghana"; 

// ii. Number (Whole numbers or decimals, no quotes)
let age = 21; 
let price = 19.99; 

// iii. Boolean (True or false logical values, no quotes)
let isClassOver = false; 

// iv. Null (Intentional emptiness)
let emptyWallet = null; 

// TASK 2: Use the typeof function to check data types in the console
console.log(typeof country);     // Prints: string
console.log(typeof age);         // Prints: number
console.log(typeof isClassOver); // Prints: boolean
console.log(typeof emptyWallet); // Prints: object (This is a well-known JS bug, but it means null!)



// TASK 3: SIMPLE CALCULATIONS (MATH OPERATORS)

let x = 10;
let y = 3;

// i. Addition (+)
let sum = x + y;
console.log(sum); // Prints: 13

// ii. Subtraction (-)
let difference = x - y;
console.log(difference); // Prints: 7

// iii. Multiplication (*)
let product = x * y;
console.log(product); // Prints: 30

// iv. Division (/)
let quotient = x / y;
console.log(quotient); // Prints: 3.3333333333333335

// v. Remainder using Modulo (%)
// Explaining Modulo: How many times does 3 fit into 10? It fits 3 times (which is 9), with 1 left over.
let remainder = x % y;
console.log(remainder); // Prints: 1


// TASK 4 & 5: CONSOLE.LOG & STRING INTERPOLATION
// Task 4: Using console.log to print basic messages
console.log("Testing our VS Code connection to the browser console!");

// Task 5: Practice using string interpolation (backticks) to log from VS Code
let itemName = "Laptop";
let itemPrice = 1200;

console.log(`The price of the new ${itemName} is $${itemPrice}.`);
