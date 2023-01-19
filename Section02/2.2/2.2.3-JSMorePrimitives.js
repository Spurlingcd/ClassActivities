// Create a variable "timeOfDay" and assign it a string
let timeOfDay = "evening";

// Create a variable "greeting" that references a template literal
// Use "timeOfDay" in the template literal to create a message like "Good morning!" or "Good evening!"
let greeting = `Good ${timeOfDay}`;
// Print "greeting"
console.log(greeting);
// Create a new variable, but do not assign it a value
let newVariable;
// Print the new variable and its type
// What type should we expect?
console.log(typeof newVariable);
// Assign the variable a value that indicates the variable is purposely blank
// What value should we assign?
newVariable = null;

// Print the variable and its type again
// What type should we expect?
console.log(newVariable, typeof newVariable);
// Try to print a variable that does not exist
// What should we expect to print in the CLI? an error
console.log(lemons);
// Print "greeting" again
console.log(greeting);
// Will this line run? NO, only if line 23 is commented out
//While going through this activity, in your terminal navigate to your Activities repo
//To print/view what you are working on, use the Chrome Developers Console in your Chrome Browser, or else use StackBlitz - https://stackblitz.com

//Pushing the activity up to GitHub (in the development branch)git
//Open your terminal and make sure you are inside your repo folder
//Type git add 2.2.3-JSMorePrimitives.js
//Type git status
//The file name should appear in green, saying it is ready to be staged
//Type git commit -m "JS Variables and Primitives Part 3"
//Type git status
//The file name should not appear, meaning it is waiting to be pushed up to GitHub
//Type git push
//Type git status
//The working tree should be clean
//This means that the changes you have made are in GitHu
