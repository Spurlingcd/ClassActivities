const nums = [6, 5, 2, 3, 4, 1, 0];
// remove each of the last two items with pop(), saving each item to a variable
let removedNum1 = nums.pop();
let removedNum2 = nums.pop();
console.log(removedNum1);
console.log(removedNum2);
// remove each of the first two items with shift(), saving each item to a variable

let removedNum3 = nums.shift();
let removedNum4 = nums.shift();
console.log(removedNum3);
console.log(removedNum4);

// use push and unshift to add the variables back to the array in numerical order, 0-6
console.log(nums);
nums.unshift(removedNum1, removedNum2);


console.log(nums);
nums.push(removedNum4, removedNum3);

console.log(nums);


