
// Getters and Setters allow you to define Object Accessors (similar to functions).


const superhero = {
    firstName: "Damian",
    lastName: "Wayne",
    secretIdentity: "Robin",
    language: "en",

    // This is a getter.
    get lang() {
        return this.language;
    }
};

console.log(superhero.lang);


// Setters are useful when we need to define the object properties later on.
// We can call setters from anywhere in the program and have them run code for us.
// The functionality of setters are very simililar to functions. However, there are some advantages.

const supervillain = {
    firstName: "Barbara",
    lastName: "Minerva",
    secretIdentity: "Cheetah",
    gender: "",

    language: "",

    // This is a setter.
    set abc(lang) {
        this.language = lang.toUpperCase(); // We use the method "toUpperCase to convert our text to CAPS".
    }
};

// This will set an object property by using setters.
supervillain.abc = "french";

console.log(supervillain.language); // Output | french



// Alternatively, we can also define an object property like so:
supervillain.gender = "Female";

console.log(supervillain.gender); // Output | Female

// However, using setters is more efficient and provides better data quality.