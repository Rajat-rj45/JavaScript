// Function Statement    // Function Declaration

a();                          // it will work
 function a(){
    console.log("Function Statement");
 }
// Function Expression
//b();                         // it can't work
var b =  function(){
    console.log("Function Expression");
} 
b();


// Anonymous Function ??
/* IIFE is a function that is executed immediately after 
it is defined. This pattern is commonly used in 
JavaScript for tasks that require an anonymous 
function expression. */

(function() {
    console.log('Anonymous Function');
})();

var myFunc = function() {
    console.log('Anonymous Function');
};

myFunc(); // logs 'Hello World!'

// Named Function Expression

var c =  function xyz(){
    console.log("Named Function Expression");
} 
c();


// Different between Parametrs & Argument ?
function addNumbers(num1, num2) { // num1 and num2 are parameters
    return num1 + num2;
   }

console.log(addNumbers(3, 4)); // 3 and 4 are arguments

// First Class Function ??
function greet(name) {
    return "Hello, " + name;
}

function logGreeting(greetFunction) {
    const name = "First Class Function";
    console.log(greetFunction(name));
}

logGreeting(greet); // Output: "Hello, First Class Function"

// Arrow Function ??
const arrowGreet = (name) => `Hello, ${name}`;
console.log(arrowGreet("Arrow Function")); // Output: "Hello, Arnold"


