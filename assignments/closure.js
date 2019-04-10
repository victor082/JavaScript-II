// ==== Challenge 1: Write your own closure ====
// Write a simple closure of your own creation.  Keep it simple!
function victorKingdom() { //Global scope
  const emperor = "Victor" // const emperor assigned the string 'Victor'
  console.log(`Hello, this is ${emperor}.`) // console logs 'hello, this is [emperor].'

  function victorvillage() { 
    const potatofarmer = "Jason, the potato farmer" //const potatofarmer assigned to the string 'Jason, the potato farmer'
    console.log(`Hello, this is ${potatofarmer}.`) // console logs the statement

    function victorland() { 
      console.log(`I love the ${emperor} and ${potatofarmer}.`) // pulls the constant emperor and potatofarmer outside of this function by using a closure.
    }victorland();
  }victorvillage();
}victorKingdom();

/* STRETCH PROBLEMS, Do not attempt until you have completed all previous tasks for today's project files */


// ==== Challenge 2: Create a counter function ====
const counter = () => {
  // Return a function that when invoked increments and returns a counter variable.
};
// Example usage: const newCounter = counter();
// newCounter(); // 1
// newCounter(); // 2

// ==== Challenge 3: Create a counter function with an object that can increment and decrement ====
const counterFactory = () => {
  // Return an object that has two methods called `increment` and `decrement`.
  // `increment` should increment a counter variable in closure scope and return it.
  // `decrement` should decrement the counter variable and return it.
};
