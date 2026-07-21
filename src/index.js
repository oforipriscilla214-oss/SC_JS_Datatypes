// TASK 1 & 2: DATATYPES AND USING TYPEOF
// JavaScript has different types of data.

// i. String (Text surrounded by quotes)
const myString = "Hello Kitty";
let myZazzy = "Alex";
let myCat = "Mittens";
let myDog = "Buddy";
let randomNo = "8;" //This is a string
let status = "true"; //This is a string


// ii. Number (Whole numbers or decimals, no quotes)
let no1 =8;

// iii. Boolean (True or false logical values, no quotes)
let available = true; // This is a boolen value
available = false; // This is a boolean value

// iv. Null (Intentional emptiness) 
let empty = "";

console.log(myZazzy);
myZazzy = "Mahama";
console.log(myZazzy); // output - Mahama
let userNum = prompt("Give me a number from 1 - 100");
console.log(userNum); // Output - 89
console.log(typeof(userNum)); // output - Number
let myNum = 10;
console.log(userNum + myNum); //99

// TASK 2: Use the typeof function to check data types in the console
console.log(typeof(myDog)); //output or print: string
console.log(typeof(8)); //output or print: number


// TASK 3: SIMPLE CALCULATIONS (MATH OPERATORS)
let x = 25;
let y = 50;


// i. Addition (+)
let addNumbers = x + y;
console.log(addNumbers); // output - 75
console.log(x+y); //output - 75

// ii. Subtraction (-)
console.log(y-x); // output - 25

// iii. Multiplication (*)
let productNumbers =x * y;
console.log(productNumbers); //output to print: 1250
console.log(x*y); //output to print: 1250


// iv. Division (/)
let divideNumbers = y/x;
console.log(divideNumbers); //output is 2

// v. Remainder using Modulo (%)
// Explaining Modulo: How many times does 3 fit into 10? It fits 3 times (which is 9), with 1 left over.
let remainder = y % x;
console.log(remainder);//output 0

x = 3;
y = 5;

remainder = y % x;
console.log(remainder); // 2
addNumbers = x + y;
productNumbers = x * y;
divideNumbers = y / x;
remainder = y % x;

// TASK 4 & 5: CONSOLE.LOG & STRING INTERPOLATION
// Task 4: Using console.log to print basic messages
console.log("Testing our VSC")

// Task 5: Practice using string interpolation (backticks) to log from VS Code
console.log(`In todays class we learnt how to add divide multiply substact and find the remainder of 2 numbers. 
    Given that x is ${x} and y is ${y}, the sum will be ${addNumbers}, the difference wil be${y-x}, the 
    product will be${divideNumbers}, the quotient will be ${divideNumbers} and the remainder will be${remainder} `);
