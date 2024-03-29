// Objects in programming are like things in real life.

// For example, a phone, laptop, or even a person is an object in programming.


// Let's use a phone for our example.

// Object: Phone
// Properties: 
//      - Brand:    Apple
//      - Name:     iPhone
//      - Model:    11 Pro Max
//      - Colour:   Silver

// All Phones have the same properties, but the property values (Apple, iPhone, 11 Pro Max, Silver) differ from phone to phone.


// NOTE: It's best practice to declare objects with the const keyword versus let.
// We create objects like so.
const phone_1 = {brand: "Apple", name: "iPhone", model: "11 Pro Max", colour: "Silver"};

// The values are known as ' name:"value" ' pairs.

// Another way of organizing our objects. This can be useful when there are lots of properties:
const cellphone = {
    brand: "Apple",
    name: "iPhone",
    model: "11 Pro Max",
    colour: "Silver"
};

// And a final way of organizing our objects. This can be useful for when you need to create objects later on in your program:
const employee = {}; // Declares "employee" as an object, but contains no properties.

// We can initialize the properties later on:
employee.id = 9730;
employee.age = 31;
employee.level = 'Intermediate';
employee.salary = "65,000"
employee.employed = true;


// EXAMPLE 1: We can access object properties like so:
console.log("Employee ID: " + employee.id); // Output | Employee ID: 9730
console.log("Employee Pay: $" + employee.salary); // Output | Employee Pay: $65000

console.log();

// EXAMPLE 2: An alternative way to access object properties:
console.log("Employee Age: " + employee["age"]); // Output | Employee Age: 31
console.log("Employee Level: " + employee["level"]); // Output | Employee Status: Intermediate

// EXAMPLE 3: You can also access the objects by using variables.
// This option initializes the variable "obj1" to be the same value as "employee.salary".
let obj1 = employee.salary;

console.log("Employee Salary: $" + obj1); // Output: | Employee Salary: $65,000

// This option initializes the variable "obj2" as a String called "salary". We call this like we would in Example 2.
let obj2 = "salary";

console.log("Employee Salary: $" + employee[obj2]); // Output: | Employee Salary: $65,000

console.log();



// We can CHANGE object property values by giving it a new value.
employee.id = 4545;
console.log("Employee ID: " + employee.id); // Output | Employee ID: 4545"

console.log();

// We can DELETE object properties. Note that this deletes the property AND the property value:
console.log("Employee is Employed?: " + employee.employed); // Output | Employee is Employed?: true

delete employee.employed;

// You can also do this to delete:
// delete employee["employed"];

console.log("Employee is Employed?: " + employee.employed); // Output | Employee is Employed?: undefined

console.log();



// NOTE: All things in JavaScript are objects.
// This includes:
//          - Booleans
//          - Numbers
//          - Strings
//          - Dates
//          - Maths
//          - Regular expressions
//          - Arrays
//          - Functions
//          - Objects

// A "Primitive Value" is a better definition for a "Hard Coded" value.
// Ie. When you type 3.14 into the program instead of placing it in a variable.
//
// Primitive Values ARE NEVER objects.



// JavaScript Objects are Mutable. This means we can create a reference (or an alias) to the original object.
// Any changes you make to this alias will effect the original object.

const Greg = employee;

console.log("Greg's ID: " + Greg.id); // Output | Greg's ID: 4545


// Any changes we make to Greg's properties automatically change in the original object.
Greg.age = 51;

// Notice how we use the property "employee.age" here and how it effects the outcome:
console.log("Greg's Age: " + employee.age); // Output | Greg's Age: 31