
// ******************************************************** Factorial **************************************************

// 1. Factorial of a number:

// Using For Loop:
function factorialLoop(n) {
    let fact = 1;
    for (let i = 1; i <= n; i++) {
        fact *= i;
    }
    return fact;
}
console.log("Factorial (Loop):", factorialLoop(5));