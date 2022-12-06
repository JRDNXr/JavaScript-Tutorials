
const str1 = "Find the word blue in this sentence.";

// The indexOf() method returns the index (position) of the FIRST occruence of a text in a String.
console.log(str1.indexOf("blue")); // Output || 14


const str2 = "A high bird flies high into the very high sky at nigh.";

// The lastIndexOf() method returns the index of the LAST occurence of a specified text in a String.
console.log(str2.lastIndexOf("high")); // Output || 37


// NOTE: Both indexOf() and lastIndexOf() returns -1 if the specified text is not found in the String.
console.log(str2.lastIndexOf("hope")); // Output || -1

// NOTE: Both indexOf() and lastIndexOf() accept a second parameter as the starting position of their search.
// The value 12 below starts the serach at "flies".
console.log(str2.indexOf("high", 12)); // Output || 18

console.log();


// lastIndexOf() starts at a position and moves backwards.
// Position 35 below starts on the "s" in "flies".
console.log(str2.lastIndexOf("high", 16)); // Output || 2



// The search() method returns the index (position) of the FIRST occurence of a text in a String.
const str3 = "Old happy Saint Nich. He's so Happy. He must be HAPpY all the time.";

console.log(str3.search("happy")); // Output | 4