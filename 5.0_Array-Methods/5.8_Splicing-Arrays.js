
// Splicing allows us to add new elements to an array.
// Splicing is different from the push() and unshift() methods. Splicing is more powerful in that it allows you to
// add elements anywhere in an array, whereas push() and unshift() are limited to the end and beginning of an array.

// Splicing also allows us to replace elements.

const fruits = ["Banana", "Orange", "Apple", "Mango"];
// INDEX:           0         1        2        3

// The first parameter (2) states where to insert the new elements. It will always add just before the index number.
// The second parameter (0) states how many elements to delete from this index position. This is used for replacing
// elements. This deletes inclusively from the index number (more on that below).
fruits.splice(2, 0, "Lemon", "Kiwi"); // We have indicated that we want to insert Lemon and Kiwi into our array
                                      // and also stated not to remove any existing elements.

console.log(fruits); // Output || [ 'Banana', 'Orange', 'Lemon', 'Kiwi', 'Apple', 'Mango' ]


// Two of the items in this array do not belong. We can replace the elements.
const tech = ["Laptop", "Phone", "Headphones", "TV", "Couch", "Fan", "Tablet"];

// We indicated to start at element 4 and delete (inclusively) the next 2 elements. This means Couch and Fan will be
// removed. And since we stated new elements, they will instead be replaced.
tech.splice(4, 2, "Smart Watch", "Camera");

console.log(tech); // Output || [ 'Laptop', 'Phone', 'Headphones', 'TV', 'Smart Watch', 'Camera', 'Tablet' ]


// Alternatively, you can simply remove elements without replacing them.
// tech.splice(4, 2); will go to index 4 and remove 2 elements.