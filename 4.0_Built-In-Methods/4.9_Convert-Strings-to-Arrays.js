
const myString = "Red,Orange,Yellow,Green,Blue,Violet";

// A String can be converted to an Array using the split() method.
//  - string.split(",")   - Split based on commas
//  - string.split(" ")   - Split based on spaces
//  - string.split("|")   - Split based on pipes

// This will split the array by looking for commas (,).
const myArray = myString.split(",");

console.log(myArray[3]); // Output || Green


// NOTE: If there are spaces in the String like so:
//       myString = "Red, Orange, Yellow";
//
//       And we perform the split() above, the whitespace before "Orange" and before "Yellow" will also be put into the array.
//
//       If you are converting a String to an Array and do not want spaces in the array, you must ensure that the original
//       String does not have spaces. You can remove whitespace in Tutorial 4.7.


// NOTE: If the separator is omitted, the returned array will contain the whole string at index 0.

// NOTE: If the separator is "", the returned array will be an array of single characters.