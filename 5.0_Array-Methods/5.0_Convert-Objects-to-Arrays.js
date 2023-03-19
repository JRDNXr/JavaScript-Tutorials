
const superheroObj = {
    firstName: "Clark",
    lastName: "Kent",
    secretIdentity: "Superman"
}

// We use the method "Object.values(object name)"
const superHeroArray = Object.values(superheroObj);

// This will display the Array Definition (all of the results).
console.log(superHeroArray); // Output | [ 'Clark', 'Kent', 'Superman' ]


// We can display all the values in an Array using a for...of loop:
for (let i in superHeroArray) {
    console.log(superHeroArray[i] + "\n"); // Output | Clark / Kent / Superman
}