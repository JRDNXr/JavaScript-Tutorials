
// We can find and replace text in Strings.
const text1 = "This product is brought to you by Nike.";

// The replace() method finds the word "Nike" and replaces it with "Adidas".
let newText1 = text1.replace("Nike", "Adidas");

// The original string remains the same. This only affects the new string.
console.log(newText1); // Output | This product is brought to you by Adidas.



// NOTE: replace() is CASE-SENSITIVE. Ie. NIKE will not match Nike.

// Replace case-insensitive text.
// Using the /i flag, we tell the program to search the text for NIKE (case-insensitive) and replace it with "Lululemon".
newText1 = text1.replace(/NIKE/i, "Lululemon");
console.log(newText1); // Output | This product is brought to you by Lululemon.

console.log();



// NOTE: replace() will only replace the first match.
console.log(text1.replace("is", "BLANK")); // Output | ThBLANK product is brought to you by Nike.

// Replace multiple instances.
const text2 = "Once you see it, you cannot unsee it.";

let newText2 = text2.replace(/you/g, "they");

console.log(newText2); // Output | Once they see it, they cannot unsee it.

// We can also use the method replaceAll().
console.log(text2.replaceAll(/you/g, "they")); // Output | Once they see it, they cannot unsee it.







