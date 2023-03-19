
// A multidimensional array is an array of arrays.
// This is useful for when we want to store a table of data.

// Say suppose we have multiple Employees:

const employeeData = [ ["John", "Doe", 35, "April 10, 1988"], ["Mark", "Speed", 40, "November 30, 1983"] ];
// INDEX NUMBERS:
// 1 (ARRAY NUMBER):   [                 0                 ]  [                  1                     ]
// 2 (ELEMENT NUMBER): [  0       1     2          3       ]  [   0       1      2            3        ]

// We can call these elements by first referring to their array number and then their element number.

// Looking at the above INDEX NUMBERS, we have 2 sets of indexes - Array Number and Element Number. The Array Number set is
// separated by the comma at the end of the purple square bracket. The Element Number set looks at each element individually.

// This looks at array 0, then focuses on the element 0:
console.log("First Name: " + employeeData[0][0]); // Output || First Name: John

// This looks at array 1, then focuses on element 3:
console.log("Date of Birth: " + employeeData[1][3]); // Output || Date of Birth: November 30, 1983