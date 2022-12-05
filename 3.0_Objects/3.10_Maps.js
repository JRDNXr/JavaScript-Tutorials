
// JavaScript Maps hold key-value pairs.

// Keys can be any datatype.

// Maps remember the original insertion order of the keys.

const inventory = new Map([
    ["coffee", 10.99], // The first part (coffee) is the "Key".
    ["bananas", 0.59], // The second part (0.59) is the "Value".
    ["soup", 4.99]
]);


// Outputting elements from a Map.
console.log(inventory.get("coffee")); // Output | 10.99


// Add elements to a Map.
inventory.set("juice", 8.99);

console.log(inventory.get("soup")); // Output | 4.99


// Modify elements in a Map.
// We use the same method "set()" to modify existing elements.
inventory.set("soup", 3.59);

console.log(inventory.get("soup")); // Output | 3.59


// Get the size of a Map.
console.log(inventory.size); // Output | 4


// Delete an element from a Map.
inventory.delete("bananas");

console.log(inventory.get("bananas")); // Output | undefined
console.log(inventory.size); // Output | 3

console.log();


// Iterate through all elements in a Map.
inventory.forEach(function(value, key) {
    console.log(key + " = " + value); // Output | coffee = 10.99 / soup = 3.59 / juice = 8.99
})

console.log();


// Have an iterator object returned from a Map.
for (const x of inventory.entries()) {
    console.log(x); // Output | [ 'coffee', 10.99 ] / [ 'soup', 3.59 ] / [ 'juice', 8.99 ]
}

console.log();


// Return an iterator object with the keys in a Map.
for (const x of inventory.keys()) {
    console.log(x); // Output | coffee / soup / juice
}

console.log();


// Return an iterator object with the values in a Map.
for (const x of inventory.values()) {
    console.log(x); // Output | 10.99 / 3.59 / 8.99
}


// Clear all elements from a Map.
inventory.clear();

console.log(inventory.size); // Output | 0