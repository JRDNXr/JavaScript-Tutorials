
let message = "THIS IS AN EXAMPLE TEXT.";


// The method "toUpperCase" will make CAPITALIZE all text. Numbers and special characters are uneffected.
let new_message = message.toLowerCase();

console.log(new_message); // Output | this is an example text.





// We can call this method in objects methods as well.
const person = {
    firstName: "BRUCE",
    slogan: "IS BATMAN!",
    nameSlogan:function() {
        return (this.firstName + " " + this.slogan).toLowerCase();
    }
}

console.log(person.nameSlogan()); // Output | bruce is batman!