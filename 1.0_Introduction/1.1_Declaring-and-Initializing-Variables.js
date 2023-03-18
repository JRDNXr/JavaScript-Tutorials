// A variable (also known as an identifier) is a text that contains a value.
// We call this text a "String" in programming.

// Declare variables by using the "let" statement.
let a;

// Initialize a variable by appending an equal sign followed by either a number or a String.
let x = 3;
let y = 5;

let b = "test"; 

// Numbers are written as is. Strings are written with quotes. More on that below.
// Numbers and Strings are called Literals.

// Identifiers: The variable name.
// Ie. let "x" = 3; the "x" is the identifier.

// NOTE: JavaScript identifiers cannot contain hyphens. Only underscores are allowed.
// NOTE: JavaScript is Case Sensitive.
//       Ie. let firstName = "";
//           let firstname = "";
//       Notice the difference in the "N". These 2 identifiers will be treated differently.

// You can also declare variables using the "var" statement.
var z = 10;

// vars:
//      - Can be re-declared - We declared the identifier "z" as a number. We can change the identifier to a String later.
//      - Can be declared after use. - We can use the identifier "z" before it even has a value.
//      - Are not limited or restricted by scopes - Vars can be used anywhere, anytime.

// However, vars are NOT recommended, as it can make large scale programs more difficult.

// It is best to use let:
/*
    - Variables defined with let cannot be re-declared.

    - Variables defined with let must be Declared before use.

    - Variables defined with let have Block Scope.
*/

// The last keyword that can declare variables is const. These variables are unchangeable once initialized.
// It's best practice to use CAPITALS when creating a const variable name.
// const does not define a constant value. It defines a constant reference to a value.
// This simply means that the identifier used in a const cannot be declared or initialized elsewhere. const's main purpose is to
// prevent the declaration and initialization of another identifier with the same name, while simultaneously providing a
// constant reference.

const PIE = 3.14;

// This will generate an error.
// PIE = 100;

console.log(x);
console.log(y);
console.log(PIE);


// You can initialize numbers and text into variables.
// Strings must be wrapped in quotes. You can use single quotes, double quotes, and even back quotes. Examples are shown below
// in the order mentioned.
// You must start and end with the same punctuation marks.
let firstName = 'JRDN';
let lastName = "DSouza";
let middleName = `Christopher Matthew`;


// Numbers do not require quotes, and can be written as is.
// This applies to whole numbers and decimal numbers.
let wholeNum = 2;
let decimalNum = 5.5;
