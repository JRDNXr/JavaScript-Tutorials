
// Arrays have properties and methods that allow us to maximize their functionality.

// length() - More detail in 4.4_String-Length.js
//      - Get the last element in an array using length
// push()
// sort()


const primaryColours = ["Red", "Yellow", "Blue"];
// INDEX #:               0       1         2
// LENGTH #:              1       2         3


// Index numbers and length numbers are different. Index starts counting at 0. We as humans start counting from 1. Length
// takes this into account and starts counting from 1 as well.
console.log("Length of Array: " + primaryColours.length); // Output || Length of Array: 3



// GET THE LAST ELEMENT IN AN ARRAY
// We can use a combination of indexing and length() to do this.

// The length of the array is 3. We subtract 1, giving us 2. The last element in our array has an index of 2.
let lastElementNum = primaryColours.length -  2;

// primaryColours[2] evaluates to Blue. This is how we get the last element.
console.log("Last Element in Array: " + primaryColours[lastElementNum]);  // Output || Last Element in Array: Blue

// We can combine the above into one line:
// console.log("Last Element in Array: " + primaryColours[primaryColours.length - 1]);



// PUSH
// We can add elements to an array using the push() method.

primaryColours.push("Green");
console.log("New Element: " + primaryColours[3]); // Output || New Element: Green

// Another way is using the length() method.
// Remember that length is always 1 more than the index. When we get the length of the array (in this case 4 thanks to line
// 38), it adds our new index in spot 4. Nothing exists in index 4. Red = 0 | Yellow = 1 | Blue = 2 | Green = 3.
primaryColours[primaryColours.length] = "Orange";
console.log("Another New Element: " + primaryColours[4]); // Output || Another New Element: Orange