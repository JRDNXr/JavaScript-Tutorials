
// There are more methods of extracting Strings.
//      - charAt
//      - charCodeAt
//      - Property access [ ]



// CHAR AT
const myString = "PLANET EARTH";

// The charAt() method returns the character at a specified index (position) in a String.
let char = myString.charAt(0);

console.log(char); // Output || P



// CHAR CODE AT
// The charCodeAt() method returns the unicode of the character at a specified index in a String.
// This is related to ASCII values. You can see these values here: https://www.asciitable.com/
console.log(myString.charCodeAt(0)); // Output || 80



// Property Access
// We can also simply access the character using basic syntax (at a specified index).
// This technique can be unpredictable and is not recommended.
console.log(myString[0]); // Output || P