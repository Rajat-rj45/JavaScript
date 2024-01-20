// Array destructring ??
console.log("Array destructring....................................");
let arr1 = [1, 2, 3, 4, 5];
let l=[x, y, ...rest] = arr1;
console.log(l); // Output: 1
console.log(y); // Output: 2
console.log(rest); // Output: [3, 4, 5]


// what is object ?
console.log("\nWhat is Object?\n");

let person = {
    firstName: "John",
    lastName: "Doe",
    age: 30,
    fullName: function() {
        return this.firstName + " " + this.lastName;
    }
};

console.log(person.fullName()); // Outputs: "John Doe"

// Accessing the properties of an object using dot notation
console.log(`First name: ${person.firstName}`);
// Accessing the property of an object using bracket notation
console.log(`Last Name: ${person["lastName"]}`);
// Updating a value in an object using dot notation and bracket notation
person.age = 28;
console.log(`Age: ${person.age}`)
console.log("Age: "+person.age);
// Adding new properties to an existing object
person.city = "New York";
console.log(`City: ${person.city}`);
// Deleting a Property from an Object
delete person.city;
console.log(`Deleted City: ${!person.hasOwnProperty("city")}`, `City: ${person.city}`);


// object destructring?
console.log("\nObject Destructuring.............");

let user = {
 name: 'John Doe',
 age: 30,
 city: 'New York'
};

let {name, age, city} = user;

console.log(name); // Output: John Doe
console.log(age);   // Output: 30
console.log(city); // Output: New York

let {name: userName, age: userAge, city: userCity} = user;

console.log(userName); // Output: John Doe
console.log(userAge);   // Output: 30
console.log(userCity); // Output: New York





