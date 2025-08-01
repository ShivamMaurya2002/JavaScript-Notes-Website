
// *************************************************************** Generate Factorial of a Number in Different Ways **********************************************************

// 1. Generate Factorial of a Number:

// factorial using for loop:
function factorial(n) 
{
    let fact = 1;
    for (let i = 1; i <= n; i++) 
    {
        fact *= i; // fact = fact * i;
    }
    return fact;
}
console.log("Factorial using For Loop:", factorial(5));
// Output: 
// Factorial using For Loop: 120

// 2. factorial Using Recursion:
function factorial(n)
{
    if (n <= 1){
        return 1;
    }
    return n * factorial(n - 1);
}
console.log("Factorial using Recursion:", factorial(5));
// Output:
// Factorial using Recursion: 120

// OR 

// factorial Using Recursion (with If-Else):
function factorial(n) 
{
    if (n === 0 || n === 1) 
    {
        return 1;
    } 
    else 
    {
        return n * factorial(n - 1);
    }
}
const number = 5;
const result = factorial(number);
console.log("Factorial of", number, "is:", result);
// Output:
// Factorial of 5 is: 120
