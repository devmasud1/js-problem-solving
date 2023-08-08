/*
তোমাকে একটা function দেওয়া হবে called “isLGSeven()”. এটা ইনপুট হিসেবে একটা number নিবে।  
এখন তোমার task:
তোমাকে ইনপুট ভ্যালু এবং ৭ এর মধ্যে পার্থক্য বের করতে হবে।
1.যদি এই পার্থক্য ৭ এর চেয়ে ছোট হয়, তখন তোমাকে return করতে হবে সেই বিয়োগফল।
2.নাহলে তোমাকে return করতে হবে double of the input। মানে যে সংখ্যা ইনপুট হিসেবে নিয়েছো সেটির দ্বিগুণ।
Input : 6
Output: -1
Input: -15
Output: -22
Input: 15
Output: 30
*/

function isLGSeven(num) {
  if (typeof num !== "number") {
    return "please enter a number";
  } else {
    const diff = num - 7;

    if (diff < 7) {
      return diff;
    } else {
      return num * 2;
    }
  }
}

console.log(isLGSeven(5)); // output : -2
console.log(isLGSeven(-5)); // output : -12
console.log(isLGSeven(18)); // output : 16
console.log(isLGSeven("18")); // please enter a number
