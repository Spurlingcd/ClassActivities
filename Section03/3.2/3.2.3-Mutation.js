let x = 5;
let y = [1, 2, 30];
let z = {
  id: 100,
  name: "myName",
  loggedIn: false
};
// reassign x, y, and z to FALSY values
x = null;
y = 0;
z = '';
// print x, y, and z
console.log(x, y, z);



const a = "name";
const b = [];
const c = {};
// try to reassign a, b, and c to FALSY values
// a = NaN;
// b = null;
// c = 0;

// using BRACKET NOTATION, assign a value to b
b[0] = 1;

// using DOT NOTATION, assign a PROPERTY to c
c.prop = "key";
console.log(c);
// using DOT NOTATION, assign a METHOD to c
c.greet = () => "Hello There!!!";

// using BRACKET NOTATION, call the method in c
console.log(c["greet"]());
// print a, b, and c
console.log(a, b, c);
