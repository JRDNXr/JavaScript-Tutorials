// Data Types describe what values a variable can hold. Their important for the system to know how to treat them as well,
// and what data they can expect that variable to hod.

// JavaScript has many Data Types.
//      - Strings (text)
//      - Numbers (known as Integers or ints)
//      - Boolean (true or false)
//      - Undefined, Null, & Empty
//      - Arrays (will learn later on)
//      - Objects (will learn later on)


// When dealing with an int (number) and a String, JavaScript will treat the whole line as a String.
// So when we concatenate the two together, we get a combined result.
let x = 14 + " Audi";

console.log(x); // Output | 14 Audi

// This line is the same as the above. This is also better programming practice.
let y = "14" + " Audi";

console.log(y); // Output | 14 Audi



// NOTE: JavaScript evaluates expressions from left to right.
// The expression below starts with an int and then a String.
// This means it will evaluate 30 + 40 first (ans. 70) and then concatenate 70 to the String " Audi".
let z = 30 + 40 + " Audi";

console.log(z); // Output | 70 Audi

// This expression starts with a String and then an int.
// This means it will evaluate the whole line as a String.
let a = "Audi " + 50 + 60;

console.log(a); // Output: Audi 5060

console.log();



// NOTE: JavaScript types are Dynamic. This means the same variable can hold different data types.
let b = "Test";
b = 52;

console.log(b); // Output | 52

console.log();



// Numbers can be written as is. However, large numbers can be written in scientific notation.
let num1 = 123e5;
let num2 = 123e-5;

console.log("First Number: " + num1); // Output | 12300000
console.log("Second Number: " + num2); // Output | 0.00123

console.log();



// Booleans have just 2 values - "True" and "False".
let BoolTrue = true;
let BoolFalse = false;

console.log(BoolTrue); // Output | true
console.log(BoolFalse); // Output | false

console.log();



// Undefined, Null, and Empty values are all different.
let undefined_Val; // Value is undefined and therefore the type is undefined.

let null_Val = null; // Value is null. This represents the "absence" of an OBJECT value.

let empty_Val = ""; // Value is an empty String. Therefore, the type is a String.

// You can empty any variable of its value by setting it to "undefined".
let numEx = 18;
let StringEx = "Blank";

numEx = undefined;
StringEx = undefined;

console.log(numEx); // Output | undefined
console.log(StringEx); // Output | undefined