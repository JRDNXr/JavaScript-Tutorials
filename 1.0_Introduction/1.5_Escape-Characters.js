
// Escape Characters in Strings allow us to insert special characters in a String.

// Ie.
// console.log("This is a "test" to see how quotes inside a String will "work".");
//
// This line will not output properly because there are multiple instances of the double quotes here.
// The solution is Escape Characters. You can also use different quotation marks.


// Double Quotation Marks (" ")
// Use the backslash escape character "\" before using the double quotation mark.
console.log("This is a \"test\" to see how quotes inside a String will \"work\"."); // Output | This is a "test" to see how quotes inside a String will "work".



// Use single quotations to surround the whole text, allowing us to use double quotations on the word "test".
console.log('Another "test" to see quotes work.'); // Output | Another "test" to see quotes work.



// Single Quotation Marks (' ')
console.log("A test on \'single quotation marks\'."); // Output | A test on 'single quotation marks'.


// Backslash Character ( \ ).
// We use "\\" to place a single backslash character in a String.
console.log("A test on backslash (\\) characters."); // Output | A test on backslash (\) characters.





// Other Escape Characters
//  \b      - Backspace
//  \f      - Form feed
//  \n      - New line
//  \r      - Carriage Return
//  \t      - Horitzonal Tabulator
//  \v      - Vertical Tabulator

console.log("Test \n Test2"); // Output | Test /  test2

console.log("Horizontal Test \t Horiz. Test 2"); // Output | Horizontal Test 	 Horiz. Test 2