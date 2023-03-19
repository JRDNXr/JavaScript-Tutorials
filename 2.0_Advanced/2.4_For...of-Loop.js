
const person = "Stephanie";

// We can use a for loop to iterate over the elements of a string:
let text = "";

for (let i = 0; i < person.length; i++) {
    text += person[i] + " | ";
}

console.log(text); // Output || S | t | e | p | h | a | n | i | e
console.log();


// A "for...of loop" is a simplified version of the above.
text = "";

for (let i of person) { // The keyword "of" is crucial to getting our result. There are different keywords that
                        // can be used to get different results.
    text += i + " . ";
}

console.log(text); // Output || S . t . e . p . h . a . n . i . e .
console.log();

// NOTE: You can also use a for...of loop directly on a string
// Ie. for (let i of "JRDN")



// A for...of loop can iterate over the elements of an array:
text = "";

for (let i of [1,2,3,4,5,6,7]) {
    text += i + " || ";
}

console.log(text); // Output || 1 || 2 || 3 || 4 || 5 || 6 || 7 || 
