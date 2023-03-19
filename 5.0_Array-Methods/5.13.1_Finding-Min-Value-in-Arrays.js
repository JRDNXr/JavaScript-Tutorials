
// These demonstrations are inefficient, but they do work.
// Arrays do not have built-in Minimum methods. Instead, we can utilize the past tutorials to our advantage.
const points = [30, 110, 6, 15, 110, 96];

// This will sort our points Array from least to greatest.
console.log(points.sort( // Output || [ 6, 15, 30, 96, 110, 110 ]
    function (x, y) {
        return x - y;
    }
));


// Once this is done, we can get the lowest number at index 0.
console.log("Lowest Number in Array: " + points[0]); // Output || Lowest Number in Array: 6


// To get the min value in an efficient way, utilize Math.min();
const newPoints = [100, 55, 23, 18, 210, 95, 68];

function minValue(x) {
    return Math.min.apply(null, x);
}

console.log(minValue(newPoints)); // Output || 18



// The fastest way to get the min value in an Array is by using a home made solution:
function findMinValue(y) {
    let len = y.length;
    let min = Infinity;

    while (len--) {
      if (y[len] < min) {
        min = y[len];
      }
    }
    
    return min;
}

console.log(findMinValue(newPoints)); // Output || 18