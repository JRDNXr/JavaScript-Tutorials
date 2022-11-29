// Methods are actions that can be performed on objects.

// Methods are stored in properties as "function definitions".

const person = {
    firstName:"JRDN",
    lastName:"D",
    employee:"Yes",
    id:"145",

    // This is an object method stored as a function definition.
    // "this" keyword refers to the owner of the function. You'll learn more on the "this" keyword later.
    // Since the owner of this function is the object "person", we can call the firstName and lastName properties.
    fullName:function() {
        return this.firstName + " " + this.lastName;

        // This line will give an error. This is because the variables firstName and lastName are not defined within the function's
        // scope (it's brackets).
        //return firstName + lastName;

        // This is why we use the "this" keyword. It tells the program that the declarations and initializations of these variables
        // exist outside of the scope of the function.
    }
};


// To access object methods:
console.log(person.fullName());

