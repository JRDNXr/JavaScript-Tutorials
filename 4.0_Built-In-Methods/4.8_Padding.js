
let myString = "1000"; // Length is 4.

// The method padStart() adds a padding to the beginning of a String.
// The first paramater specifies the total String length to be outputted. Since "myString" length is 4, that means 7 - 4 = 3.
// This means that there will only be 3 "g" characters padded to the beginning of myString.
let myString_padStart = myString.padStart(7, "g");

console.log(myString_padStart); // Output || ggg1000



// The method padEnd() adds a padding to the end of a String.
// The same rules apply from padStart().
let myString_padEnd = myString.padEnd(7, "q");

console.log(myString_padEnd); // Output || 1000qqq