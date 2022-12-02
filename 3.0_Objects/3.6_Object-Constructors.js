// Creating objects using the previous methods has one flaw. They only create single objects.
// If we are to create many objects of the same "type", we would need to use a different technique.
// This is where Constructors come into play.

// This is also known as an "Object Constructor Function".
function Item(brandParam, typeParam, modelParam, priceParam) {
    this.brand = brandParam;
    this.type = typeParam;
    this.model = modelParam;
    this.price = priceParam;
}

// We use the new keyword to create objects of the same type:
// myCar and myPhone are both objects.
const myCar = new Item("Audi", "Car", "Q4", 85000);
const myPhone = new Item("Apple", "iPhone", "11 Pro Max");

console.log(myCar.brand + " " + myCar.model); // Output | Audi Q4

console.log(myPhone.type + " " + myPhone.model); // Output | iPhone 11 Pro Max


// Add a property to an object (independently):
myCar.colour = "Red";

// This new property is ONLY added to the "myCar" object. It is NOT added to myPhone. And it will never be added to any
// future objects of the same type. This means that the object constructor function will not add this new property to its
// definition, thereby preventing future objects from inheriting the added property.
// Notice when we try to access the colour property in the myPhone object, it outputs "undefined".
console.log(myPhone.colour); // Output | undefined


// Add a method to an object (independently). Just as we added the property to an object above, this method is only added
// to the "myPhone" object.
myPhone.combinedModel = function() {
    return this.brand + " " + this.type + " " + this.model;
};

console.log(myPhone.combinedModel()); // Output | Apple iPhone 11 Pro Max

// The code below will not work.
// console.log(myCar.combinedModel());



// We create a new object constructor function "Person" below with a function method as well.

// Object constructor functions can also define methods:
function Person(firstNameParam, lastNameParam, ageParam) {
    this.firstName = firstNameParam;
    this.lastName = lastNameParam;
    this.age = ageParam;
    this.fullName = function() {
        return this.firstName + " " + this.lastName;
    };
}

const friend = new Person("Wally", "West", 24);
console.log(friend.fullName()); // Output | Wally West