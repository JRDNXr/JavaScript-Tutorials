
// Convert functions to Strings JSON Format (Stringify functions)

const person = {
    name: "Zatanna",
    type: "Magic",
    age: function() {
        return 25;
    }
}

// This will NOT work. The function MUST be converted to a String first, and then it can be converted into JSON format
let wrong_string = JSON.stringify(person);
console.log(wrong_string); // Output | {"name":"Zatanna","type":"Magic"}

// You can see the output does not include the function definition.



// Here is what the function definition looks like in its normal form:
console.log(person.age); // Output | [Function: age]

// First convert the function to a String.
person.age = person.age.toString();

// Finally, stringify the function by using the "JSON.stringify" method.
let myString = JSON.stringify(person.age);


// Here is what the function definition looks like in its stringify form:
console.log(myString); // Output | {"name":"Zatanna","age":"function() {\n        return 25;\n    }"}



// Shortform of the above:
// let myString1 = JSON.stringify(person.age.toString());
// console.log(myString1); // Output | "function() {\n        return 25;\n    }"

// EVEN SHORTER/ form of the above:
// console.log(JSON.stringify(person.age.toString())); // Output | "function() {\n        return 25;\n    }"