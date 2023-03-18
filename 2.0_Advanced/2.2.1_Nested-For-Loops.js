
// Nested for loops act the same way as regular for loops. The outer loop runs, then the inner loop runs until is is complete.
// It then returns back to the outer loop which runs again once, followed by the inner loop running again until it is complete.
// This cycle continues until the OUTER LOOP is complete.

// Outer Loop is also known as the Parent Loop.
// Inner Loop is also known as the Child Loop.


// Example:
/*      for () {            <-- 1st Loop (Outer Loop)
            RUNS ONCE

            for () {        <-- 2nd Loop (Inner Loop)
                RUNS UNTIL COMPLETE
            }

            RETURNS BACK TO THE BEGINNING OF THE 1ST LOOP
        }

*/


// In the previous tutorial, we had a multidimensional superhero array. We were not able to see all of the data in the array.
// This is where we use nested for loops.
const superheros = [ ["Bruce", "Wayne", 37], ["Clark", "Kent", 40] ];

let text = "";

// OUTER LOOP
for (let counter1 = 0; counter1 < superheros.length; counter1++) {

    // INNER LOOP
    // In this loop, we need to iterate 3 times to go through all the elements. We can do this by utilizing the first counter.
    // superheros[counter1].length - This looks at Array Number 0 and calculates the length of this specific array. It will
    // find 3 elements. Therefore, counter2 < superheros[counter1].length will be, on the first run, 0 < 3;
    for (let counter2 = 0; counter2 < superheros[counter1].length; counter2++) {

        // On the first run of this inner loop, this will be "superheros[0][0]". The inner loop will continue, however.
        // On the second ru of this inner loop, this will become "superheros[0][1]".
        // counter1 stays at 0, since the outer loop hasn't completed yet. counter2 continues to increment until it
        // completes.
        text += superheros[counter1][counter2] + " || ";
    }
}

console.log(text); // Output || Bruce || Wayne || 37 || Clark || Kent || 40 || 