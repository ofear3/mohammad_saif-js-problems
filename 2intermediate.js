//* ===========================================================*//
//* ===============Use "Better Comments" EXTENSION=============*//
//* ====================For Better Experience👨‍💻================*//
//* ===========================================================*//

//todo node 2intermediate.js

const out = console.log; // shortcut :) 

//! 1. Find Missing Number (1–100) – Find the missing number from a sequence.

//? SOLUTION: 
out("================Problem No : 01================")
let array = [1, 2, 3, 5, 6, 7, 8, 9, 10]; // missing number is 4
let n = array[array.length - 1];
let sumOfActual = (n * (n + 1)) / 2;
let sumOfarray = array.reduce((a, b) => a + b, 0);
let missing_Number = sumOfActual - sumOfarray;
out(`The Missing number is: ${missing_Number}`);
//output : The Missing number is: 4


//! 2.Array Rotation – Rotate an array by a given number of positions.

//? SOLUTION: 
out("================Problem No : 02================")
function rotate(arr, n) {
  for (let i = 0; i < n; i++) {
    let first = arr.shift();
    arr.push(first);
  }
  return arr;
}

let Array_ = [1, 2, 3, 4, 5];
out(`Original Array is: `, ...Array_);  // output: Original Array is:  1 2 3 4 5
rotate(Array_, 2);
out(`Rotaing Array at second index: `, ...Array_);  //output : Rotaing Array at second index:  3 4 5 1 2

//! 3. Anagram Check – Check if two strings are anagrams.

//? SOLUTION: 
out("================Problem No : 03================")
let string1 = "hello";
let string2 = "olleh";
let sortedString1 = string1.split('').sort().join('');
let sortedString2 = string2.split('').sort().join('');

if (sortedString1 === sortedString2) out(`Strings are anagrams`);
else out(`Strings are not anagrams`);

//output : Strings are anagrams

//! 4. Find Duplicates – Return all values that appear more than once in an array

//? SOLUTION: 
out("================Problem No : 04================")
let Arry = [1, 2, 3, 1, 5, 4, 5];
let duplicates_Arry = "";
for (let i = 0; i < Arry.length; i++) {
  for (let j = i + 1; j < Arry.length; j++) {
    if (Arry[i] == Arry[j]) duplicates_Arry += Arry[i];
  }
}
duplicates_Arry = duplicates_Arry.toString().split('').map(Number);
if (duplicates_Arry) {
  out(`The Duplicate value: `,duplicates_Arry);
}
else out("There is no duplicate value in the array.")

//output: The Duplicate value: [ 1, 5 ]

//! 5. Capitalize Words – Capitalize the first letter of each word in a sentence.

//? SOLUTION: 
out("================Problem No : 05================")
let sentence = "i love javascript";
let result = "";
let capitalizeNext = true;

for (let i = 0; i < sentence.length; i++) {
  if (capitalizeNext && sentence[i] !== " ") {
    result += sentence[i].toUpperCase();
    capitalizeNext = false;
  } else {
    result += sentence[i];
  }

  if (sentence[i] === " ") {
    capitalizeNext = true;
  }
}
out("Capitalized:", result);
//output: Capitalized: I Love Javascript 

//! 6. Longest Word – Find the longest word in a sentence.

//? SOLUTION: 
out("================Problem No : 06================")
let words = ["apple", "banana", "cherry", "watermelon"];
let longest = words[0];

for (let i = 1; i < words.length; i++) {
  if (words[i].length > longest.length) {
    longest = words[i];
  }
}
out("Longest word:", longest);
//output: Longest word: watermelon

//! 7. Array Chunking – Split an array into chunks of a given size. E.g., chunking
//!    [1,2,3,4,5] by 2 yields [[1,2],[3,4],[5]]. 

//? SOLUTION: 
out("================Problem No : 07================")

let Arraya = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
let resultArray = [];

function chunking(Arraya, n) {
  for (let i = 0; i < Arraya.length; i = i + n) {
    resultArray.push(Arraya.slice(i, i + n));
  }
}

chunking(Arraya, 2); //Chunking by 2 yields

out(`New Chunking Array is: `, ...resultArray);
//output: New Chunking Array is:  [ 1, 2 ] [ 3, 4 ] [ 5, 6 ] [ 7, 8 ] [ 9, 10 ]


//! 8. Second Largest Number – Find the second largest number in an array.

//? SOLUTION: 
out("================Problem No : 08================")
let Array = [10, 20, 40, 50, 60];
out(`The array is: `, ...Array);  //output : The array is:  10 20 40 50 60
let tempArray = Array.sort();
let second_largest = tempArray[tempArray.length - 2];
out(`Second Largest element of the array: ${second_largest}`);
//output: Second Largest element of the array: 50

//! 9. Sum of Digits – Calculate the sum of digits of a number.

//? SOLUTION: 
out("================Problem No : 09================")
let num = 1234;
let digitsArray = num.toString().split('').map(Number);
let sumofdigit = digitsArray.reduce((a, b) => a + b, 0);
out(`The sum of digits: 1234 is ${sumofdigit}`); //output : The of digits: 1234 is 10
//output: The sum of digits: 1234 is 10

//! 10. Object Deep Clone – Create a deep copy of a JavaScript object.

//? SOLUTION: 
out("================Problem No : 10================")