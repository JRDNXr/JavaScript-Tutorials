// There are several types of Operators in JavaScript:
//      - Arithmetic Operators
//      - Assignment Operators
//      - Comparison Operators
//      - Logical Operators
//      - Type Operators

let x = 6;
let y = 2;



//
// ARITHMETIC OPERATORS
//

// You can use variables or number literals in some of these operations.

// Addition ( + )
let sum1 = x + y;
let sum2 = 25 + 50;

// We can concatenate Strings and variables using the + operator. Notice the difference on each line and how they look when run.
console.log("Additon " + "Statement 1: " + sum1); // Output | Addition Statement 1: 8
console.log("Additon Statement 2: " + sum2 + "\n"); // Output | Addition Statement 2: 75

// The "\n" in the second addition statement tells the console to add a "newline" after the statement is complete.
// Newline is computer code for "press ENTER". This allows us to space out the console.log's.
// You can also use a blank "console.log()" or "console.log("")" and it will have the same effect.

// Subtraction ( - )
let difference1 = x - y;
let difference2 = 50 - 30;

console.log("Subtraction Statement 1: " + difference1); // Output | Subtraction Statement 1: 4
console.log("Subtraction Statement 2: " + difference2 + "\n"); // Output | Subtraction Statement 2: 20

// Multiplication ( * )
let product1 = x * y;
let product2 = 4 * 16;

console.log("Multiplication Statement 1: " + product1); // Output | Multiplication Statement 1: 12
console.log("Multiplication Statement 2: " + product2 + "\n"); // Output | Multiplication Statement 2: 64

// Division ( / )
let quotient1 = x / y;
let quotient2 = 88 / 8;

console.log("Division Statement 1: " + quotient1); // Output | Division Statement 1: 3
console.log("Division Statement 2: " + quotient2 + "\n"); // Output | Division Statement 2: 11

// Exponentiation
let exponent1 = x ** y;
let exponent2 = 2 ** 3;

console.log("Exponentiation Statement 1: " + exponent1); // Output | Exponentiation Statement 1: 36
console.log("Exponentiation Statement 2: " + exponent2 + "\n"); // Output | Exponentiation Statement 2: 8

// Modulus (Division Remainder)
let remainder1 = x % y;
let remainder2 = 10 % 3;

console.log("Remainder Statement 1: " + remainder1); // Output | Remainder Statement 1: 0
console.log("Remainder Statement 2: " + remainder2 + "\n"); // Output | Remainder Statement 2: 1

// Increment (add)
console.log('Value of "x" before Increment: ' + x); // Output | Value of "x" before Increment: 6

let increment = x++;

console.log('Value of "x" after Increment: ' + x + "\n"); // Output | Value of "x" after Increment: 7

// Decrement (subtract)
console.log('Value of "y" before Increment: ' + y); // Output | Value of "y" before Increment: 2

let decrement = y--;

console.log('Value of "y" after Increment: ' + y); // Output | Value of "y" after Increment: 1



//
// ASSIGNMENT OPERATORS
//

x = y; // The right side becomes the same as the left.

x += y; // Short for x = x + y;

x -= y; // Short for x = x - y;

x *= y; // Short for x = x * y;

x /= y; // Short for x = x / y;

x %= y; // Short for x = x % y;

x **= y; // Short for x = x ** y;



//
// COMPARISON OPERATORS
//

/*
==      -   Equal to

===     -   Equal value and equal type

!=      -   Not equal to

!==     -   Not equal value or not equal type

>       -   Greater than

<       -   Less than

>=      -   Greater than or equal to

<=      -   Less than or equal to

?       -   Ternary operator
*/



//
// LOGICAL OPERATORS
//

/*
&&      -   And

||      -   Or

!       -   Not
*/



//
// TYPE OPERATORS
//

/*
typeof      -   Returns the type of a variable

instanceof  -   Returns true if an object is an instance of an object type
*/