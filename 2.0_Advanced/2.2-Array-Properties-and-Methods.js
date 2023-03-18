
// Arrays have properties and methods that allow us to maximize their functionality.

// length() - More detail in 4.4_String-Length.js
// sort()


const primaryColours = ["Red", "Yellow", "Blue", "Green"];
// INDEX #:               0       1         2
// LENGTH #:              1       2         3


// Index numbers and length numbers are different. Index starts at 0. We as humans start counting from 1. Length takes this
// into account and starts its counting from 1 as well.
console.log("Length of Array: " + primaryColours.length); // Output || Length of Array: 3


// GET THE LAST ELEMENT IN AN ARRAY
// We can use a combiation of indexing and length() to do this.

// The length of the array is 3. We subtract 1, giving us 2. The last element in our array has an index value of 2.
let lastElementNum = primaryColours.length - 2; // VALUE = 2

// primaryColours[2] evaluates to Blue. This is how we get the last element.
console.log("Last Element in Array: " + primaryColours[lastElementNum]);  // Output || Last Element in Array: Blue

// We can combine it into one line:
// console.log("Last Element in Array: " + primaryColours[primaryColours.length - 1]);



// G