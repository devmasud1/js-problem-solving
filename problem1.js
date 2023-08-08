/*
তোমাকে এমন একটা ফাংশন বানাতে হবে যেটা একটি সংখ্যা ইনপুট নিবে।
function টির নাম হবেঃ isInteger()।

আউটপুট হিসেবে একটি boolean রিটার্ন করবেঃ
1.সংখ্যাটি integer হলে true রিটার্ন করবে। 
2.অন্যথায় false রিটার্ন করবে।
*/

function isInteger(num) {
  if (typeof num !== "number") {
    return "not a number!";
  } else {
    if (num % 1 === 0) {
        return true;
    }
    else{
        return false;
    }
  }
}
console.log('isInteger:', isInteger(22)); //true
console.log('isInteger:', isInteger(2.2)); //false
console.log('isInteger:', isInteger('hello')); //not a number!

