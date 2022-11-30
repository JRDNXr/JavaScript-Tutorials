

// We create an object "personObj".
const personObj = {
    firstName: "John",
    lastName: "Doe",

    // Inside this object, we create another object. We call these "nested objects".
    electronics: {
        phone: "Samsung",
        laptop: "Apple",
        tv: "Sony"
    }
};

// We can access nested objects like so:
console.log(personObj.electronics.tv); // Output | Sony

// An alternative way to access nested objects:
console.log(personObj.electronics["laptop"]); // Output | Apple

// Another alternative way to access nested objects:
console.log(personObj["electronics"]["phone"]); // Output: Samsung

// You can also access the objects by using variables:
let obj1 = "electronics";
let obj2 = "tv";

console.log(personObj[obj1][obj2]); // Output | Sony

// This also works to the above:
// console.log(personObj.electronics[obj2]); // Output | Sony

console.log();



// A nested-nested object. This is just a demonstration how you can create unlimited nested loops.
const employeeObj = {
    firstName: "Mark",
    lastName: "Speed",
    employment: {
        employed: true,
        id: 3308,
        departmentInfo: {
            department: "sales"
        }
    }
};

// And accessing the nested-nested objects:
console.log(employeeObj.employment.departmentInfo.department);