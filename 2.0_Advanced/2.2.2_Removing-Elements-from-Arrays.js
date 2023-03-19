
const primaryColours = ["Red", "Orange", "Yellow", "Green", "Blue", "Violet"];

// We can remove elements in an array using the pop() method. This will automatically remove elements at the end of an
// array. The pop() method can be invoked by either initializing it in a variable or on its own.

// Initializing in a variable:
let removedElement = primaryColours.pop(); // Removed Violet
console.log("Removed Element: " + removedElement); // Output || Removed Element: Violet

console.log(primaryColours); // Output || [ 'Red', 'Orange', 'Yellow', 'Green', 'Blue' ]

// On its own:
primaryColours.pop(); // Removed Blue
console.log(primaryColours); // Output || [ 'Red', 'Orange', 'Yellow', 'Green' ]

console.log();


// SHIFT
// Another way to remove elements is using the shift() method. The difference is that shift() works from the beginning. We
// can do this by initializing it in a variable or on its own.

// Initializing in a variable:
let shiftedElement = primaryColours.shift(); // Removed Red
console.log("Removed Element: " + shiftedElement); // Output || Removed Element: Red

console.log(primaryColours); // Output || [ 'Orange', 'Yellow', 'Green' ]

// On its own:
primaryColours.shift(); // Removed Orange
console.log(primaryColours); // Output || [ 'Yellow', 'Green' ]

console.log();


// DELETE
// One final way to remove elements is using the delete() method. If you know the index you wish to delete, then this
// method can be useful. However, it could cause holes in the array if your not careful.

const vehicles = ["Car", "Plane", "Zebra", "Boat"];
delete vehicles[2]; // Even though we deleted the element, doing this causes a hole at index 2.

console.log(vehicles); // Output || [ 'Car', 'Plane', <1 empty item>, 'Boat' ]


const newVehicles = ["Car", "Plane", "Zebra", "Boat"];
newVehicles[newVehicles.length - 2].pop();

console.log(newVehicles);