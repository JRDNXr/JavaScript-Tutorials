
// Convert arrays to Strings JSON Format (Stringify functions)

const myArray = ["Red", "Orange", "Yellow", "Green", "Blue", "Purple"];

// We use the "JSON.stringify" method to stringify the array
let myString = JSON.stringify(myArray);

// Here is what the array definition looks like in its normal form:
console.log(myArray); // Output | [ 'Red', 'Orange', 'Yellow', 'Green', 'Blue', 'Purple' ]

// Here is what the array definition looks like in its stringify form:
console.log(myString); // Output | ["Red","Orange","Yellow","Green","Blue","Purple"]



// Short form of the above:
// console.log(JSON.stringify(myArray)); // Output | ["Red","Orange","Yellow","Green","Blue","Purple"]