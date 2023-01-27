// refactor the functions below into arrow syntax

//concise body
const myNumberFunction = () => ((2 ** 2 + 3) % 4) * 14;

const greet = name => `Hello, ${name}`;

const timeOfDayGreet = (name, timeOfDay) => `Hello, ${name}, good ${timeOfDay}`;

//block body
const tripleAndHalf = num => {
  let triple = num * 3;
  return triple / 2;
};
console.log(tripleAndHalf(2, 3));


const sumTwoNumbers = (num1, num2) => {
  let sum = num1 + num2;
  console.log(`The sum of your numbers is ${sum}.`);
  return sum;
};
console.log(sumTwoNumbers(2, 2));