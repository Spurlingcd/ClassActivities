// print the function below
function myNumberFunction() {
  let num = 2 ** 2; //4
  num = num + 3; //7
  num = num % 4; //3
  num = num * 14; //42
  console.log(num);
} // num = 42

console.log(myNumberFunction); //prints function in brackets
// now, invoke the myNumberFunction function
myNumberFunction(); //prints 42
// print just the function of console.log (no invocation)
console.log(console.log); //prints function "log" in brackets
