/*
তোমাকে এমন একটা ফাংশন নেম দিতে হবে isJavaScriptFile() ।
এই ফাংশনে প্যারামিটার হিসেবে নিবে একটি স্ট্রিং(String) যেটি হবে একটি ফাইল নেম (যেমনঃ ‘index.js’)।
যদি এটি জাভাস্ক্রিপ্ট ফাইল হয়-
  1 তোমাকে true রিটার্ন করতে হবে 
  2. আর যদি না হয় তাহলে false রিটার্ন করতে হবে 
*/

function isJavaScriptFile(str) {
  if (typeof str !== "string") {
    return "not a string,please provide a string.";
  } else {
    return str.toLowerCase().endsWith(".js");
    true || false;
  }
}

console.log(isJavaScriptFile("app.js")); //true
console.log(isJavaScriptFile("index.html")); //false
console.log(isJavaScriptFile(1)); //not a string,please provide a string.
