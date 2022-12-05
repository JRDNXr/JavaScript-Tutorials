
// A JavaScipt Set is a collection of unique values.

// Each value can only occur ONCE in a Set.

// A Set can hold any value of any data type.


// Available methods for "Set":
//  new Set()   - Creates a new Set
//  add()       - Adds a new element to the Set
//  delete()    - Removes an element from a Set
//  has()       - Returns true if a value exists
//  clear()     - Removes all elements from a Set
//  forEach()   - Iterates through all elements in a Set
//  values()    - Returns an Iterator with all the values in a Set
//  keys()      - Same as values().
//  entries()   - Returns an Iterator with the [value,value] pairs from a Set


// There is also 1 available property:
//  size        - Returns the number of elements in a Set



// Creating a Set.
const letters = new Set(["a", "b", "c", "d", "e", "f", "g"]);
console.log(letters); // Output | Set(7) { 'a', 'b', 'c', 'd', 'e', 'f', 'g' }


// Add a new element to the Set.
letters.add("h");
console.log(letters); // Output | Set(8) { 'a', 'b', 'c', 'd', 'e', 'f', 'g', 'h' }

// If you try to add a letter that is already in the Set, nothing will change.
letters.add("h");
console.log(letters); // Output | Set(8) { 'a', 'b', 'c', 'd', 'e', 'f', 'g', 'h' }

// We can also add new elements to the Set by using variables.
const CAPITAL_X = "X";
const CAPITAL_Y = "Y";
const CAPITAL_Z = "Z";

letters.add(CAPITAL_X);
letters.add(CAPITAL_Y);
letters.add(CAPITAL_Z);

console.log(letters); // Output | Set(11) { 'a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'X', 'Y', 'Z' }


// Removes an element from a Set.
letters.delete("e");
console.log(letters); // Output | Set(10) { 'a', 'b', 'c', 'd', 'f', 'g', 'h', 'X', 'Y', 'Z' }

console.log();


// Returns true if a value exists.
console.log(letters.has("j")); // Output | false

console.log(letters.has("a")); // Output | true

console.log();


// Removes all elements from a Set.
letters.clear();
console.log(letters); // Output | Set(0) {}

console.log();



// Create a new Set.
const colours = new Set(["Red", "Orange", "Yellow", "Green", "Blue"]);

// Iterates through all elements in a Set.
colours.forEach(function(value) {
    console.log(value); // Output | Red / Orange / Yellow / Green / Blue
})


// Returns an Iterator object with all the values in a Set.
console.log(colours.values()); // Output | [Set Iterator] { 'Red', 'Orange', 'Yellow', 'Green', 'Blue' }

console.log();

// We can also use this Iterator object in for...of loop to iterate through all the elements in a Set.
const coloursIterator = colours.values();

for (const i of coloursIterator) {
    console.log(i); // Output | Red / Orange / Yellow / Green / Blue
}



// keys() and entries() make more sense with Object Maps.



