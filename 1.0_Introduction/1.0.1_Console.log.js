// We can manipulate JavaScript code within a console.log output. This page consists of many different methods of
// utilizing console.log.

// Attaching multiple strings (yes, a simpler method is to write it all together).
// We call this "concatenating" strings.
console.log("Hello" + ", " + "World!"); // Output | Hello, World!

// Appending a number to a String.
console.log("A Number: " + 7); // Output | A Number: 7

// Doing addition within a statement.
console.log(4 + 9); // Output | 13

console.log("What is 5 + 5?"); // Output | What is 5 + 5?
console.log("Answer: " + (5 + 5)); // Output | Answer: 10

// Don't confuse mathematical statements with concatenating. The (5 + 5) in brackets represent the mathematical addition.
// The + sign afterwards is a concatenating symbol. The rest is within quotes, so it is pure text.
console.log((5 + 5) + " * 5 = 50. Basic multiplication."); // Output | 10 * 5 = 50. Basic multiplication.