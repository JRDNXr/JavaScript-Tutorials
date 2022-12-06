
// We can extract parts of a String using 3 different methods:
//  - slice(start, end)
//  - substring(start, end)
//  - substr(start, length)



// SLICING
const food = "Apples, Carrots, Potatoes";

// JavaScript starts counting from 0.
// JavaScript looks at the entire string and assigns a number for each position.
//
// A p p l e s ,   C a r  r  o  t  s  ,     P  o  t  a  t  o  e  s
// 0 1 2 3 4 5 6 7 8 9 10 11 12 13 14 15 16 17 18 19 20 21 22 23 24

// If we want to slice Apples, we would need to start at 0 (inclusive) and end at 6 (exclusive). That means
// numbers 0, 1, 2, 3, 4, and 5 are all being counted.
let foodPart1 = food.slice(0, 6);

console.log(foodPart1); // Output | Apples


// Making the number positive cuts off all of the string before it and outputs everything else (inclusive) after it.
let foodPart2 = food.slice(8);
console.log(foodPart2); // Output | Carrots, Potatoes

// Making the number negative starts counting from the end.
let foodPart3 = food.slice(-8);
console.log(foodPart3); // Output | Potatoes


// You can also slice using negative numbers.
let foodPart4 = food.slice(-17, -11);
console.log(foodPart4); // Output | Carrot





// SUBSTRING
// Substring is similar to slice, except any numbers elss than 0 are treated as 0.
const items = "Live, laugh, love.";

// L i v e ,   l a u g h  ,     l  o  v  e  .
// 0 1 2 3 4 5 6 7 8 9 10 11 12 13 14 15 16 17

console.log(items.substring(0, 4)); // Output | Live


// Omitting the second parameter cuts out the rest of the string before it.
console.log(items.substring(6)); // Output | laugh, love.





// SUBSTR
// The second paramater here specifies the length of the extracted part.
const primaryColours = "Red, Yellow, Blue";

console.log(primaryColours.substr(0, 3)); // Output | Red


// Omitting the second parameter cuts out the rest of string before it.
console.log(primaryColours.substr(5, 6)); // Output | Yellow


// You can also use negative numbers with substr.
console.log(primaryColours.substr(-4)); // Output | Blue