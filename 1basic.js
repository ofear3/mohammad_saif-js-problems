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
//* Print numbers from 1 to 100. For multiples of 3, print "Fizz" instead of
//* the number; for multiples of 5, print "Buzz"; for multiples of both 3 and 5 print
//* "FizzBuzz".

//? SOLUTION:

for(let i = 1; i<=100; i++){
    if(i%3 === 0 && i%5 === 0) out(" FizzBuzz ");
    else if(i%5 === 0) out(" Buzz ");
    else if(i%3 === 0) out(" Fizz ");
    else out(` ${i} `);
}

//output : (1 - 15 -> )  1 2 Fizz 4 Buzz Fizz 7 8 Fizz Buzz 11 Fizz 13 14 FizzBuzz 

//! 6. Sum of Array – Calculate the sum of all elements in an array.

//? SOLUTION:

let arr =  [10,20,30,40];
let sum = arr.reduce((a,b) => a+b,0 ); //using "reduce" method
sum =0 ;
for(item of arr) sum+=item; //using "for of" loop
out(`The Sum of the Array : ${sum}`);

//! 7. Count Vowels – Count the number of vowels in a given string.

//? SOLUTION:

let text2 = "Milstone Exam" ;
let count = 0;
let text3 = text2.toLowerCase(); //convert into lowercase 
// out(text3);
for(let item of text3) {
    if("aeiou".includes(item)) count++;
}
out(`The number of vowels in text ${text2} is ${count}`);

// output: The number of vowels in text Milstone Exam is 5


//! 8. Prime Number Check – Determine whether a number is prime.

//? SOLUTION:

function isPrime(num) {

    if(num <= 1) return false;
    if(num == 2) return true;
    if(num%2 === 0) return false;

    for(let i = 3 ; i<Math.sqrt(num); i+=2) {
        if(num % i == 0 ) return false;
    }
    return true;
}

out(`Prime Status of number 7 is : `, isPrime(7));   //output: Prime Status of number 7 is :  true
out(`Prime Status of number 10 is : `, isPrime(10)); //output: Prime Status of number 10 is :  false

//! 9. Remove Duplicates (Array) – Remove duplicate values from an array.

//? SOLUTION:

let arraY = [1,2,3,4,5,1,2,3,4,5,1,2,3,4,1,2,3,4,1,2,3,4,5,1,2,3,4,5] ;

let newArraY = [...new Set(arraY)]; 

out(`The original array is : `, ...arraY) 
//output: The original array is : 1,2,3,4,5,1,2,3,4,5,1,2,3,4,1,2,3,4,1,2,3,4,5,1,2,3,4,5
out(`After remove duplicates value from the array the array is : `, ...newArraY) 
//output : After remove duplicates value from the array the array is : 1,2,3,4,5

//! 10. Merge Arrays – Merge two arrays and remove duplicates.

//? SOLUTION:

let arr1 = [1,2,3,4,5,8,9,10] ;
let arr2 = [3,4,5,6,7,8,9] ;
let arr3 = arr1.concat(arr2) ;
let newArray = [...new Set(arr3)];
out(`Array 1 : `, ...arr1) ;        //output : Array 1 :  1 2 3 4 5 8 9 10
out(`Array 2 : `, ...arr2) ;        //output : Array 2 :  3 4 5 6 7 8 9
out(`Merge Array : ` , ...arr3) ;   //output : Merge Array :  1 2 3 4 5 8 9 10 3 4 5 6 7 8 9
out(`After removing duplicates value from the merge array : ` , ...newArray);
//output: After removing duplicates value from the merge array :  1 2 3 4 5 8 9 10 6 7
out(`Sorted the new Array` , ...newArray.sort((a,b) => a-b)) ; // if we want to see as sorted array
//output: Sorted the new Array 1 2 3 4 5 6 7 8 9 10
