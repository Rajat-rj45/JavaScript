// what is rest operator?
/* The rest operator (spread operator) in JavaScript is a
   three-dot (...) operator that allows us to expand iterable
   elements (like arrays) into multiple arguments or multiple
   elements in an array or object literal. */
//Example with array 
  let numbers = [1, 2, 3];
let numbersCopy = [...numbers];

console.log(numbersCopy); // Output: [1, 2, 3]

//Example with Object
let person = {firstName: 'John', lastName: 'Doe'};
let employee = {id: 123, ...person};

console.log(employee); // Output: {id: 123, firstName: 'John', lastName: 'Doe'}