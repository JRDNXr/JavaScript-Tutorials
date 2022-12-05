
// JavaScript has Iterables and Iterators.

// Iterables are data structures that have the [Symbol.iterator] method. Ie. Arrays, Strings, etc.

// An Iterator is an object that is returned by the [Symbol.iterator] method.


// A simple array.
const myArray = [1, 2, 3];

// We utilize the [Symbol.iterator] here to get the iterator object from "myArray".
const arrayIterator = myArray[Symbol.iterator]();

// This will return the Array Iterator.
console.log(arrayIterator); // Output | Object [Array Iterator] {}


// A simple string.
const myString = "Test";

const stringIterator = myString[Symbol.iterator]();

// This will return the String Iterator.
console.log(stringIterator);

console.log();



/*
The iterator object has a next() method that returns the next item in the sequence.

The next() method contains two properties: value and done.

    value - The value property can be of any data type and represents the current value in the sequence.

    done - The done property is a boolean value that indicates whether the iteration is complete or not. If the iteration
    is incomplete, the done property is set to false, else it is set to true.
*/

function displayElements(arr) {

    // To update the iteration.
    let n = 0;

    return {
        // Implementing the next() function.
        next() {
            if(n < arr.length) {
                return {
                    value: arr[n++],
                    done: false // When the program hits false, it breaks out of the loop.
                }
            }

            return {
                value: undefined,
                done: true
            }
        }
    }
}

const arr = ['h', 'e', 'l', 'l', 'o'];

// We are assigning the function to our array Iterator variable.
const arrIterator = displayElements(arr);

// Line 68 is not necessary, and we can do the below as well:
// console.log(displayElements(arr).next());

console.log(arrIterator.next()); // Output | { value: 'h', done: false }
console.log(arrIterator.next()); // Output | { value: 'e', done: false }
console.log(arrIterator.next()); // Output | { value: 'l', done: false }
console.log(arrIterator.next()); // Output | { value: 'l', done: false }
console.log(arrIterator.next()); // Output | { value: 'o', done: false }
console.log(arrIterator.next()); // Output | { value: undefined, done: true }

/*
In the above program, we have created our own iterator. The displayElements() function returns the value and done property.

Each time the next() method is called, the function gets executed once and displays the value of an array.

Finally, when all the elements of an array are exhausted, the done property is set to true, with value as undefined.
*/