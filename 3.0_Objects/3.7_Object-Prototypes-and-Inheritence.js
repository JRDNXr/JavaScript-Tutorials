function Employee(firstNameParam, lastNameParam, idNumParam, languageParam) {
    this.firstName = firstNameParam;
    this.lastName = lastNameParam;
    this.idNum = idNumParam;
    this.language = languageParam;
    // this.nationality = "Italian"; <-- This is equivalent to Line 23 below. This line is done internally.
}

// Object "EmployeeJake" created using the "Employee" object constructor function above.
const EmployeeJake = new Employee("Jake", "Malta", 003, "English");

// We can add properties to objects independently. This means we can add a new property to a specific object without that
// property affecting other objects, both already created and to be created.
// 
// Say suppose we wanted to "age" as a new property to the object EmployeeJake.
EmployeeJake.age = 50;

console.log(EmployeeJake.age); // Output | 50


// If we want to add a new property (or methods) to ALL existing objects OR externally add new properties (or methods) to
// object constructors, we can do so by using Protoype.
Employee.prototype.nationality = "Italian"; // This is equivalent to Line 6 above. This line is done externally.

console.log(EmployeeJake.nationality); // Output | Italian


// When we create a new object, our prototype property "nationality" AND it's value "Italian" are automatically included:
const EmployeeJulia = new Employee("Julia", "Thompson", 101, "English"); // No need to include nationality, as the prototype already defines it for us.

console.log(EmployeeJulia.nationality); // Output | Italian

console.log();



// Add methods externally to object constructors:
Employee.prototype.fullName = function() {
    return this.firstName + " " + this.lastName;
}

// You can see how our externally added method can be accessed by the "EmployeeJake" object.
console.log(EmployeeJake.fullName()); // Output | Jake Malta
console.log(EmployeeJulia.fullName()); // Output | Julia Thompson
