
const person = {
    firstName: "Bruce",
    lastName: "Wayne",
    secretIdentity: "Batman",
    villains: [
        {name: "The Joker", enemyNo: 1},
        {name: "Bane", enemyNo: 2},
        {name: "The Penguin", enemyNo: 3}
    ]
}

function populate() {
    // Remember about scopes. You have to declare AND initialize "text" to blank.
    let text = "";

    for (let i in person.villains) {
        let y = 0;
        
        // This will append every result to the variable "text".
        text += person.villains[i].name;
    }

    // We can then use just the variable, since it holds all the values.
    document.getElementById("showVillains").innerHTML = text;
}