
// We can extract parts of a String using 3 different methods:
//  - slice(start, end)
//  - substring(start, end)
//  - substr(start, length)



// Slice
const food = "Apples, Carrots, Potatoes";
//            0123456

// JavaScript starts counting from 0. So if we want to slice Apples, we would need to start at 0 and end at 6.
let foodPart1 = food.slice(0, 6);

console.log(foodPart1); // Output | Apples


// Making the number positive starts counting from the start.
// Making the number negative starts counting from the end.

let foodPart2 = food.slice(10);
console.log(foodPart2); // Output | rrots, Potatoes

let foodPart3 = food.slice(-10);
console.log(foodPart3); // Output | , Potatoes


// You can also slice using negative numbers.
let foodPart4 = food.slice(out 5)