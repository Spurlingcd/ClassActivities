// what does the function below return? // undefined
function myNumberFunction() {
  let num = 2 ** 2;
  num = num + 3;
  num = num % 4;
  num = num * 14;
  console.log(num);
  return num;
}
myNumberFunction();


// change the function above to return a value

// Short Circuiting
// the console.log will not print
function shortCircuitFunction() {
  return "Zap! - Short Circuited!";
console.log(
  "This will never print because it is after the return statement."
);
}
shortCircuitFunction();
// will the following function short circuit? //no
let height = 50;
function checkCircusRides() {
  if (height < 48) {
    return Take a ride on the carousel!";
  }
  if (height < 60) {
    return "Try the bumper cars!";
  }
  return "Enjoy the roller coaster!";
}
checkCircusRides();
// change the function above to use short circuiting
//heights are considered conditions changed console.logs to return statements
