const arr = ["a", "a", "b", "a", "c", "b", "a", "b", "b", "c", "c", "c"];

// find the first index of "a", "b", and "c"
let firstA = arr.indexOf("a");
let firstB = arr.indexOf("b");
let firstC = arr.indexOf("c");

console.log(firstA + " " + firstB + " " + firstC);

// find the last index of "a", "b", and "c"
let lastA = arr.lastIndexOf("a");
let lastB = arr.lastIndexOf("b");
let lastC = arr.lastIndexOf("c");
console.log(lastA + " " + lastB + " " + lastC);

// if the first index and last index of "a" is not the same, remove the last instance

function removeDuplicates(array, duplicateValues) {
let firstInstance = array.indexOf(duplicateValues);
let lastInstance = array.lastIndexOf(duplicateValues);
  while (firstInstance !== lastInstance) {
     array.splice(lastInstance, 1);
     lastInstance = array.lastIndexOf(duplicateValues);
}
return array;
}

let singleAList = removeDuplicates(arr, "a");

// repeat until there is just one "a"

console.log(singleAList);

let singleBList = removeDuplicates(arr, "b");
console.log(singleBList);

let singleCList = removeDuplicates(arr, "c");
console.log(singleCList);
