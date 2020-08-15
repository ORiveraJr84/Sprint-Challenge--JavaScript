// ==== Closures ====

/* Task 1: Study the code below and explain in your own words why nested function can access the variable internal. */

const external = "I'm outside the function";

function myFunction() {
  console.log(external);
  const internal = "Hello! I'm inside myFunction!";

  function nestedFunction() {
    console.log(internal);
  }
  nestedFunction();
}
myFunction();

// Explanation: The nested function can access the variable internal because it is within the same function scope of myFunction. It's almost as if myFunction becomes the global focus for the nestedFunction much like a child sees their parents as their entire world.

/* Task 2: Counter */

/* Create a function called `sumation` that accepts a parameter and uses a counter to return the summation of that number. For example, `summation(4)` should return 10 because 1+2+3+4 is 10. */

function sumation(num) {
  let total = 0;

  for (let i = 0; i <= num; i++) {
    total += i;
  }

  return total;
}

console.log(`This is my counter summation ------> ` + sumation(4));
