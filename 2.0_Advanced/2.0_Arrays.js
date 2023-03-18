
// Here we have to declare a new identifier each time we want it to store a variable. Notice how we increment
// the identifier "colour" by 1 each time. We have to do this since identifiers cannot share the same name.
// Using inappropriately named identifiers also becomes confusing. Imagine having x1, x2, and x3. In a bigger program,
// you wouldn't know what these mean.
let colour1 = "Red";
let colour2 = "Blue";
let colour3 = "Yellow";


// The solution is Arrays!

// Arrays are special variables that can hold more than one value.
// We can declare arrays using var, let, and const. It is best practice to use const.
// Arrays are great for listing things, especially values that share similar traits.
// For example, think colours, grades, country names, etc.


// This creates a String Array (a solution to our problem above).
// const colours = ["Red", "Blue", "Yellow"];

// Line 20 works. However, Arrays can also span multiple lines. Spaces and line breaks are ignored.
const colours = [
    "Red", // We call these elements
    "Blue",
    "Yellow"
];

// This creates a Numbers Array.
const numbers = [1, 2, 3, 9];

// The following will output the Array "definition". This is what the computer interprets when it sees your Array.
// This isn't pretty to the human eye, but thankfully we can output it in a better way.
console.log(colours); // Output || [ 'Red', 'Blue', 'Yellow' ]
console.log(numbers); // Output || [ 1, 2, 3, 9 ]



// Arrays can be declared but do not need to contain values. We can add values later.

const planets = [];

// Arrays elements can be accessed by referring to their "index" number. By default, Arrays start indexing at 0.
// If we skip an index number, it will be empty (it may show you an error or "<1 empty item>").
planets[0] = "Mercury";
planets[1] = "Venus";
planets[2] = "Earth";
// planets[3] = "Mars";
planets[4] = "Jupiter";

console.log(planets);  // Output || [ 'Mercury', 'Venus', 'Earth', <1 empty item>, 'Jupiter' ]



// We can change the values of Arrays:
planets[2] = "Pluto";

console.log(planets[2]); // Output || Pluto



// Arrays can hold more than numbers and Strings. We can also store objects, functions, and even arrays!

const myArray = ["Car", "Plane", "Boat"];

function myFunction() {
    console.log("A function!");
}

const insaneArray = [Date.now, myFunction, myArray];

// This is equivalent to simply calling the original array (Ie. console.log(myArray); )
console.log(insaneArray[2]); // Output || [ 'Car', 'Plane', 'Boat' ]

