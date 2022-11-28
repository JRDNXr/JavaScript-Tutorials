// Functions are a block of JavaScript code that can execute code when called. This is useful for scaling your program.
// Scaling your program makes your program *efficient* and easier to read and understand.

// Functions can be called within a JavaScript and HTML file.

// Functions are useful, especially (but not limited to) when a user clicks on a button.

// Function names follow the same rules as variables (letters, digits, underscores, and dollar signs (same rules as variables)).

function myFunction() {
    console.log("The function works!");
}

// We don't need to use console.log to call a function. We can simply call the function by name, like so:
myFunction();

console.log();



// Functions can have parameters (the variables in the brackets). These parameters allow us to perform special tasks within the
// function.
function addTwoNumbers(num1, num2) {

    // This function has 2 parameters (it creates 2 variables) - num1 and num2.
    // When we send numbers to this function, it stores them (in the order it is sent) in these parameter variables.
    // Below we sent 10 first followed by 15. So 10 will be stored in num1, while 15 will be stored in num2.
    console.log("First Number (num1): " + num1); // Output | 10
    console.log("Second Number (num2): " + num2); // Output | 15

    // The purpose of this function is to add 2 numbers together. Below is the code that does just that:
    let sum = num1 + num2;
    console.log(num1 + " + " + num2 + " = " + sum); // Output | 25

    // NOTE: The following would not work when displaying variables in your output:
    // console.log(num1 + num2 + " = " + sum); // Output | 25 = 25.
    //
    // That is why the code above separates the "num" variables by putting a String inbetween them (the + " + " + portion).

    console.log();
}

// We are invoking the function "addTwoNumbers" and sending the numbers "10" and "15". These are called "arguments".
// Arguments are the values received by the function when it is invoked.
addTwoNumbers(10, 15);


// Functions are scalable because they can be reused as many times as you need.
// By uncommenting the code below, you will see the function execute twice. First it adds 10 and 15. Then it will run again and
// add 350 and 1000.
// addTwoNumbers(350, 1000);



function multiplyTwoNumbers(num3, num4) {

    // A function will stop executing code when it hits a return statement.
    // A return statement "returns" the value to the sender (also known as the caller).
    return num3 * num4;
}

const FOUR = 4;
const FIVE = 5;

// The first example sends "hard coded" arguments. Hard coded means the number or String is typed into the code itself verus
// inside a variable, such as below. We are sending variable values to the function.
multiplyTwoNumbers(FOUR, FIVE); // The first time this executes, the function returns the value 20 back. However, we do not do
                                // anything with the result, and therefore nothing is shown to us.

// We can append the function call inside a console.log in order to show the output:
console.log("Answer: " + multiplyTwoNumbers(FOUR, FIVE)); // Output || 20

// To make it fancy, we can add Strings to be shown to us:
console.log("Answer: " + FOUR + " x " + FIVE + " = " + multiplyTwoNumbers(FOUR, FIVE)); // Output | Answer: 4 x 5 = 20

// Here is an alternative to Line 74:
// We are initializing the variable "product" with the answer from the function call "multiplyTwoNumbers".
let product = multiplyTwoNumbers(FOUR, FIVE);

// That way, when the function returns the number 20, we are storing it in the variable "product".

console.log("Answer: " + FOUR + " x " + FIVE + " = " + product); // Output | Answer: 4 x 5 = 20

console.log();



// Variables declared in a function are contained just within the scope of the function (within its brackets). These are
// called "local variables". These variables only stretch to the end of the bracket.
function testFunction() {
    return testVar = "This is test 2";
}

// We can use the same identifier "testVar" inside and outside the function.
// If you created another function, you could reuse the same "testVar" identifier in there too.
let testVar = "This is test 1";

console.log(testVar); // Output | This is test 1
console.log(testFunction()); // Output | This is test 2