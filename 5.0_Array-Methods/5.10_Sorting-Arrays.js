
// We can sort our Arrays using the sort() method. This will sort our Array alphabetically.
const groceries = ["Milk", "Eggs", "Cookies", "Cooking Oil", "Pasta", "Apples", "Chicken"];

console.log(groceries.sort()); // Output || [ 'Apples', 'Chicken', 'Cookies', 'Cooking Oil', 'Eggs', 'Milk', 'Pasta' ]



// The sort() method works great for Strings. However, it will not work well with numbers.
// If you take 25 and 100, 100 will come first since "2" is greater than "1".

// We can use a compare function to help us sort:
const points = [41, 115, 89, 97, 12, 62];

console.log(points.sort( // Output || [ 12, 41, 62, 89, 97, 115 ]
    function (x, y) {
        return x - y;
    }
));

// This can also be written as:
// console.log(points.sort(function (x, y) {return x - y;} ));


// We can also sort descending:
console.log(points.reverse()); // Output || [ 115, 97, 89, 62, 41, 12 ]

// There's a few more ways of doing this without having to sort and then reverse:
/*
METHOD 1
    console.log(points.sort(
        function (x, y) {
            return y - x;
        }
    ));

METHOD 2
    console.log(points.sort(function (x, y) {return y - x}));

METHOD 3 (If you are keen on using reverse)
    console.log(points.sort(
        function (x, y) {
            return x - y;
        }
    ).reverse());
*/

console.log(points.sort( // Output || [ 12, 41, 62, 89, 97, 115 ]
    function (x, y) {
        return y - x;
    }
));


// THE LOGIC BEHIND THE COMPARE FUNCTION
/*
    The sort() method works by taking two elements (in this case numbers) and comparing the two. It sends these values to
    the function, and sorts it according to the returned value.

    If the returned value is negative, x is sorted before y.

    If the returned value is positive, y is sorted before x.

    If the returned value is 0, nothing changes in the sorting order of the two values.


    Step-by-Step:
    -------------
    41 - 115:   This returns a negative. The program knows the left side number (x) must be smaller than the right side
                number (y). 

    41 - 89:    Negative. Left side number is smaller than the right side.

    41 - 97:    Negative. Left side number is smaller than the right side.

    41 - 12:    Positive. Left side number is bigger than the right side. 12 automatically gets moved to Position 1 in
                the new sorting order. 41 challenged other higher numbers and was smaller. If 12 was not able to beat 41.
                it would not be able to beat the higher numbers.

    41 - 62:    Negative. Left side number is smaller than the right side.

    CONCLUSION: Every number is higher than 41, except for one number.
    SORTING ORDER SO FAR: [ 12, 41, ?, ?, ?, ? ]



    115 - 89:   Positive. Right side number is bigger than the left side.

    115 - 97:   Positive. Right side number is bigger than the left side.

    115 - 62:   Positive. Right side number is bigger than the left side.

    CONCLUSION: Every number is smaller than 115.
    SORTING ORDER SO FAR: [ 12, 41, ?, ?, ?, 115 ]



    89 - 97:    Negative. Left side number is smaller than the right side.

    89 - 62:    Positive. Right side number is bigger than the left side.

    CONCLUSION: 1 number was smaller. 1 number was bigger. Smaller number must be organized before this number.
    SORTING ORDER SO FAR: [ 12, 41, 62, 89, ?, 115 ]



    97 - 12:    Positive. Right side number is bigger than the left side.
    
    97 - 41:    Positive. Right side number is bigger than the left side.

    97 - 62:    Positive. Right side number is bigger than the left side.

    97 - 89:    Positive. Right side number is bigger than the left side.

    97 - 115:   Negative. Left side number is smaller than the right side.

    CONCLUSION: Every number was smaller except for 1 number. All smaller numbers must be organized before this number.
    SORTING ORDER SO FAR: [ 12, 41, 62, 89, 97, 115 ]
*/

// We can write the above code in a longer format:

/*

function sortNum(num1, num2) {
    return num1 - num2;
}

console.log(points.sort(sortNum));

*/