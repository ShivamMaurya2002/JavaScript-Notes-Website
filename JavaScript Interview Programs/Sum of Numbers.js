// Common Ways to Add Numbers In JavaScript

// 1. Normal Variable Addition (Direct Way)
    const a = 10;
    const b = 20;
    const sum = a + b;
    console.log("Addition of two number:", sum);
    // output: 
    // Addition of two number: 30

// 2. Using Function()

    // Function to calculate the sum of two numbers using a temporary variable:
    function Sum(a, b){
        const c = a + b;
        return c;
    }
    console.log("Sum:", Sum(4,5));
    // Output: 
    // Sum: 9

    // OR

    // Function to return the sum of two numbers directly
    function Sum(a, b) {
        return a + b;
    }
    console.log(Sum(3, 7));
    // Output:
    // 10 

// 3.  Using Arrow Function
    // One-liner arrow function to add two numbers
    const add = (a, b) => a + b;
    console.log(add(10, 15)); 
    // Output: 
    // 25

    // OR 
    
    // Arrow function to add two numbers using a variable and return
    const Add = (a, b) => {
        const sum = a + b;
        return sum;
    }
    console.log("Sum of Two Number:", Add(3,2));
    // Output: 
    // 5

// 4. Using Rest Parameters ( Used For Multiple Inputs)
    function addAll(...nums) {
      let sum = 0;
      for (let n of nums) {
        sum += n;
      }
      return sum;
    }
    console.log(addAll(1, 2, 3, 4)); 
    // Output:
    // 10

//5. Using prompt() (User Input) – only browser
let arr = [1, 2, 3, 4];
let Sum = arr.reduce((a, b) => a + b, 0);
console.log("Sum:", sum); // Output: 10
