// Methods are actions that can be performed on objects.

// Methods are stored in properties as "function definitions".

const person = {
    firstName:"JRDN",
    lastName:"D",
    employee:"Yes",
    id:"145",

    // This is an object method stored as a function definition.
    // "this" keyword refers to an object. You'll learn more on this later.
    // For now, "this" refers to the property of person.
    fullName:function() {
        return this.firstName + " " + this.lastName;
    }
};


// To access object methods:
console.log(person.fullName());

