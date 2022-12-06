
let myString = "1000"; // Length is 4.

// The method padStart() adds a padding to another String.
// The first paramater specifies the total String length to be outputted. Since "myString" length is 4, that means 7 - 4 = 3.
// This means that there will only be 3 "g" characters padded to the beginning of myString.
let myString_padded = myString.padStart(7, "g");

console.log(myString_padded); // Output || ggg1000