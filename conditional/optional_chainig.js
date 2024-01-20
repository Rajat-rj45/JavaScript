//what sis optional chaining?
//optional chaining is a way to access properties on objects that may or may not exist.
const person = {name: "John"};
console.log(person?.age);  //undefined, because the age property does not exist in
//the person object
let x;
x = undefined;
console.log(x?.toString());   //undefined, because calling toString() method on undefined
//returns undefined



const person1 = {
 name: 'John Doe',
 age: 30,
 address: {
    street: '123 Main St',
    city: 'Anytown',
    state: 'CA',
    postalCode: '12345'
 }
};

const city = person1.address?.city; // Optional chaining here
console.log(city); // Outputs: 'Anytown'