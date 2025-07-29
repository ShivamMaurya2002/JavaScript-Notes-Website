
// ******************************************************** Factorial **************************************************

// 1. Factorial of a number:
// Using For Loop:
function factorial(n) {
    let fact = 1;
    for (let i = 1; i <= n; i++) {
        fact *= i; // fact = fact * i;
    }
    return fact;
}
console.log("Factorial (using For Loop):", factorial(5));
