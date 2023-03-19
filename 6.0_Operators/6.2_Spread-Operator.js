
// We can use the Spread Operator to combine and iterate different components.

// Method 1 - Without the Spread Operator
const colours = ['Red', 'Orange', 'Yellow', 'Blue', 'Purple'];

const favColurs = ['Green', 'Blue'];

console.log(colours); // Output || [ 'Red', 'Orange', 'Yellow', 'Blue', 'Purple' ]
console.log(favColurs); // Output || [ 'Green', 'Blue' ]


// Method 2 - With the Spread Operator
const tech = ['Phones', 'Cars', 'Batteries'];

const favTech = [...tech, 'Tablets', 'Computers'];

console.log(favTech); // Output || [ 'Phones', 'Cars', 'Batteries', 'Tablets', 'Computers' ]

// NOTE: You can place "...tech" anywhere in the favTech array. The index location you place it in will change your output.
// For example, favTech = ['Tablets', 'Computers', ...tech], the result would: [ 'Tablets', 'Computers', 'Phones', 'Cars', 'Batteries' ]