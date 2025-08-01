
// *************************************************************** Common Ways to Add Numbers in JavaScript ****************************************************************

/* 1. Normal Variable Addition (Direct Way) */
const a = 10;
const b = 20;
const sum = a + b;
console.log("Addition of two number:", sum);
// Output: 
// Addition of two number: 30

/* 2. Using Function(): */

// Function to return the sum of two numbers directly (Without a temporary variable):
function Sum1(a, b) {
    return a + b;
}
console.log(Sum1(4, 5));
// Output: 9

// OR

// Function to calculate the sum of two numbers using a temporary variable:
function Sum2(a, b) {
    const c = a + b;
    return c;
}
console.log("Sum:", Sum2(4, 5));
// Output: 
// Sum: 9

/* 3. Using Arrow "=>" Function: */

// One-liner arrow function to add two numbers
const add = (a, b) => a + b;
console.log(add(3, 2)); 
// Output: 5

// OR 

// Arrow function to add two numbers using a variable and return
const Add = (a, b) => {
    const sumArrow = a + b;
    return sumArrow;
}
console.log("Sum of Two Number:", Add(3, 2));
// Output: 
// Sum of Two Number: 5

/* 4. Using Rest (...) Parameters (Used for Multiple Inputs): */

// Function to add any number of values using rest parameters
function addAll(...num) {
    let sumRest = 0;
    for (let n of num) {
        sumRest += n; // sumRest = sumRest + n;
    }
    return sumRest;
}
console.log(addAll(1, 2, 3, 4)); 
// Output: 
// 10

/* 5. Using reduce() Method (on array): */

// Use reduce() to calculate the sum of array elements
let arr = [1, 2, 3, 4, 5];
let ADD = arr.reduce((a, b) => a + b, 0);
console.log("Addition:", ADD); 
// Output: 
// Addition: 15

// OR

// Using reduce() Method with Arrow Function & Curly Braces
let arr1 = [1, 2, 3, 4, 5];
let Add1 = arr1.reduce((a, b) => {
    return a + b;
}, 0);
console.log("Addition of the numbers in an Array:", Add1); 
// Output:
// Addition of the numbers in an Array: 15

/* 6. Using forEach() to Add All Numbers in an Array: */

// forEach() method to calculate the sum of an array elements using Arrow Function:
let arr2 = [1, 2, 3, 4, 5, 6];
let sum2 = 0;
arr2.forEach(num => sum2 += num);
console.log("Addition using forEach (using arrow function):", sum2); 
// Output:
// Addition with forEach() (using arrow function): 21

// OR

// forEach() to calculate sum of array elements
let arr3 = [1, 2, 3, 4, 5, 6];
let sum3 = 0; 
// Loop through each element in the array and add it to sum
arr3.forEach(function (num) {
    sum3 += num; // sum = sum + num
});
console.log("Addition using forEach():", sum3); 
// Output: 
// Addition using forEach(): 21
