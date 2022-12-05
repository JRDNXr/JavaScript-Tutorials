
// Instance of returns a Boolean value (true or false) of the depicted datatype.
// Ie. [variable of datatype] instanceof [datatype to check]



// Instance of an Iterator.
const myArray = [1, 2, 3];

const myArrayIterator = myArray[Symbol.iterator]();

const myArrayIteratorBool = myArrayIterator instanceof Object;
console.log("Is this an Object?: " + myArrayIteratorBool); // Is this an Object? true


// Instance of a Set.
const mySet = new Set([]);

const mySetBool = mySet instanceof Set
console.log("Is this a Set?: " + mySetBool); // Output | Is this a Set? true


// Instance of a Map.
const myMap = new Map([]);

const myMapBool = myMap instanceof Map;
console.log("Is this a Map?: " + myMapBool); // Output | Is this a Map? true