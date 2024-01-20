// Array in javascript?
// An array is a collection of items stored at contiguous memory locations.

let arr = [1, 2, 'Hello', true];
console.log(arr);

// Accessing elements using index
console.log("Accessing element by Index: ", arr[2]);

// Length property - returns the number of elements in an array.
console.log('Length of the array : ', arr.length);

// Adding new item to array using push() method
arr.push(5);
console.log('Array after adding new item : ', arr);

// Removing all items from an array using pop() method
while (arr.length > 0) {
    console.log('Removed Item : ', arr.pop());
    }
console.log('Array After removing all Items : ', arr);

// Adding new item to beginning of array using unshift() method
arr.unshift(3);
console.log('Array after adding new item to Beginning : ', arr);
arr.push(5);
console.log("Array after adding new item to Beginning : ", arr);
arr.unshift(9);
console.log("Array after adding new item to Beginning : ", arr);

// Removing first item from array using shift() method
console.log('Removed First Item : ', arr.shift())
console.log('Array After removing First Item : ', arr);

// Inserting an item at a specific position using splice() method
arr.splice(1, 0, "World");
console.log('Array After inserting Item at Specific Position : ', arr);
arr.push(4);
arr.push(6);
arr.push(7);
arr.push(8);
// Slicing an array - Extracting part of an array into a new array
let slicedArr = arr.slice(2, 6);
console.log('Sliced Array : ', slicedArr);

// Searching for an item in an array using indexOf(), lastIndexOf() methods
console.log('Checking if \'Hello\' exists in the array : ', arr.indexOf
(8));




