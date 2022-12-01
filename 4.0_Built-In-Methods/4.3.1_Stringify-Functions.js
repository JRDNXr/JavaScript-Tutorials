// Convert functions to Strings JSON Format (Stringify functions)

const person = {
    name: "Zatanna",
    age: function() {
        return 25;
    }
}

// This will NOT work. The function MUST be converted to a String first, and then it can be converted into JSON format

let wrong_string = JSON.stringify(person);
console.log(wrong_string);



person.age = person.age.toString();

let myString = JSON.stringify(person);

