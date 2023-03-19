
// These demonstrations are inefficient, but they do work.
// Arrays do not have built-in Maximum methods. Instead, we can utilize the past tutorials to our advantage.
const points = [30, 110, 6, 15, 110, 96];

// This will sort our points Array from least to greatest.
console.log(points.sort( // Output || 
    function (x, y) {
        return x - y;
    }
));


// Once this is done, we can get the highest number at points.length - 1.
console.log("Highest Number in Array: " + points[points.length - 1]); // Output || Highest Number in Array: 110


// To get the max value in an efficient way, utilize Math.max();
const newPoints = [100, 55, 23, 18, 210, 95, 68];

function maxValue(x) {
    return Math.max.apply(null, x);
}

console.log(maxValue(newPoints)); // Output || 210



// The fastest way to get the max value in an Array is by using a home made solution:
function findMaxValue(y) {
    let len = y.length;
    let max = -Infinity;
    while (len--) {
      if (y[len] > max) {
        max = y[len];
      }
    }
    return max;
}

console.log(findMaxValue(newPoints)); // Output || 210