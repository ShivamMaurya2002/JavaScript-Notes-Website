//Practice Set 1:-

/*  If... Else If... Else condition using alert() function:
alert(): This function is only available in web browsers. If you need to run the code in a browser environment, you can keep using alert().
let a=1;
if(a<0){
    alert("Invalid Age")
}
else if(a>0 && a<=9){
    alert("your age is less than 9 u cannot even think about driving:")
}
else if(a>9 && a<=18){
    alert("you are above 9 u can think about driving after 18:")
}
else{
    alert("you are above 18 u can now drive:")
}*/




/*  If... Else If... Else condition using console.log() function
console.log(): This function is used to print messages to the console, making it suitable for Node.js.
let a = 19;
if (a <= 0) {
    console.log("Invalid Age");
} else if (a > 0 && a <= 9) {
    console.log("Your age is less than 9, you cannot even think about driving.");
} else if (a > 9 && a < 18) {
    console.log("You are above 9, you can think about driving after 18.");
} else {
    console.log("You are 18 or above, you can now drive.");
}*/




/* switch case
 let a = 10;
 switch(a){
    case 3:
        console.log("This is 1st case " + a + " is not equal to:",a);
        break;
    case 5:
        console.log("This is 2nd case " + a + " is not equal to:",a);
        break;
    case 10:
        console.log("This is 3rd case " + a + " is equal to:", a);
        break;
    default:
        console.log("Invalid Input:");
 }*/





/* Checking age between 10 and 15 using if else

// Import the readline module for capturing user input
const readline = require('readline');

// Create an interface to read input from the command line
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

// Ask the user for their age
rl.question("What is your age? ", (age) => {
  // Convert the input string to a number using parseInt
 age = Number.parseInt(age);
    if(age>10 && age <=20)
        {
            console.log("Your age is between 10 and 20:")
        }
    else{
        console.log("Your age is not between 10 And 20:")
    }
});
*/



/*
// this code will run in terminal using "node file_name  ex:- node JS_practice_Set.js"

// Import the readline module for capturing user input
const readline = require('readline');

// Create an interface to read input from the command line
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

// Ask the user for their age
rl.question("What is your age? ", (age) => {
  // Convert the input string to a number using parseInt
  age = parseInt(age);

  // Check the age and provide the appropriate message
  if (age > 10 && age <= 20) {
    console.log("Your age is between 10 and 20.");
  } else {
    console.log("Your age is not between 10 and 20.");
  }

  // Close the interface to end the input process
  rl.close();
});
*/


/* Check Whether the given number is divisible by 2 and 3 or not:
// Import the readline module for capturing user input
const readline = require('readline');

// Create an interface to read input from the command line
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

// Ask the user for their age
rl.question("Enter the number ", (num) => {
  // Convert the input string to a number using parseInt
  num = parseInt(num);

  // Check the age and provide the appropriate message
  if (num%2==0 && num%3==0) {
    console.log("Number is Divisible by 2 and 3.");
  } else {
    console.log("Number is not Divisible by 2 and 3.");
  }

  // Close the interface to end the input process
  rl.close();
});
*/


/*
// Check Whether number is divisible by either 2 or 3:
// Import the readline module for capturing user input
const readline = require('readline');

// Create an interface to read input from the command line
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

// Ask the user for their age
rl.question("Enter the number ", (num) => {
  // Convert the input string to a number using parseInt
  num = parseInt(num);

  // Check the age and provide the appropriate message
  if (num%2==0) {
    console.log("Number is Divisible by 2");
  }
  else if (num%3==0)
  {
    console.log("Number is Divisible by 3.");
  }

else{
    console.log("Number is not Divisible by 2 and 3.");
}
  // Close the interface to end the input process
  rl.close();
});*/




/* print "you can drive" or "You can not drive" based on age being greater than 18 using ternary operator
// Import the readline module for capturing user input
const readline = require('readline');

// Create an interface to read input from the command line
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

// Ask the user for their age
rl.question("Enter Your Age ", (age) => {
  // Convert the input string to a number using parseInt
  age = parseInt(age);

  // ternary operator
  let a = age>18 ? " You Can Drive":"You Can Not Drive"
  console.log(a)
});
*/


// Practice Set 2:-
/*
//find sum the of n natural number using For loop:-
 let sum = 0;
// Import the readline module for capturing user input
const readline = require('readline');

// Create an interface to read input from the command line
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

// Ask the user for their age
rl.question("Enter the value of n:", (n) => {
  // Convert the input string to a number using parseInt
 n = Number.parseInt(n);


//first way
console.log("first way:")
for(let i = 0; i <= n; i++){
  sum += i;
}
console.log("Sum of the first " + n + " natural number is", sum);

//Second Way
console.log("Second way:")
sum =0;
for(let i = 0; i < n; i++){
  sum = sum + (i+1);
  console.log( "iteration", i, "+", sum)
}
console.log("Sum of the first " + n + " natural number is", sum);

});
*/
/*
//find the Factorial of given number using for loop
let n = 5;
let factorial = 1;

//first way
for(let i = 1; i <= n; i++) {
  factorial = factorial * i;
  console.log(i, "*", factorial)
}
console.log("Factorial of", + n + " is: ", factorial);

//second way
for(let i = 0; i < n; i++) {
  factorial *= i+1;
}
console.log("Factorial of", + n + " is: ", factorial);
*/

/*
// For in loop Example (using object):
let car = {
  brand: "ford",
  price: 800000,
  Color: "red",
  speed: 25
}
console.log("Car Details:")
for(let i in car){
  console.log( i, ":", car[i])
}
*/

/*
// For of loop Example (using Array):
let Rajesh = [
  "Math: 65",
  "English: 80",
  "Hindi: 95",
  "Science: 85",
  "computer: 75"
]
for(let a of Rajesh){
  console.log("Marks of Rajesh in:",a)
}
*/


/*
// Take input from user and perform "while loop" tasks using "readline" module:
const readline = require('readline');
const rl= readline.createInterface({
  input: process.stdin,
  output: process.stdout
});
rl.question("Enter the number:", (n)=>{
n = Number.parseInt(n);
i=0;
 while(i<n){
  console.log(i)
  i++;
 }
});
*/


/*
// Take input from user and perform "while loop" tasks using "prompt-sync" module:
// Import the 'prompt-sync' module
const prompt = require('prompt-sync')();

// Take input from the user
const n = prompt("Enter a number: ");

// Convert the input string to a number
const num = Number.parseInt(n);

let i = 0;
while (i < num) {
  console.log(i);
  i++;
}
*/


/*
//perform Do-While loop task by taking input using "Prompt-sync" module:
const prompt= require('prompt-sync')();
const n = prompt("Enter the number:")
num =Number.parseInt(n);

// main code
i=0;
do{
    console.log(i);
    i++;
  }
  while(i<n)
*/


/*
//perform Do-While loop task by taking input using "readline module":
const readline = require('readline');
const rl = readline.createInterface({
input: process.stdin,
output: process.stdout
});
rl.question("Enter the number:", (n) =>{
n=Number.parseInt(n);

// main code
i=0;
do{
  console.log(i);
  i++;
}
while(i<n)

});
*/


/*
// example of try...catch...finally block
function divideNumbers(a, b) {
  try {
    // Code that may throw an error
    let result = a / b ;
    console.log("Result of", + a + " divided by " + b + " is:", result);
  } catch (error) {
    // Code to handle the error
    console.error("An error occurred:", error.message);
  }
  finally {
    // Code that will always run, regardless of an error
    console.log("Execution completed, whether an error occurred or not.");
 }
}

// Call the function with valid numbers
divideNumbers(10, 2);

// Call the function with zero as the divisor to cause an error
divideNumbers(-10, 0);
*/


/*
// throw custom error:
function validateInput(input) {
  if (input < 0) {
    throw new Error("Input must be a positive number.");
  }
  return input;
}

try {
  validateInput(5);
  console.log("successfully Executed:")
} catch (error) {
  console.error("Validation error:", error.message);
}
*/

/*
// Parent class
class Animal {
  constructor(name) {
    this.name = name;
  }

  sound() {
    console.log(`${this.name} makes a sound.`);
  }
}

// Child class inheriting from Animal
class Dog extends Animal {
  bark() {
    console.log(`${this.name} barks.`);
  }
}

// Creating an instance of the Dog class
const myDog = new Dog('Buddy');
myDog.sound(); // Output: Buddy makes a sound.
myDog.bark();  // Output: Buddy barks.
*/

/* // Reverse of the string
function reverseString(str) {
  return str.split('').reverse().join('');
}

const input = "Hello, World!";
const reversed = reverseString(input);
console.log(reversed);
*/



/*
// Functions in javascript
//Old way to declare functions in javascript
function Avg(x, y)
{
  return (x + y)/2
}
let a=1;
let b = 2;
let c  = 3;
console.log( "Average of a and  b", Avg(a , b) )
console.log( "Average of a and  b", Avg(b , c ))
console.log( "Average of a and  b", Avg(c , a) )

// New way to declare function in js after ES6 update , using "Arrow function"
// Arrow Function Without An Arguments In JavaScript :
const hello  =  ()=>{
  console.log("It is an example of Arrow function in javascript:")
}
hello();

// if it is returning any value
const Hello = () =>{
  return "hi"
}
let x = Hello();
console.log(x)

//  Arrow function with Arguments in JacaScript :
const sum = (p, q) =>{
  return p+q
}
console.log(sum(7, 8 ))
*/

/*
// Practice Set 3:-

// Question(1). Write a program to print the marks of an student in an object using for loop.
let marks1 = {
  shivam: 80,
  shubham: 83,
  satyam: 85,
  Pawan: 60,
};

for (let i = 0; i < Object.keys(marks1).length; i++)
  {
    console.log("The Marks Of " + Object.keys(marks1)[i] + " are " + marks1[Object.keys(marks1)[i]] + " out of 100.");
   // "Object.keys(marks)[i]" gives the *i-th key* from the *array of keys* of the 'marks' object.
   // "marks[Object.keys(marks)[i]]" retrieves the *value* associated with the *key* at position *i*.
  }



//Question(2). Write a program in Q1 using for in loop .
let marks = {
  shivam: 90,
  shubham: 85,
  satyam: 95,
  Pawan: 84,
};
for(let key in marks)
  {
    console.log("The marks of " + key +  " are " + marks[key] + " Out of 100.")
  }


  //Question(3). Write a JS program to print "try again" until the user prints the correct number.
  const prompt = require('prompt-sync')();
  let CorrectNumber = 5;
  let i;
  while (i != CorrectNumber)
    {
      console.log("Please Try Again..");
      i = parseInt(prompt("Enter a number: "));
    }
  console.log("Correct Number Entered.....");


 //Question(4). Write a function to find mean of 5 numbers.
  const mean = (a, b, c, d, e) => {
    return (a + b + c + d + e) / 5
  }
  console.log("The Mean of 5 numbers are:", mean(4,5,6,7,9))
*/


// Strings in JavaScript:-

// let name1 = "Shivam Maurya"
// console.log(name1.length)

// let friends = 'rajesh'
// console.log(friends + " " + friends.length)

// let name2 = "SATYAM"
// console.log(name2[0])
// console.log(name2[1])
// console.log(name2[2])
// console.log(name2[3])
// console.log(name2[4])
// console.log(name2[5])


// Templates Literal in String in JS:-
// With the help of template literal, We can use both single and double quotes inside a string.
// What is String Interpolation in JS?
// The process of inserting variables directly in Templates Literal are known as String Interpolation.
// let a = "10"
// let b = "5"
// let c = `${a} > ${b}`
// console.log(c)

// let boy1 = "Ramesh"
// let boy2 = "Rajesh"
// let boys = `${boy1} is a friend of ${boy2}`
// console.log(boys)


// "Escape Sequance Characters in JS":-.
//Escape sequences are character combinations that have a special meaning, usually marked by a preceding or terminating character. Here are some examples of escape sequences:
//\r: Carriage return
//\t: Horizontal tab
//\v: Vertical tab
//\': Single quotation mark
//\n: Newline
//\\: Backslash
//\ooo: Indicates an ASCII character in octal notation
//\?: Question mark
//Null character: Terminates the string or character literal
//Octal value: Inserts the character represented by the octal value
//Hexadecimal value: Inserts the character represented by the hexadecimal value
//Universal character name: Inserts the character represented by the Unicode value
// let name4 = 'rahul\'maurya'
// console.log(name4)

// let r = 'rajan \nmaurya'
// console.log(r)


// let s = "Harry"
// console.log(s.toUpperCase()) // It will Convert string into Upper Case.
// console.log(s.toLowerCase()) // It Will convert String into Lower Case.
// console.log(s.slice(2, 4)) // The slice() method of Array instances returns a shallow copy of a portion of an array into a new array object selected from start to end ( end not included) where start and end represent the index of items in that array. In this Example it will show the 2nd and 3rd characters in a word, excluding the 4th character.