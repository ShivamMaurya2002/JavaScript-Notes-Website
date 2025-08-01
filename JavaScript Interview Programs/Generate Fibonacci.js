
// ********************************************************************************* fibonacci ***********************************************************************

// 1. Generate fibonacci of a Number:

// Generate Fibonacci of a number using for loop():
function fibonacci(n) {
    let num1 = 0, num2 = 1, next;
    console.log("Fibonacci Sequence:");
    for (let i = 1; i <= n; i++) {
        console.log(num1);
        next = num1 + num2;
        num1 = num2;
        num2 = next;
    }
}
fibonacci(7);
// Output:
// Fibonacci Sequence:
// 0
// 1
// 1
// 2
// 3
// 5
// 8

// OR

// Generate Fibonacci of a Number Using While Loop:
function fibonacci(n) {
  let num1 = 0, num2 = 1, count = 0;
  console.log("Fibonacci Series:");
  while (count < n) {
    console.log(num1);
    let temp = num1 + num2;
    num1 = num2;
    num2 = temp;
    count++;
  }
}
fibonacci(7);
// Output: 
// 0 1 1 2 3 5 8

// 2. Generate Fibonacci of a Number Using Recursion:
function fibonacci(n) {
    if (n <= 1) return n;
    return fibonacci(n - 1) + fibonacci(n - 2);
}
// Print first N Fibonacci numbers
let n = 7;
console.log("Fibonacci using recursion:");
for (let i = 0; i < n; i++) {
    console.log(fibonacci(i));
}
// Output: 
