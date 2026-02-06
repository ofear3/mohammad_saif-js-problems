//* ===========================================================*//
//* ===============Use "Better Comments" EXTENSION=============*//
//* ====================For Better Experience👨‍💻================*//
//* ===========================================================*//

//todo node 3additional-intermediate.js

const out = console.log ;

//! 1. Fibonacci Sequence – Generate the Fibonacci sequence up to n terms.

//? SOLUTION:
out("================Problem No : 01================")
let N = 5;

function fibo() {
    let a = 0, b = 1;
    let result = a + " " + b;

    for (let i = 2; i < N; i++) {
        let next = a + b;
        result += " " + next;
        a = b;
        b = next;
    }

    console.log(result);
}

fibo(); //output: 0 1 1 2 3


//! 2. Armstrong Number Check – Check whether a number is an Armstrong number.

//? SOLUTION:
out("================Problem No : 02================")
let num = 153
let numtoArray = num.toString().split('').map(Number);
let sum = 0;
for(let item of numtoArray){
    sum += Math.pow(item,3);
}
if(num === sum) out(`The number ${num} is an Armstrong Number.`);
else out(`The number ${num} is not an Armstrong Number,`) ;
//output:  The number 153 is an Armstrong Number.

//! 3. Reverse a Number –  Reverse the digits of an integer. E.g., 123 → 321.

//? SOLUTION:
out("================Problem No : 03================")
let Num = 123;
let NumtoString = Num.toString();
let rev_String = NumtoString.split('').reverse().join("");
out(`The reverse of the number ${Num} is `, Number(rev_String));
//output : The reverse of the number 123 is  321


//! 4. Compute GCD – Find the greatest common divisor of two numbers.

//? SOLUTION:
out("================Problem No : 04================")
function gcd(a, b) {
    while(b !== 0) {
        let temp = b;
        b = a % b;
        a = temp;
    }
    return a;
}

let num1 = 36;
let num2 = 60;

console.log(`GCD of ${num1} and ${num2} is ${gcd(num1, num2)}`);
// Output: GCD of 36 and 60 is 12

//! 5. Check Leap Year – Determine whether a year is a leap year.

//? SOLUTION:
out("================Problem No : 05================")
function leapyear(year) {
  
    if (year % 400 === 0) {     
        console.log(year + " is a Leap Year.");
    }
    else if (year % 100 === 0) {        
        console.log(year + " is NOT a Leap Year.");
    }
    else if (year % 4 === 0) {      
        console.log(year + " is a Leap Year.");
    }
    else {
        console.log(year + " is NOT a Leap Year.");
    }

}

leapyear(2026);

//output : 2026 is a NOT a Leap Year.

//! 6. Binary ↔ Decimal Conversion – Convert between binary and decimal numbers.

//? SOLUTION:
out("================Problem No : 06================")



//! 7. Flatten Nested Array – Flatten a deeply nested array into a single‑level array.

//? SOLUTION:
out("================Problem No : 07================")
