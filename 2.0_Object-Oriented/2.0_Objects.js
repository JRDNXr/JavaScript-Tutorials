// Objects in programming are like things in real life.

// For example, a phone, laptop, or even a person is an object in programming.


// Let's use a phone for our example.

// Object: Phone
// Properties: 
//      - Brand:    Apple
//      - Name:     iPhone
//      - Model:    11 Pro Max
//      - Colour:   Silver

// All Phones have the same properties, but the property values (Apple, iPhone, 11 Pro Max, Silver) differ from phone to phone.


// We create objects like so:
const phone_1 = {brand:"Apple", name:"iPhone", model:"11 Pro Max", colour:"Silver"};

// The values are known as ' name:"value" ' pairs.

// Another way of organizing our objects. This can be useful when there are lots of properties:
const phone_2 = {
    brand:"Samsung",
    name:"Galaxy",
    model:"S22",
    colour:"Black"
};

// NOTE: It's best practice to declare objects with the const keyword versus let.



// We can access object properties like so:
console.log("Phone 1 - Brand: " + phone_1.brand); // Output | Phone 1 - Brand: Apple
console.log("Phone 2 - Brand: " + phone_2.brand); // Output | Phone 2 - Brand: Samsung

console.log();

// An alternative way to access object properties:
console.log("Phone 1 - Name: " + phone_1["name"]); // Output | Phone 1 - Name: iPhone
console.log("Phone 2 - Name: " + phone_2["name"]); // Output | Phone 2 - Name: Galaxy



// You can also just declare objects (not initialize) by using the "new" keyword.

//cars = new car();