/*
Convert your gems into diamond
তোমাকে একটা function দেওয়া হবে called gemsToDiamond(). এটা ইনপুট হিসেবে তিনটা number ( তোমাদের ৩ বন্ধুর gems এর সংখ্যা ) নিবে। 
১ম বন্ধুর প্রতি gems এর ক্ষমতা = 21
২য় বন্ধুর প্রতি gems এর ক্ষমতা = 32
৩য় বন্ধুর প্রতি gems এর ক্ষমতা = 43
[ gems এর ক্ষমতা বলতে একটা gems কে কয়টা diamond এ convert করা যাবে সেটা বুঝানো হচ্ছে। ]
এখন তোমার task:
সব বন্ধুর gems মিলিয়ে total কতটি diamond পাবে সেটা বের করতে হবে।
total diamond এর সংখ্যা যদি 1000 এর দিগুন এর উপর হয়ে যায় সেক্ষেত্রে total diamond থেকে 2000 বাদ দিয়ে যতগুলো diamond অবশিষ্ট থাকবে, ততগুলো তোমরা পাবে।

Sample Input & Output:-
Input: 1, 1, 1
Output: 96
Input: 20, 200, 50
Output: 6970
Input: 100, 5, 1
Output: 303
*/

function gemsToDiamond(a, b, c) {
  if (typeof a !== "number" || typeof b !== "number" || typeof c !== "number") {
    return "provide a number";
  }

  if (a < 0 || b < 0 || c < 0) {
    return "provide a positive number";
  }

  if (a % 1 !== 0 || b % 1 !== 0 || c % 1 !== 0) {
    return "provide an integer number";
  }

  const friend1 = 21;
  const friend2 = 32;
  const friend3 = 43;

  const total = a * friend1 + b * friend2 + c * friend3;

  if (total > 2000) {
    return total - 2000;
  } else {
    return total;
  }
}
console.log(gemsToDiamond(20, 200, 50)); //6970
console.log(gemsToDiamond("2", 200, 50)); //provide a number
console.log(gemsToDiamond(2, -200, 50)); //provide a positive number
console.log(gemsToDiamond(2, 200, 50.5)); //provide an integer positive number
