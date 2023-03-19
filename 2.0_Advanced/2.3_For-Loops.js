
// Loops can execute a block of code a number of times. This is especially useful with Arrays.

const coloursRainbow = ["Red", "Orange", "Yellow", "Green", "Blue", "Violet"];

// We can "iterate" through the array "coloursRainbow" by using a for loop.
// Iterate means to go through each value in an array.
for (let i = 0; i < coloursRainbow.length; i++) {
    console.log(coloursRainbow[i]); // We insert the i counter within the array's index. On the first run of this for loop,
                                    // it will be coloursRainbow[0]. This will evaluate to "Red".
}

console.log();

// for (1st Expression; 2nd Expression; 3rd Expression) {}

// There are a few steps to a for loop:
//      for         -   Keyword declaring the start of a for loop
//      let i = 0   -   Here we are declaring a counter variable. Counters help us keep track of the number of times the loop
//                      repeats itself. We can declare this variable outside of the for loop and later use it in the for loop:
//                      Ie. let counter = 0;
//
//                          for (counter = 0; counter < coloursRainbow; counter++) {}
//
//                      **NOTE: This portion of the for loop is only executed once, when the for loop begins. The counter is
//                              NOT reset to 0 every time the loop repeats itself.
//                      **NOTE 2: You can declare more than one variable here as well. Learn more about this below.
//
//      i < coloursRainbow.length   -   This is the condition of the for loop. It determines how long the loop should run for.
//                                      In this case, we are telling the loop to run for the length of the coloursRainbow
//                                      array. In this case, it would be 6. So when we start the for loop, the program says:
//                                      0 < 6. This evaluates to true, and the for loop continues.
//
//                                      **NOTE: For loops MUST evaluate to true in order to continue. Learn more about this
//                                              below.
//
//      i++         -   This tells the program to increment or decrement the counter. On the first entry, this does nothing.
//                      When the loop repeats itself, it will begin its instructions. Learn more about this below.




// Say suppose we have a multi-dimensional array:
const superheros = [ ["Bruce", "Wayne", 37], ["Clark", "Kent", 40] ];

let text = "";
// In this for loop, we break the convention we had above. We declare multiple variables in the 1st expression.
// We could also increment both of these variables in the 3rd expression, but we will get a different result the 2nd time
// around.
for (let count1 = 0, count2 = 0; count2 < superheros.length; count2++) {
    text += superheros[count1][count2] + " || "; // We store the content in text so it doesn't take up a whole page in the
                                                 // output.
}

console.log(text); // Output || Bruce || Wayne ||

// You may have noticed that the above method only shows the superhero's first names. superheros.length = 2. This means thefor
// loop only iterates twice. In order to show all of the data in a multidimensional array, we must use 2 for loops. These are
// called "nested for loops". Look in the next tutorial for more information on this.



// All 3 Expressions in a for loop are OPTIONAL. If your starting out, it's best to use all 3.

// EXPRESSION 1
// We can dec