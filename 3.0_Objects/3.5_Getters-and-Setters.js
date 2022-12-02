
// Getters and Setters allow you to define Object Accessors (similar to functions).

// ** We use Getters to get the property value. **
const superhero = {
    firstName: "Damian",
    lastName: "Wayne",
    secretIdentity: "Robin",
    language: "en",

    // This is a function (an object "method").
    funcFirstName:function() {
        return this.firstName;
    },

    // This is a getter.
    get getFirstName() {
        return this.firstName;
    }
};

// While all of these may output the same result, look carefully at how we access them.
// Line 28: We are using a Getter to access the value "Damian". We are accessing it as a property, like how we did with
// Line 27: "superhero.firstName".
// If you look at Line 29: "superhero.funcFirstName()", you'll notice we are accessing the property value by using a method.
// Even though the output is the same, HOW we access these properties and their values are different.
console.log(superhero.firstName); // Output | Damian
console.log(superhero.getFirstName); // Output | Damian
console.log(superhero.funcFirstName()); // Output | Damian



// ** We use Setters to set the property value. **
// Setters are useful when we need to change the value of an object.
// We can call setters from anywhere in the program and have them run code for us.
// The functionality of setters are very simililar to functions. However, there are some advantages.
const supervillain = {
    firstName: "Barbara",
    lastName: "Minerva",
    secretIdentity: "Cheetah",
    gender: "",

    // Follow the numbers and read through below.
    // 4)  After the setter, the program saves the value in here so we can access it down below. 
    language: "blank",

    // 1)  This is a setter. It's syntax is similar to a function.
    // setLang is the name of the setter (or function name). lang is the paramater.
    set setLang(lang) {
        this.language = lang.toUpperCase(); // We use the method "toUpperCase to convert "french" to CAPS.

        // 3)  "this.language" refers to the language property in the supervillain object. We are saving the capitalized
        // "FRENCH" into this property.
    }
};

// 1.5)  This is to show what language will produce before we set anything to it.
console.log(supervillain.language); // Output | blank

// 2)  This will set an object property by using setters.
// "french" is the argument that will pass through the setter in the object declaration.
supervillain.setLang = "french";


// 5)  And here we can output the new property value.
console.log(supervillain.language); // Output | FRENCH

console.log();



// We can add Getters and Setters outside of the object scope.

// This is what the original object looks like. Below we recreate this object, but define the getters and setters outside
// of the scope.
const myOriginalObj = {
    counter: 0,
    get reset() {
        return this.counter;
    },
    get increment() {
        return this.counter++;
    },
    get decrement() {
        return this.counter--;
    },
    set add(value) {
        this.counter += value;
    },
    set subtract(value) {
        this.counter -= value;
    }
};

console.log("ORIGINAL OBJECT");
myOriginalObj.reset;
myOriginalObj.add = 9;

console.log(myOriginalObj.counter); // Output || 9

myOriginalObj.subtract = 2; // 9 - 2 = 7

console.log(myOriginalObj.counter); // Output | 7

myOriginalObj.decrement; // 7 - 1 = 6

console.log(myOriginalObj.counter); // Output | 6

myOriginalObj.increment; // 6 + 1 = 7

console.log(myOriginalObj.counter); // Output | 7

console.log();




const myNewObj = {
    counter: 0
};

// We use the defineProperty method to create getters and setters outside of the scope of the object.
Object.defineProperty(myNewObj, "reset", {
    get : function() {
        this.counter = 0;
    }
});

Object.defineProperty(myNewObj, "increment", {
    get : function () {this.counter++;}
});

Object.defineProperty(myNewObj, "decrement", {
    get : function () {this.counter--;}
});

// These are the setters. Only the "value" paramater inbetween the brackets is different here.
Object.defineProperty(myNewObj, "add", {
    set : function (value) {this.counter += value;}
});

Object.defineProperty(myNewObj, "subtract", {
    set : function (value) {this.counter -= value;}
});

console.log("GETTERS AND SETTERS DECLARED OUTSIDE OBJECT");
myNewObj.reset;
myNewObj.add = 9;

console.log(myNewObj.counter); // Output || 9

myNewObj.subtract = 7; // 9 - 4 = 5

console.log(myNewObj.counter); // Output | 7

myNewObj.decrement; // 7 - 1 = 6

console.log(myNewObj.counter); // Output | 6

myNewObj.increment; // 6 + 1 = 7

console.log(myNewObj.counter); // Output | 7

console.log();