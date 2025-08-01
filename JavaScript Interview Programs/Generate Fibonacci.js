
// ********************************************************************************* fibonacci ***********************************************************************

// 1. Generate fibonacci of a Number:

// Generate Fibonacci of a number using for loop():
function fibonacciF(n) {
    let num1 = 0, num2 = 1, next;
    console.log("Fibonacci using for loop:");
    for (let i = 1; i <= n; i++) {
        console.log(num1);
        next = num1 + num2;
        num1 = num2;
        num2 = next;
    }
}
fibonacciF(7);
// Output:
// Fibonacci using for loop:
// 0
// 1
// 1
// 2
// 3
// 5
// 8

// OR

// Generate Fibonacci of a Number Using While Loop:
function fibonacciW(n) {
  let num1 = 0, num2 = 1, count = 0;
  console.log("Fibonacci Using While Loop:");
  while (count < n) {
    console.log(num1);
    let temp = num1 + num2;
    num1 = num2;
    num2 = temp;
    count++;
  }
}
fibonacciW(7);
// Output: 
// Fibonacci Using While Loop:
// 0
// 1
// 1
// 2
// 3
// 5
// 8

// 2.  Generate Fibonacci of a Number Using Recursion
function fibonacciR(n) {
    if (n <= 1) return n;
    return fibonacciR(n - 1) + fibonacciR(n - 2);
}
// Print first N Fibonacci numbers
let n = 7;
console.log("Fibonacci using Recursion:");
for (let i = 0; i < n; i++) {
    console.log(fibonacciR(i));
}
// Output:
//Fibonacci using Recursion:
// 0
// 1
// 1
// 2
// 3
// 5
// 8
