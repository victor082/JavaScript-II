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


function getLength(arr, cb) {
  // getLength passes the length of the array into the callback.
  return cb (arr);
}
let arrayLength = function(items) {
  return items.length;
}


function last(arr, cb) {
  // last passes the last item of the array into the callback.
  return cb (arr[arr.length -1]);
}
last(items, function(lastItems){
  console.log(lastItems);
});


function sumNums(x, y, cb) {
  // sumNums adds two numbers (x, y) and passes the result to the callback.
  return cb(x, y);
}
const add = function(x, y) {
  return x + y;
}
console.log(sumNums(5,5,add));


function multiplyNums(x, y, cb) {
  // multiplyNums multiplies two numbers and passes the result to the callback.
  return cb(x, y);
}
const multiply = function(x, y) {
  return x * y;
}
console.log(multiplyNums(2,10, multiply));

function contains(item, list, cb) {
  // contains checks if an item is present inside of the given array/list.
  // Pass true to the callback if it is, otherwise pass false.
  for(let i = 0; i < list.length; i++) {
    if(list[i] === item) {
      return cb(true);
    }
  }return cb(false);
}
contains('yo-yo',items, function(boolean){
  console.log(boolean);
});
items.push('chicken');
contains('chicken',items, function(boolean){
  console.log(boolean);
});
/* STRETCH PROBLEM */

function removeDuplicates(array, cb) {
  // removeDuplicates removes all duplicate values from the given array.
  // Pass the duplicate free array to the callback function.
  // Do not mutate the original array.
}