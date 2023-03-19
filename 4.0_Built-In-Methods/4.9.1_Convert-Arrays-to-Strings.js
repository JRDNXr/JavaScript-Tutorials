
// We can convert Arrays to Strings using the toString() method.
const planets = ["Mercury", "Venus", "Earth", "Mars"];

let newString = planets.toString();

// When we convert, JavaScript separates each element with a comma and no whitespace.
console.log(newString); // Output || Mercury,Venus,Earth,Mars



// We can change the separator using the join() method. We specify the separators within quotes. Whitespace can be included.
newString = planets.join(", ");

console.log(newString); // Output || Mercury, Venus, Earth, Mars