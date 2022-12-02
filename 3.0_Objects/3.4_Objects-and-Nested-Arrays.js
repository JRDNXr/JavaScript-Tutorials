
// Values in objects can be arrays.
// Values in arrays can be objects.

// Object "personObj" with a nested array (array within an array).
const personObj = {
    firstName: "John",
    lastName: "Doe",
    age: 30,

    // We can create an array within an object:
    // shoppingCart is the first array. The "variety" is the 2nd array.
    shoppingCart: [
        {name: "Apple", type:"Fruit", variety:["Gala", "Fuji", "Honeycrisp"], price: 0.60},
        {name: "Chicken", type: "Meat", variety:["Dark", "White", "Raw"], price: 8.00},
        {name: "Chips", type: "Snacks", variety:["Doritos", "Lays", "Miss Vickies"], price: 3.00}
    ]
}

// An alternative to the above for organizing purposes.
const personObjAlt = {
    firstName: "John",
    lastName: "Doe",
    age: 30,
    shoppingCart: [
        {
            name: "Apple",
            type: "Fruit",
            variety: ["Gala", "Fuji", "Honeycrisp"],
            price: 0.60
        },
        {
            name: "Chicken",
            type: "Meat",
            variety: ["Dark", "White", "Raw"],
            price: 8.00
        },
        {
            name: "Chips",
            type: "Snacks",
            variety: ["Doritos", "Lays", "Miss Vickies"],
            price: 3.00
        }
    ]
}



// To access arrays inside arrays, we use a for-in loop for each array.
// Remember how arrays work. We are simply iterating through the array here.
for (let i in personObj.shoppingCart) {
    console.log(personObj.shoppingCart[i].name); // Output | Apple / Chicken / Chips

    // Here we dive into the 2nd array. The for statement stays the same, as we need both arrays.
    // The next line looks at the Shopping Cart at index 0 (because i = 0 the first time). This item is "Apple".
    // Next, the Variety looks at its index 0 (because j = 0 the first time). This item is "Gala".
    // This loop continues until all the elements in the 2nd array are outputted.
    // We then loop back to the top for loop (the 1st array) and continue the same process for "Chicken" and "Chips".
    for (let j in personObj.shoppingCart) {
        console.log("   - " + personObj.shoppingCart[i].variety[j]); // Output | - Gala / - Fuji / - Honeycrisp / - Dark / - White / - Raw / - Doritos / - Lays / - Miss Vickies
    }
}