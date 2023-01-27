// Named Parameters
// write a function that takes two named parameters:
// print each named parameter,

// then return the parameters added together
function example(param1, param2) {
  console.log(param1);
  console.log(param2);
  return param1 + param2;
}


// invoke the function and pass in two numbers
example(5, 6);
// invoke the function and pass in more than two numbers
example(5, 6, 7);
// invoke the function and pass in only one number
example(5);
// change the function to set default values for the parameters
function example(param1 = 5, param2 = 6) {
  console.log(param1);
  console.log(param2);
  return param1 + param2;
}
// again, invoke the function and pass in only one number
example(7);
// Rest Operator
// add a rest operator to the function's parameters
function example(param1, param2, ...param3) {
  console.log(param1);
  console.log(param2);
  console.log(param3)
  return param1 + param2;
}
// add a line to the function's body to print the value of the rest operator

// again, invoke the function and pass in more than two numbers
example(5, 6, 7, 8, 9);
