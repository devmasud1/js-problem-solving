/*
you will be provided an array of numbers. you have to return array of prime numbers from that input array. 
*/

function findPrimeNumbers2(arr) {
  let primes = [];
  for (const item of arr) {
    if (item > 1) {
      let isPrime = true;

      for (let i = 2; i < item; i++) {
        if (item % i === 0) {
          isPrime = false;
          break;
        }
      }
      if (isPrime === true) {
        primes.push(item);
      }
    }
  }
  return primes;
}
const numbers = [4, 8, 5, 10, 19];
console.log(findPrimeNumbers2(numbers));
