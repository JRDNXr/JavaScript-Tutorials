// Creating objects using the previous methods has one flaw. They only create single objects.
// If we are to create many objects of the same "type", we would need to use a different technique.
// This is where Constructors come into play.

// This is also known as an "Object Constructor Function".
function Item(brand, type, model, price) {
    this.brand = brand;
    this.type = type;
    this.model = model;
    this.price = price;
}

// We use the new keyword to create objects of the same type:
// myCar and myPhone are both objects.
const myCar = new Item("Audi", "Car", "Q4", 85000);
const myPhone = new Item("Apple", "iPhone", "11 Pro Max", 1200);

console.log(myCar.brand + " " + myCar.model); // Output | Audi Q4

console.log(myPhone.type + " " + myPhone.model); // Output | iPhone 11 Pro Max


// We can add a property to an object:
myCar.colour = "Red";

// This new property is ONLY added to the "myCar" object. It is NOT added to myPhone. And it will never be added to any
// future objects of the same type.
console.log(myPhone.colour); // Output | undefined