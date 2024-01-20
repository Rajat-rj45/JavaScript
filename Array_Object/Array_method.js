// what is map method in js?
    console.log("map method.....");

var arr = [1, 2, 3];
// console.log(arr);
// var newArr = arr.map(function (item) {
    //   return item * 2;
    // });
    console.log(arr.map((item)=> item*2));
  
    /*
    The map() method creates a new array with the results of calling a provided function on every element
    in the original array.
    Syntax:
    array.map(callback[, thisArg])
    Parameters:
    callback – A function that is called for each element in the array. Each time the callback function
    is executed, the value of "this" is set to the current element being processed.
    */

 
//what is filter method?
/*The filter() method creates a new array with all elements that pass the test implemented by the provided
filter function. It returns a new array containing all the elements that pass the test (truthy
    value), and not the values that fail. It does not modify the existing array.*/
    console.log("Filter method.....");
    let numbers = [5,6,7,8,9];
    const evenNumbers=numbers.filter(number=> number % 2 ===0 );
    console.log("even Numbers are ",evenNumbers);
    //reduce method
        console.log(" reduce method.....");

    const sum = numbers.reduce((accumulator,currentValue)=>{
        return accumulator + currentValue;
        },0);
        console.log('sum of numbers ',sum);
        

//what is sort method in javascript?
console.log("sort method.....");
let numbers1 = [5, 2, 10, 1];
numbers.sort();
console.log(numbers1); // Output: [1, 10, 2, 5]