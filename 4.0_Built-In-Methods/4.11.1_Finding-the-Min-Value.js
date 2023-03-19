
// Math.min() method allows us to find the minimum value in a set of numbers.
// Array identifiers will not work. You have to use Math.min.apply(null, x). See Tutorial 5.13.1.

num1 = 15;
num2 = 25;
num3 = 35;

// Test numbers stored in variables:
let minValue = Math.min(num2, num1, num3);

console.log("Min Value: " + minValue); // Output || Min Value: 35


// Test numbers directly inserted into the brackets:
let minValue2 = Math.min(5638, 9834, 4552, 2202, 9835);

console.log("Min Value 2: " + minValue2); // Output || Min Value 2: 9835