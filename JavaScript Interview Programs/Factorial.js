
// ******************************************************** Factorial **************************************************

// 1. Find Factorial of a Number:
// Find factorial using loop:
function factorial(n) {
    let fact = 1;
    for (let i = 1; i <= n; i++) {
        fact *= i; // fact = fact * i;
    }
    return fact;
}
console.log("Factorial (using For Loop):", factorial(5));
// Output: 
// Factorial (using For Loop): 120

// OR

// Find factorial Using Recursion:
function factorial(n) {
    if (n <= 1) return 1;
    return n * factorialRec(n - 1);
}
console.log("Factorial using Recursion:", factorial(5));
// Output:
// Factorial using Recursion: 120
