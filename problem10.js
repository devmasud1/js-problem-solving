/*
function name sumOfN(). you will be provided a number n.
you have to calculate the total of all numbers between 1 to n .
use function recursion
 */

function sumOfN(n) {
  if (typeof n !== "number") {
    return "please provide a number";
  }
  if (n <= 0) {
    return "provide a positive number";
  }

  if (n === 1) {
    return 1;
  } else {
    return n + sumOfN(n - 1);
  }
}

const n = 0;
console.log(sumOfN(n));
