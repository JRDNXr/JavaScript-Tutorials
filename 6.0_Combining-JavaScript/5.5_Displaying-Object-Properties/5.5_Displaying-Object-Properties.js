
const superhero = {
    firstName: "Bruce",
    lastName: "Wayne",
    secretIdentity: "Batman",
    villains: [
        {name: "The Joker", enemyNo: 1},
        {name: "Bane", enemyNo: 2},
        {name: "The Penguin", enemyNo: 3}
    ]
}

function populateHero() {
    let text = "";

    // We call the object properties and display them in a variable.
    text = "First Name: " + superhero.firstName + " || " + "Last Name: " + superhero.lastName;

    // We can then use just that variable to display all the values.
    document.getElementById("showHero").innerHTML = text;

    // Alternatively, we can also do this. However, it is quite lengthy:
    //document.getElementById("showHero").innerHTML = "First Name: " + superhero.firstName + " || " + "Last Name: " + superhero.lastName;
}

function populateVill() {
    // Remember about scopes. We can reuse the identifier "text" since it is located in a different function.
    // Also, you have to declare AND initialize "text" to blank at the top of this function.
    let text = "";

    for (let i in superhero.villains) {
        let y = 0;
        
        // This will append every result to the variable "text".
        text += superhero.villains[i].name + " ";
    }

    // We can then use just the variable, since it holds all the values.
    document.getElementById("showVillains").innerHTML = text;
}