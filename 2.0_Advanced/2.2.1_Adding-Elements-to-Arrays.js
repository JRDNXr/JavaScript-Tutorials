
const primaryColours = ["Red", "Orange", "Yellow"];

// We can add elements to an array using the push() method. This will automatically add the elements to the end of an array.

primaryColours.push("White"); // Added White
console.log("New Element: " + primaryColours[3]); // Output || New Element: White

// **NOTE: We can quickly get an array length that includes the newly added element by doing the following:
let arrayLength = primaryColours.push("Black"); // Added Black
console.log("Length of Array: " + arrayLength); // Output || Length of Array: 5

console.log();


// Another way is using the length() method.
// Remember that length is always 1 more than the index. When we get the length of the array (in this case 4 thanks to line
// 38), it adds our new index in spot 4. Nothing exists in index 4. Red = 0 | Yellow = 1 | Blue = 2 | Green = 3.

primaryColours[primaryColours.length] = "Gray"; // Added Gray
console.log("Another New Element: " + primaryColours[5]); // Output || Another New Element: Gray

console.log(primaryColours); // Output || [ 'Red', 'Orange', 'Yellow', 'White', 'Black', 'Gray' ]
console.log();



const shapes = ["Square", "Circle", "Rectangle"];

// One final way to add elements is using the unshift() method. The difference is that unshift() works from the beginning.

shapes.unshift("Triangle"); // Added Triangle
console.log(shapes); // Output || [ 'Triangle', 'Square', 'Circle', 'Rectangle' ]


// **NOTE: We can quickly get an array length that includes the newly added element by doing the following:
let unshiftedElement = shapes.unshift("Decagon"); // Added Decagon
console.log("Length of Array: " + unshiftedElement); // Output || Length of Array: 5

console.log(shapes); // Output || [ 'Decagon', 'Triangle', 'Square', 'Circle', 'Rectangle' ]