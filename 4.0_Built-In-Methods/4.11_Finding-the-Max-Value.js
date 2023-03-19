
// Math.max() method allows us to find the maximum value in a set of numbers.
// Array identifiers will not work. You have to use Math.max.apply(null, x). See Tutorial 5.13.

num1 = 15;
num2 = 25;
num3 = 35;

// Test numbers stored in variables:
let maxValue = Math.max(num2, num1, num3);

console.log("Max Value: " + maxValue); // Output || Max Value: 35


// Test numbers directly inserted into the brackets:
let maxValue2 = Math.max(5638, 9834, 4552, 2202, 9835);

console.log("Max Value 2: " + maxValue2); // Output || Max Value 2: 9835