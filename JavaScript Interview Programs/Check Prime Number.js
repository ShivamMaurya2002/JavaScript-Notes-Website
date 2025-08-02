// ******************************************************************** Check Prime Number in Different Ways ********************************************************************

// 1. Check if a number is prime:

// Check if a number is prime using a basic loop (brut Force Method):
function isPrime(num) {

    if (num < 2) {
        return false;
    }

    for (let i = 2; i < num; i++) {
        if (num % i === 0) {
            return false;
        }
    }

    return true;
}
console.log("Is the given number prime?", isPrime(7));
// Output: 
// Is the given number prime?  true

// OR

// Check if a number is prime using a basic loop (brut Force Method):
const num = 7;
// Check if the number is prime
let IsPrime = true;
for (let i = 2; i < num; i++)
    {
        if (num % i === 0)
            {
                IsPrime = false;
                break;
            }
    }
    
console.log("Is The Given Number Prime?", IsPrime); 
// Output: 
// Is The Given Number Prime? true

// 2. Check if a number is prime Using Arrow Function:
const Prime = (n) => {

    if (n < 2) return false;
    
    for (let i = 2; i <= Math.sqrt(n); i++) {

        if (n % i === 0) return false;

    }

  return true;

};

console.log("Is prime?", Prime(11)); 
// Output:
// Is prime? true