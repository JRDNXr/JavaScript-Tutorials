// The typeof operator returns the type of a variable or expression (ints).

let exampleText = "JRDN";

let type_of_variable = typeof(exampleText);

console.log(type_of_variable); // Output | string


let exampleNum = 67;

type_of_variable = typeof(exampleNum);

console.log(type_of_variable); // Output | number

console.log();



// We can also evaluate expressions.

exampleNum = (50 + 50);

type_of_variable = typeof(exampleNum);

console.log(type_of_variable); // Output | number


exampleText = "Today has been a great day!";

type_of_variable = typeof(exampleText);

console.log(type_of_variable); // Output | string

console.log();



// typeof for an Iterator.
const myArray = [1, 2, 3];

const myArrayIterator = myArray[Symbol.iterator]();

console.log("What is an Iterator?: " + typeof(myArrayIterator)); // Output | What is an Iterator?: object


// typeof for a Set.
const mySet = new Set([]);

console.log("What is a Set?: " + typeof(mySet)); // Output | What is a Set?: object


// typeof for a Map.
const myMap = new Map([]);

console.log("What is a Map?: " + typeof(myMap)); // Output | "What is a Map?: object