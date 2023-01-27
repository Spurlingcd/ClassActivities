// create five variables and assign them values
let var1 = "string";
let var2 = 35;
let var3 = true;
let var4 = null;
let var5;

// each variable should reference a different primitive data type
// REMEMBER: you should never DELIBERATELY assign "undefined" to a variable

// print the type of each variable in this order:
// string, number, boolean, undefined, null
console.log(typeof var1, typeof var2, typeof var3, typeof var4, typeof var5);
// create a variable that references a template literal
// inside the template literal, use two of the above variables
let var6 = `I love ${var1}`;
// reassign the value of the variable that references "null"
var4 = 66;
// print the value and its type
console.log(var4);
// print a variable that causes a ReferenceError

// alter the previous line to no longer cause a ReferenceError
