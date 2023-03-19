
// The isArray() method determines whether an Array is an Array.

const myArr = ["Red", "Orange", "Yellow"];
const fakeArr = "Test";

// Fake Array test
let arrayValidation = Array.isArray(fakeArr);

console.log(arrayValidation); // Output || false

// Real Array test
arrayValidation = Array.isArray(myArr);

console.log(arrayValidation); // Output || true
console.log();


// You can also use instanceof to determine whether an Array is an Array.

// Fake Array test
console.log(fakeArr instanceof Array); // Output || false

// Real Array test
console.log(myArr instanceof Array); // Output || true



// The typeof operator will not work since Arrays are objects.
console.log(typeof(myArr)); // Output || object