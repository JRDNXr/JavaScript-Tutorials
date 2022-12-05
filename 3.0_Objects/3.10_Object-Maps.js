
// JavaScript Maps hold key-value pairs.

// Keys can be any datatype.

// Maps remember the original insertion order of the keys.

const inventory = new Map([
    ["coffee", 10.99],
    ["bananas", 0.59],
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


// Clear all elements from a Map.
inventory.clear();