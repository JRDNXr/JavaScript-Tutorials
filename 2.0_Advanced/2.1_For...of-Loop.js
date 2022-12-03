
const name = "Stephanie";

// We can use a for loop to iterate over the elements of a string:
for (let i = 0; i < name.length; i++) {
    console.log(name[i]); // Output | S / t / e / p / h / a / n / i / e
}

console.log();



// A "for...of loop" is a simplified version of the above.
for (let i of name) { // The keyword "of" is crucial to getting our result. There are different keywords that can be used to get different results.
    console.log(i); // Output | S / t / e / p / h / a / n / i / e
}

console.log();

// NOTE: You can also use a for...of loop directly on a string
// Ie. for (let i of "JRDN")



// A for...of loop can iterate over the elements of an array:
for (let i of [1,2,3,4,5,6,7]) {
    console.log(i); // Output | 1 / 2 / 3 / 4 / 5 / 6 / 7
}

