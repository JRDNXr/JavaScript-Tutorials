// The ??= Operator
// Also known as the "Nullish coalescing assignment operator".

// If the first value is undefined or null, the second value is assigned.
let x = 10;
x ??= 5;

console.log("?? Operator Example 1: " + x); // Output | ?? Operator Example 1: 10

let y = null;
y ??= 7;

console.log("?? Operator Example 2: " + y); // Output | ?? Operator Example 2: 7

console.log();



// The &&= Operator
// Also known as the "Logical AND assignment operator".

// If the first value is true, the second value is assigned.

// You can get true values by initializing the variable with a value OTHER than "false" or "null". The variable MUST hold a value in
// order for it to be considered true.

// Literals (numbers and Strings) are all treated as true, since they contain a value.
let j = 60;
j &&= 80;

console.log("The && Operator Example 1: " + j); // Output | The && Operator Example 1: 80

j = "Text";
j &&= "Blank";

console.log("The && Operator Example 1.1: " + j); // Output | The && Operator Example 1.1: Blank

// If you declare k without initializing it, the console will output "undefined" since the variable holds no value.
let k = false;
k &&= 500;

console.log("The && Operator Example 2: " + k); // Output | The && Operator Example 2: false

console.log();



// The ||= Operator
// Also known as the "Logical OR assignment operator".

// If the first value is false, the second value is assigned.

// You can get false values by initializing the variable as "false" or "null". Not initializing a variable also counts as
// false (ie. let abc;).
let a = 20;
a ||= 15;

console.log("The || Operator Example 1: " + a); // Output | The || Operator Example 1: 20

let b = false;
b ||= 30;

console.log("The || Operator Example 2: " + b); // Output | The || Operator Example 2: 30

let c = null;
c ||= 101;

console.log("The || Operator Example 3: " + c); // Output | The || Operator Example 3: 101

let t = 20;
t ^= 5;

console.log(t);