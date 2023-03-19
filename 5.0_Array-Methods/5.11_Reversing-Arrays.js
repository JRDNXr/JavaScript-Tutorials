
// We can reverse an Array using the reverse() method.
const sizes = ["XXS", "XS", "Small", "Medium", "Large", "XL", "XXL"];

console.log(sizes.reverse()); // Output || [ 'XXL', 'XL', 'Large', 'Medium', 'Small', 'XS', 'XXS' ]




// Another cool use of reversing is that we can sort items in a Descending Order.


const food = ["Grapes", "Peanuts", "Lettuce", "Bread", "Bananas"];

food.sort();
food.reverse();

console.log(food); // Output || [ 'Peanuts', 'Lettuce', 'Grapes', 'Bread', 'Bananas' ]


// We can do a simplified version of the above:
// food.sort().reverse(); console.log(food); // Output || [ 'Peanuts', 'Lettuce', 'Grapes', 'Bread', 'Bananas' ]

// An even simpler version:
// console.log(food.sort().reverse()); // Output || [ 'Peanuts', 'Lettuce', 'Grapes', 'Bread', 'Bananas' ]