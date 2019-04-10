// Create a higher order function and invoke the callback function to test your work. You have been provided an example of a problem and a solution to see how this works with our items array.  Study both the problem and the solution to figure out the rest of the problems.

const items = ['Pencil', 'Notebook', 'yo-yo', 'Gum'];

/* 

  //Given this problem: 
  
  function firstItem(arr, cb) {
    // firstItem passes the first item of the given array to the callback function.
  }

  // Potential Solution:

  // Higher order function using "cb" as the call back
  function firstItem(arr, cb) {
    return cb(arr[0]);
  }

  // Function invocati function(first) {
    console.log(firon 
  firstItem(items,st)
  });

*/


function getLength(arr, cb) { //Higher order Function
  // getLength passes the length of the array into the callback.
  return cb (arr);
}
let arrayLength = function(items) { // Actual callback function, what is being passed to the HOF as an argument
  return items.length;
}


function last(arr, cb) { // HOF
  // last passes the last item of the array into the callback.
  return cb (arr[arr.length -1]); // the last item in the array
}
last(items, function(lastItems){ 
  console.log(lastItems);
});


function sumNums(x, y, cb) { // new function with arrays of x y and callback/cb
  // sumNums adds two numbers (x, y) and passes the result to the callback.
  return cb(x, y);
}
const add = function(x, y) { // new variable add that is assigned as a function with param x and y
  return x + y; // return param x and param y added
}
console.log(sumNums(5,5,add)); // console logs the using the function sumNums with the params of 5, 5, and 'add' function as an argument


function multiplyNums(x, y, cb) { // new function with array of x, y, and callback/cb
  // multiplyNums multiplies two numbers and passes the result to the callback.
  return cb(x, y); 
}
const multiply = function(x, y) { // new variable multiply assigned to function with params of x and y
  return x * y; // return param x and y multiplied
}
console.log(multiplyNums(2,10, multiply));

function contains(item, list, cb) { // new function contains with item, list, and callback
  // contains checks if an item is present inside of the given array/list.
  // Pass true to the callback if it is, otherwise pass false.
  for(let i = 0; i < list.length; i++) { // for loop that loops through the list
    if(list[i] === item) { // if statement stating that if list(index) is equals to the item, return true
      return cb(true);
    }
  }return cb(false); // essentially 'else' or if not, return false.
}
contains('yo-yo',items, function(boolean){ //passing the string 'yo-yo' into contains, items array, and a function called boolean
  console.log(boolean);
});
items.push('chicken'); // adds the string 'chicken' into the end of the array
contains('chicken',items, function(boolean){ // passing the string 'chicken' into contains function, items array, and a function called boolean.
  console.log(boolean);
});
/* STRETCH PROBLEM */

function removeDuplicates(array, cb) {
  // removeDuplicates removes all duplicate values from the given array.
  // Pass the duplicate free array to the callback function.
  // Do not mutate the original array.
}