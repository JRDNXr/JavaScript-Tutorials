
// We can sort our Array in a random order (this method is outdated and favours some numbers over others).
const newPoints = [63, 14, 2, 57, 77, 99];

console.log(newPoints.sort( // Output || RANDOM EACH TIME
    function (x, y) {
        return 0.5 - Math.random();
    }
));

// This can also be written as:
// console.log(newPoints.sort(function (x, y) {return 0.5 - Math.random();} ));


// The Fisher Yates Method is a more accurate way of randomizing our Arrays.
const newPoints2 = [40, 100, 1, 5, 25, 10];

for (let i = newPoints2.length -1; i > 0; i--) {
  let j = Math.floor(Math.random() * (i+1));
  let k = newPoints2[i];
  newPoints2[i] = newPoints2[j];
  newPoints2[j] = k;
}

console.log(newPoints2); // Output || RANDOM EACH TIME