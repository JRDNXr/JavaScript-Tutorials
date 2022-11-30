
// Create an object "person".
const person = {
    firstName: "John",
    lastName: "Doe",
    age: 60
};

// We use a for loop to iterate through (go through each one) all of the objects property values.
for (let outputValue in person) {
    console.log(person[outputValue]); // Output: John / Doe / 60
}