
// We can "slice" an Array to make an entirely new Array. This is done using the slice() method.
// **NOTE: Slicing DOES NOT remove the elements from the previous Array. It only copies them.

const allEmployees = ["Albert", "Joseph", "Jake", "Victoria", "Melanie"];

// Go to index 3 and (inclusively) "slice" out all the remaining elements to form a new Array. 
const femaleEmployees = allEmployees.slice(3);
console.log(allEmployees); // Output || [ 'Albert', 'Joseph', 'Jake', 'Victoria', 'Melanie' ]
console.log(femaleEmployees); // Output || [ 'Victoria', 'Melanie' ]



const juniorEmployees = ["Mia", "Zach", "Xavier", "Greg", "Amanda", "Katie"];

// The method selects elements from the start argument, and up to (but not including) the end argument.
// In this case, we start at index 1 and count up to 4. We DO NOT include our 4th count.
const maleJuniors = juniorEmployees.slice(1, 4);
console.log(juniorEmployees); // Output || [ 'Mia', 'Zach', 'Xavier', 'Greg', 'Amanda', 'Katie' ]
console.log(maleJuniors); // Output || [ 'Zach', 'Xavier', 'Greg' ]