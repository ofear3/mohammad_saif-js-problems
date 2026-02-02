//* ===========================================================*//
//* ===============Use "Better Comments" EXTENSION=============*//
//* ====================For Better Experience👨‍💻================*//
//* ===========================================================*//

const out = console.log; // shortcut :) 

//! 1. Reverse a String – Reverse a given string.

//? SOLUTION: 

let string = "Hello World"; // assume a string and store in "string" variable
let rev_string = ""; //decalring a variable  name "rev_string" and initialize as empty string

for (let i = string.length - 1; i >= 0; i--) {
    rev_string += string[i];
}

out(`The Original String Is : ${string}`);
// output: The Original String Is : Hello World
out(`After the reverse the string is: ${rev_string}`)
// output: After the reverse the string is: dlroW olleH 


//! 2. Check Palindrome (String) – Check whether a string reads the same forward and backward.

//? SOLUTION: 

let text = "madam";
let Rev_String = "";

function palindrome(text) {
    for (let i = text.length - 1; i >= 0; i--) {
        rev_string += text[i];
    }

    if (text === Rev_String) out(`The String ${text} is a Palindrome String.`)
    else out(`The String ${text} is not a Palindrome String.`)
}

palindrome(text); // calling function and pass text variable which is storing "madam"
//output: The String madam is a Palindrome String.
palindrome("hello"); // calling function and pass direct text
//output: The String hello is not a Palindrome String.


//! 3. Find Largest Number in Array – Find the maximum number in an array.

let array = [10, 20, 50, 30, 40, 90, 70];
let maximum = Math.max(...array) //By accessing one by one element from the array find the maximum number from the array using Math.max()
out(`Array : `, ...array);
//output: Array : 10,20,50,30,40,90,70
out(`The maximum number from the array is: ${maximum}`);
//output: The maximum number from the array is:


//! 4. Factorial Calculator – Calculate the factorial of a non‑negative integer.

//? SOLUTION:

let anum = 7;

function fact(num) {
    if (num < 0) out(`Given Number is a Negative Number!`);
    else {
        let i, fact = 1;
        for (i = 1; i <= num; i++) {
            fact *= i;
        }
        let res = BigInt(fact);
        out(`Factorial of ${num} = ${res}`);
    }
}

fact(anum); //output: Factorial of 7 = 5040
fact(-5);  //output: Given Number is a Negative Number!



//! 5. FizzBuzz – Print numbers from 1 to 100 with Fizz, Buzz, and FizzBuzz rules.


//! 6. Sum of Array – Calculate the sum of all elements in an array.


//! 7. Count Vowels – Count the number of vowels in a given string.


//! 8. Prime Number Check – Determine whether a number is prime.


//! 9. Remove Duplicates (Array) – Remove duplicate values from an array.


//! 10. Merge Arrays – Merge two arrays and remove duplicates.
