
// Being able to use objects as Keys in Maps is incredibly powerful.

const myPhoneObj = {
    name: "iPhone",
    brand: "Apple"
}

const myCarObj = {
    name: "Q4",
    brand: "Audi"
}


const myItems = new Map();

myItems.set(myPhoneObj, 1);
myItems.set(myCarObj, 1);


console.log(myItems.get(myPhoneObj)); // Output | 1