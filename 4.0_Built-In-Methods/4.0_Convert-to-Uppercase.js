
let message = "this is an example text";


// The method "toUpperCase" will make CAPITALIZE all text. Numbers and special characters are uneffected.
let new_message = message.toUpperCase();

console.log(new_message); // Output | THIS IS AN EXAMPLE TEXT





// We can call this method in objects methods as well.
const person = {
    firstName: "bruce",
    slogan: "is batman!",
    nameSlogan:function() {
        return (this.firstName + " " + this.slogan).toUpperCase();
    }
}

console.log(person.nameSlogan()); // Output | BRUCE IS BATMAN!