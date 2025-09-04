
//JavaScript Practice Code 

// Variables in JavaScript:
let fristname = "shivam"
let lastname = "maurya"
console.log("Hi my name is " +fristname+ ' ' +lastname)

let globalVar = "I am global"; // Global variable 

// *******************************************************************************************************************

function example() {
  console.log(globalVar); // ✅ Accessible inside the function
}
example();
//console.log(globalVar); // ✅ Accessible outside the function

//********************************************************************************************************************

//sum of two number
let a = 5;
let b = 6;
function addtwonumber() {
    var c = a + b;
    console.log("Sum of two number is", c)
}
addtwonumber();

/* *************************************************************************************************************** */

//addition of two number
function add(a, b, c) {
    console.log("Sum of three number is ", a + b + c)
}
add(3, 4, 5);

// ********************************************************************************************************************

//example of block scope (let)
function username() { //block
    let firstname = "shivam"
    let lastname = "maurya"
    console.log("my name is", firstname, lastname)
} //block 
username();

// ********************************************************************************************************************

//example of function scope (var)
function sub(a, b) //Called fuction 
{
    var a = 5
    var b = 2
    var c = a - b
    console.log("Subtraction of Two number is", c)
}
sub(); // Calling function 

// ********************************************************************************************************************

//Example of block scope (cost)
function mul() {
    const h = 7
    const e = 5
    const g = h * e
    console.log("Multiplication of two digit is", g)
}
mul()

// ********************************************************************************************************************

// Example of object
let person = {
    name: "Alice",   // "name" is the key, "Alice" is the value
    age: 25,         // "age" is the key, 25 is the value
    isStudent: true  // "isStudent" is the key, true is the value
};
console.log(person.name, person.age, person.isStudent)
 
// ********************************************************************************************************************

//Example of Array 
let ramayana = ["ram", "sita", "lakshman"];
console.log(ramayana);
console.log(typeof ramayana);
console.log(ramayana.length);
console.log(Array.isArray(ramayana));

let fruit = ["mango", "orange", "apple"]
console.log(fruit)
console.log(typeof fruit)

// ********************************************************************************************************************

/*
// var is hoisted,that means it is moved to the top during execution but remains undefined until assigned.
console.log(a); // ✅ undefined (Variable is hoisted)
var a = 5;
console.log(a); // ✅ 5
*/

// ********************************************************************************************************************

/*
// example of let (let cannot be redeclared)
let name6 = "shivam";
console.log(name6);

let name6 = "raju"; // ❌ SyntaxError: Identifier 'city' has already been declared
console.log(name6); // ❌ SyntaxError: Identifier 'city' has already been declared
*/

// ********************************************************************************************************************

/*
// Write a function that returns another function until all three numbers are provided?
function mul1(p) {
    return function mul2(q) {
        return function mul3(r) {
            return p * q * r
        }
    }
}
console.log(mul1(2)(4)(8))
// alert("this may cause an issue later...");
*/

// ********************************************************************************************************************

/*
// Example of template literal in javascript 
let lastfournumber = 7876;
var templateliteral1 = `last four digit of my account number ` + lastfournumber
console.log(templateliteral1)

let templateliteral = `last four digit of my account number `.concat(lastfournumber)
console.log(templateliteral)

let lastfournumberOfAcc = "8855";
let strtemplateliteral = `My account number is ${lastfournumberOfAcc.padStart(16, '*')}.`
console.log(strtemplateliteral);

let text = "My name is Shivam";
console.log(text.indexOf("Shivam"));
*/

// ********************************************************************************************************************

/*
// Example of charCodeAt() string method in JavaScript 
let text1 = "Shivam";
console.log(text1.charCodeAt(1));  // 104

let text = "Shivam";
let index = 0; // Specify index
console.log(`Unicode code (ASCII) of '${text.charAt(index)}' at index ${text.indexOf(text.charAt(index))} is: ${text.charCodeAt(index)}`);
*/

// ********************************************************************************************************************

/*
// Example of Split() method:
let fruits = "apple,banana,mango,orange";
console.log(fruits.split(","));

let text = "apple,banana,cherry";
let fruits = text.split(",");
console.log(fruits);
*/

// ********************************************************************************************************************

/*
// Example of Palindrome in JavaScript :
let name4 = prompt("Enter your name :");
let rev = name4.split("").reverse().join("");
if (name4 == rev) {
    console.log("Palindrome");
}
else {
    console.log("Not palindrome");
}
*/

// ********************************************************************************************************************

/*
// Incremental and Decremental operators in JavaScript :
let x = 5;
x++;
console.log(x);

let y = 5;
y--;
console.log(y);

//Another Example of Incremental and Decremental operators:
let e = 5;
e++;
console.log(e);
e--;
console.log(e);

let y = 21;
y %= 2;  // y = y % 2 → y = 1
console.log(y);
*/

// ********************************************************************************************************************

/*
//logical AND (&&) Example in javascript :
let mathMark = 88;
if (mathMark >= 80 && mathMark <= 90) { // both conditions are true in this example. 
    console.log("You Scored between 80 - 90 in Mathematics.");
} else {
    console.log("You Scored less than 80 or more than 90 in Mathematics.");
}
*/

// ********************************************************************************************************************

/*
//logical OR (||) Example in javascript :
let englishMark = 92;
if (englishMark >= 90 || englishMark >= 95) { // At least one condition is true in this example.
    console.log("You Scored between 90 - 95 Mark in English");
} else {
    console.log("You Scored outside the range 90 - 95 in English.");
}

// logical OR (||) Example in javascript :
let ChemistryMark = 96;
if (ChemistryMark <= 90 || ChemistryMark <= 95) { // both conditions are false in this example. 
    console.log("You Scored between 90 - 95 in Chemistry.");
} else {
    console.log("You Scored outside the range (90 - 95) in Chemistry.");
}
*/

// ********************************************************************************************************************

/*
// IF Statement Example in javascript :
const username = prompt('Please Enter Your Name.');
const userAge = parseInt(prompt('Please Enter Your Age.'));

console.log(`Name: ${username}`);
console.log(`Age: ${userAge}`);

if (userAge >= 0 && userAge <= 4) {
    console.log(`${username} is a kid.`);
    console.log('And he/she is playing.');
}

if (userAge >= 5 && userAge <= 17) {
    console.log(`${username} is a school student.`);
    console.log('And he/she is learning science and maths.');
}

if (userAge >= 18 && userAge <= 24) {
    console.log(`${username} is a college student.`);
    console.log('And he/she is learning computer science.');
}

if (userAge >= 25 && userAge <= 45) {
    console.log(`${username} is a working professional.`);
    console.log('And he/she is a web developer.');
}

if (userAge > 45) {
    console.log(`${username} is retired.`);
    console.log('And he/she reads newspaper.');
}
*/

// ********************************************************************************************************************

/*
//Else If Statement Example in javascript 
const username1 = prompt('Please Enter Your Name.');
const userAge1 = parseInt(prompt('Please Enter Your Age.'));

console.log(`Name: ${username1}`);
console.log(`Age: ${userAge1}`);

if (userAge1 >= 0 && userAge1 <= 4) {
    console.log(`${username1} is a kid.`);
    console.log('And he/she is playing.');
}

else if (userAge1 >= 5 && userAge1 <= 17) {
    console.log(`${username1} is a school student.`);
    console.log('And he/she is learning science and maths.');
}

else if (userAge1 >= 18 && userAge1 <= 24) {
    console.log(`${username1} is a college student.`);
    console.log('And he/she is learning computer science.');
}

else if (userAge1 >= 25 && userAge1 <= 45) {
    console.log(`${username1} is a working professional.`);
    console.log('And he/she is a web developer.');
}

else if (userAge1 > 45) {
    console.log(`${username1} is retired.`);
    console.log('And he/she reads newspaper.');
}
*/

// ********************************************************************************************************************

/*
//Example of  Ternary Operator Inside a Function:
function checkPass(marks) {
    return marks >= 65 ? "Pass" : "Fail";
}
console.log(checkPass(75));
console.log(checkPass(55));


//Multiple Conditions in a Ternary Operator:
let result = 98;

let grade = result >= 90 ? `Your Grade is A. Because you have Scored: ${result}` :
    result >= 80 ? `Your Grade is B. Because you have Scored: ${result}` :
        result >= 70 ? `Your Grade is C. Because you have Scored: ${result}` :
            "You are Fail. Because you have Scored less than 65.";

console.log(grade);

// Simple example of ternary operator :
let Gender = 'Female'
let UserGender = Gender === 'Female' ? "She is a Frontend Web Developer." : "He is a Frontend Web Developer."
console.log(UserGender)


//Example of ternary operator using template literal:
let gender = 'F'
let userGender = `${gender === 'F' ? "Pooja" : "Pawan"} is a Frontend Web Developer.`
console.log(userGender)

//Example of Ternary Operator using Truthy and Falsy Value in JavaScript:
let gender2 = 'F'
let userGender2 = `${null ? "Pooja" : "Pawan"} is a Frontend Web Developer.`
console.log(userGender2)
*/

// ********************************************************************************************************************

/*
//converting uppercase to lowercase using .toLoweCase();
// Here, why we have used .toLoweCase(), because if we enter capital (F) and we have given small (f) in our condition,
// js compiler will treat is as different value and our condition will become false, so to make capital "F" in smaller "f" 
// we need to use .toLoweCase() string method in our code.
let gender1 = 'M'
let userGender1 = `${gender1.toLocaleLowerCase() === 'f' ? "Mamta" : "Viahal"} is a Frontend Web Developer.`
console.log(userGender1)
*/

// ********************************************************************************************************************

/*
//Example of an Object in JavaScript:
const user1 = {
    firstName: "Shivam",
    lastName: "Maurya",
    Age: 22,
    isGraduate: true,
}
console.log(user1);
console.log(user1.firstName);
console.log(user1.isGraduate);
console.log(user1["Age"]);
console.log(user1["lastName"]);
user1.city = "Bangalore";
user1.Age = 23;
console.log(delete user1.lastName);
console.log(user1);
*/

// ********************************************************************************************************************

/*
// Creating Object using New Object() in JavaScript:
let userInfo = new Object();
userInfo.name = "Shivam";
userInfo.age = 22;
userInfo.city = "Bangalore";
console.log(userInfo);
*/

// ********************************************************************************************************************

/*
// Creating Object using Constructor Function in JavaScript:
function user(name, age, city, isStudent) {
    this.name = name;
    this.age = age;
    this.city = city;
    this.isStudent = isStudent;
}

let user1 = new user("Shivam", 22, "Bangalore", false);
let user2 = new user("Satyam", 18, "Ayodhya", true);

console.log(user);
console.log(user2);
*/

// ********************************************************************************************************************

/*
// Creating Object using **Object.Create()** (Prototype-Based Inheritance in JavaScript:
// Define a Prototype Object
const UserPrototype =
{
    greet: function () {
        console.log(`Hello Guys!!, My name is ${this.name}, And I'm ${this.age} years old.`);
    }
};
// Create an Object Using Object.create()
let User1 = Object.create(UserPrototype);
// Add Properties to the Object
User1.name = "Shivam";
User1.age = 22;
User1.isStudent = false;

// Call the Inherited Method
User1.greet();
// Output: Hello, my name is John
*/

// ********************************************************************************************************************

/*
// Another example of Creating an Object Using Object.Create() method in JavaScript:
// Step 1: Define a Prototype Object
const personPrototype = {
    greet: function () {
        console.log(`Hello, my name is ${this.name}`);
    }
};
// Step 2: Create an Object Using Object.create()
let person1 = Object.create(personPrototype);
// Step 3: Add Properties to the Object
person1.name = "John";
person1.age = 25;
person1.isStudent = false;
// Step 4: Call the Inherited Method
person1.greet(); // Output: Hello, my name is John
// Step 5: Create Another Object Using the Same Prototype
let person2 = Object.create(personPrototype);
person2.name = "Alice";
person2.age = 22;
person2.isStudent = true;
// Step 6: Call the Inherited Method for the Second Object
person2.greet(); // Output: Hello, my name is Alice
console.log(person2.name);
console.log(person1);
console.log(person2.age);
*/

// ********************************************************************************************************************

/*
// using Bracket Notation to access property in object  
// Define an object
let user2 = {
    "full name": "Shivam",
    "last-name": "Maurya",
    age: 22,
    country: "India"
};

// // Access properties using bracket notation
console.log(user2["full name"]);
console.log(user2["last-name"]);
console.log(user2["age"]);
console.log(user2["country"]);
*/

// ********************************************************************************************************************

/*
// Example of Modifying an Object 
let vegetables = {
    name: "potato",
    color: "Brown",
    weight: "1kg",
    isOrganic: true,
}
console.log(vegetables);
// modifying existing properties :
vegetables.name = "tomato";
vegetables["color"] = "red"
console.log(vegetables);
*/

// ********************************************************************************************************************

/*
// Adding new properties to the object :
let car = {
    brand: "Toyota",
    model: "camry",
}
console.log(car);
car.year = 2022;
car["color"] = "Red";
console.log(car);
*/

// ********************************************************************************************************************

/*
//Prevent Adding New Property by using Object.preventExtensions() method 
let user = {
    name: "Shivam",
    age: 22,
    isStudent: false,
}
console.log(user);
Object.preventExtensions(user);
user.birthYear = 2002; // Doesn't Allows Adding New Property in this Object:  
user.age = 23; // Modifying Existing Properties is Allowed 
delete user.isStudent; // Deleting existing Properties is Allowed
console.log(user);
*/

// ********************************************************************************************************************

/*
// Prevents Adding or Deleting properties By using Object.Seal() method in Object in JavaScript:
let laptop = {
    brand: "DELL",
    Price: 55000,
    color: "Black",
}
console.log(laptop);

// Prevents Adding or Deleting properties
Object.seal(laptop);
laptop.weight = "1.4kg"; // Not Allowed
delete laptop.color; // Not Allowed
laptop.Price = 58000; // Allowed
console.log(laptop);
*/

// ********************************************************************************************************************

/*
// Prevents all modifications by using Object.freeze() method in object in javascript:
let score = {
    math: 36,
    english: 40,
    hindi: 45,
    isPass: true,
}
console.log(score);

// preventing all modifications in an object in javascript :
Object.freeze(score); // Completely Lock an Object

score.science = 45; // Adding New Property is Not Allowed
delete score.isPass; // Modifying Existing Properties is Not Allowed
score.hindi = 48; //  Deleting Properties is Not Allowed

console.log(score);
*/

// ********************************************************************************************************************

/*
//Object Methods: Object.keys(), Object.values(), Object.entries():
let laptop = {
    brand: "MSI",
    Price: 42000,
    color: "silver",
    weight: "1.4kg",
}
console.log(Object.keys(laptop));
console.log(Object.values(laptop));
console.log(Object.entries(laptop));
console.log(laptop);
*/

// ********************************************************************************************************************
/*
// Object Cloning (Copying Objects):
let newLaptop = { ...laptop };
console.log(newLaptop);
*/

// ********************************************************************************************************************
/*
//Object Destructuring (Extracting Properties)
let person = {
    name: "John",
    age: 25,
    isStudent: false
};
let { name, age } = person;
console.log(name);
console.log(age);
*/

// ********************************************************************************************************************

/*
// Nested Object in javascript :
let student = {
    name: "Shivam",
    age: 22,
    Scores:
    {
        Math: 35,
        English: 40,
        Science:
        {
            Biology: 48,
            Chemistry: 40,
            Physics: 38,
        }
    }
}
console.log(student.Scores.Science.Biology);// 48
console.log(student.name);// Shivam
console.log(student.Scores.Science);// {Biology: 48, Chemistry: 40, Physics: 38}
console.log(student.Scores);// {Math: 35, English: 40, Science: {…}}
console.log(student.Scores.English);
*/

// ********************************************************************************************************************

/*
//Stack memory in object in javascript :
let a = 10;
let b = a;  // A copy of 'a' is created in stack memory

b = 20;

console.log(a); // Output: 10
console.log(b); // Output: 20
*/

// ********************************************************************************************************************

/*
// Example of Heap memory in object in javascript :
let user = {
    name: "Shivam",
    age: 22,
    city: "Bangalore",
}
console.log(user);

let user1 = user;

user1.name = "Satyam";
user1.age = 18;
user1.city = "Ayodhya";

console.log(user);
console.log(user1);
*/


// ********************************************************************************************************************

/*
// Example of Shallow copy in object in javascript:
let obj1 = {
    name: 'Shivam',
    age: 22,
    city: 'Bangalore',
}
console.log(obj1);

let obj2 = obj1;

obj2.age = 23;

console.log(obj1);
console.log(obj2);
*/

// ********************************************************************************************************************

/*
// Example of Deep copy in object in javascript:
let user1 = {
    name: "shivam",
    age: 22,
    address: {
        city: "Bangalore",
        state: "Karnataka",
    }
};

let user2 = JSON.parse(JSON.stringify(user1));

user2.address.city = "Mangalore";
user2.age = 23;

console.log(user1);
console.log(user2);
*/

// ********************************************************************************************************************

/*
// Example of Garbage Collection in Object in JavaScript:
let user = {
    name: "shivam",
    age: 22
}
user = null;
console.log(user);
*/

// ********************************************************************************************************************

/*
// An Example of An Array in JavaScript:
let weekDays = ["Mon", "Tue", "Wed", "Thus", "Fri", "Sat", "Sun"];
console.log(weekDays);
*/

// ********************************************************************************************************************

/*
// Creating an Array Using Square Brackets([]) in JavaScript:
let fruits = ["mango", "apple", "Banana"];
console.log(fruits);
*/

// ********************************************************************************************************************

/*
// Creating an Array Using new Array() method in JavaScript:
let colors = new Array("Red", "Green", "Blue");
console.log(colors);
*/

// ********************************************************************************************************************

/*
// If we pass a single number inside new Array(), it creates an empty array of that length, instead of an array with one number.
let numbers = new Array(5);
console.log(numbers);
*/

// ********************************************************************************************************************

/*
//Creating an Empty Array:
//We can also create an empty array and add elements later.
let evenNumbers = [];
evenNumbers.push(2);
evenNumbers.push(4);
evenNumbers.push(6);
evenNumbers.push(8);
evenNumbers.push(10);
console.log(evenNumbers);
*/

// ********************************************************************************************************************

/*
//Storing Different Data Types in An Array in JavaScript?
let mixedArray = ["Hello", 25, true, { name: "John" }, [1, 2, 3]];
console.log(mixedArray);
*/

// ********************************************************************************************************************

/*
// Multidimensional Array (2D Array Or Nested Array) in JavaScript :
const TicTocToe = [['X', null, 'O'], [null, 'O', 'X'], ['X', null, 'X']]
console.log(TicTocToe);
console.log(TicTocToe[0][0]);
*/

// ********************************************************************************************************************

/*
// Higher Dimensional Array (3D Array Or Array inside array inside array) in JavaScript :
let cube = [
    [
        [1, 2],
        [3, 4]
    ],
    [
        [5, 6],
        [7, 8]
    ]
];
console.log(cube[1][0][1]);
*/

// ********************************************************************************************************************

/*
// while loop example in js :
let Friends = ["shivam", "subhash", "ravi", "anupam", "shravan"];
let i = 0;
while (i < Friends.length) 
{
    console.log(`${i}. ${Friends[i]} maurya`);
    i++
}
console.log("Program Ended:")

// while loop example in js :
let Friend = ["shivam", "subhash", "ravi", "anupam", "shravan"];
let j = 0;
while (j < Friend.length) {
    Friend[j] = Friend[j] + " maurya"
    console.log(`${j + 1}. ${Friend[j]}`)
    j++;
}

let i = 1; // Initialization
while (i <= 5) { // Condition
    console.log("Iteration:", i);
    console.log(i++); // Update (prevents infinite loop)
}

// printing 10 to 1 using while loop ;
let i = 10;
while (i >= 1) {
    console.log(i);
    i--; // Update (prevents infinite loop)
}
*/

// ********************************************************************************************************************

/*
// printing 10 to 1 using do...while loop in JavaScript:
let i = 10;
do {
    console.log(i);
    i--; // Update (prevents infinite loop)
}
while (i >= 1);
*/

// ********************************************************************************************************************

/*
// sum of 1 to 5 number using for loop in JavaScript:
let sum = 0;
for (let num = 1; num <= 5; num++) {
    sum = sum + num;
}
console.log("Sum of first 5 numbers:", sum);
*/

// ********************************************************************************************************************

/*
// print even numbers till given Number using for loop in javascript :
for (let num = 2; num <= 20; num++) {
    if (num % 2 == 0) {
        console.log(num);
    }
}
*/

// ********************************************************************************************************************

/*
// Print even numbers from the Given Array using for loop in javaScript:
let num = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20]
for (let i = 0; i < num.length; i++) {
    if (num[i] % 2 == 0) {
        console.log(num[i])
    }
}
*/

// ********************************************************************************************************************

/*
//Example of for...of loop with array in javascript :
let colors = ["Red", "Green", "Blue"];
for (let color of colors) {
    console.log(color);
}
console.log("for...of loop with array in javascript:")
*/

// ********************************************************************************************************************

/*
//Example of for...of loop with "String" in javascript:
let Myname = "Shivam";
for (let letter of Myname) {
    console.log(letter);
}
console.log("for...of loop with  String in javascript:")
*/

// ********************************************************************************************************************

/*
//Example of for...in loop with "Object" in javascript:
let user = {
    name: "Shivam",
    age: 22,
    city: "Bangalore"
};
for (let key in user) {
    console.log(`${key}: ${user[key]}`);
}

// Example of for...in loop with Array (Though for...in is not recommended for arrays, it still works by iterating over the index numbers) in javascript
let colors = ["Red", "Green", "Blue"];
for (let i in colors) {
    console.log(i, colors[i]);
}
*/

// ********************************************************************************************************************

/*
// Break Statement in for loops in javascript :
for (let i = 1; i <= 10; i++) {
    if (i === 5) {
        break;
    }
    console.log(i)
}
*/

// ********************************************************************************************************************

/*
// continue Statement in for loops in javascript :
for (let i = 1; i <= 10; i++) {
    if (i === 5) {
        continue;
    }
    console.log(i)
}
*/

// ********************************************************************************************************************
/*
// Using break and continue in while Loop in Javascript:
let i = 0;
while (i < 10) {
    i++;

    if (i === 6) {
        continue; // Skips 6
    }

    if (i === 10) {
        break; // Stops at 9
    }

    console.log(i);
}
*/

// ****************************************** Function ******************************************************

/*
//Function Declaration In JavaScript:
function Intro() // Function Keyword and Function Name
{
    console.log("Hi!");// Code to run / Function Statement
    console.log("My Name Is Shivam Maurya.");// Code to run / Function Statement
    console.log("I am a Frontend Web Developer.");// Code to run / Function Statement
}
Intro(); // Function Call
*/

// ********************************************************************************************************************

/*
//Function Argument and Parameter:
function myIntro(name, Profession)//(name) & (Profession) are parameters inside "myIntro()" function:
{
    console.log(`Hii!!, My Name Is ${name}.`);
    console.log(`I am a ${Profession}.`);
}
myIntro("Shivam Maurya", "Frontend Web Developer"); // Function call with Argument value (Shivam Maurya) & (Frontend Web Developer) to that Parameter
myIntro("Satyam Maurya", "Student");//Function call with Argument value (Satyam Maurya) & (Student) to that Parameter
myIntro("Shubham Maurya", "Doctor");//Function call with Argument value (Shubham Maurya) & (Doctor) to that Parameter
*/

// ********************************************************************************************************************

/*
//Function Parameter with Default value Before ES6 Update:
function Info(Name, Profession) {
    if (Name === undefined && Profession === undefined)//Condition to check whether name & Profession is present or not 
    {
        Name = "Ramesh";// Default Value for Name
        Profession = "Farmer";// Default Value for Profession
    }
    console.log(`Hii!!, My Name Is ${Name}.`);
    console.log(`I am a ${Profession}.`);
}
Info("Satyam Maurya", "Student");// With Arguments
Info();// Without Arguments.
console.log("\n");

//OR

//Another way of defining Parameter with Default value using Not(!) Logical Operator: 
function Info1(Name1, Profession1) {
    if (!Name1 && !Profession1) // Falsy value 
    {
        Name1 = "Abhi";// Default Value for Name
        Profession1 = "Business Man";// Default Value for Profession
    }
    console.log(`Hii!!, My Name Is ${Name1}.`);
    console.log(`I am a ${Profession1}.`);
}
Info1("Shivam Maurya", "Web Developer");// With Arguments
Info1();// Without Arguments.

//OR

//Function Parameter with Default value:
function MyIntro(name = "Raj", Profession = "Chor") {// Function parameters With Default value inside MyIntro()
    console.log(`Hii!!, My Name Is ${name}.`);
    console.log(`I am a ${Profession}.`);
}
MyIntro('Shivam', 'Web Developer');// Function Calling With Argument.
MyIntro();//Function Calling Without any Argument....

// OR

//Function Parameter with Default value:
function MyIntro(name, Profession, age) {// Function parameters With Default value inside MyIntro()
    console.log(`Hi.., My Name Is ${name || "Rahul Singh"}.`);
    console.log(`I am a ${Profession || "Teacher"}.`);
    console.log(`I am ${age || 30} years old.`);
    console.log("\n");
}
MyIntro('Shivam', 'Web Developer', 22);// Function Calling With Argument.
MyIntro();//Function Calling Without any Argument....
*/

// ********************************************************************************************************************

/*
// Function With return value: 
function sumOfTwoNumber() {
    return a + b;
}
let a = 5;
let b = 6;
let result = sumOfTwoNumber();
console.log(`Sum of ${a} & ${b} is:`, result);


//********OR********

function sum(c, d) {
    return c + d;
}
let c = 5;
let d = 6;
let result1 = sum(c, d);
console.log(`Sum of ${c} & ${d} is:`, result1);
*/

// ********************************************************************************************************************

/*
// Sum of two number using Function with return :
function sumOfTwoNumber(a, b) {
    return a + b;
}
let result = sumOfTwoNumber(5, 5);
console.log(result)


// Addition of two number without using return :
function sum(a, b) {
    console.log(a + b);
}
sum(3, 7);
*/

// ********************************************************************************************************************

/*
//Example of Function Parameter and Argument :
function greet(Fname, Lname) {
    console.log("Hello, " + Fname + ' ' + Lname + "!");
}
greet("Shivam", "Maurya")
*/

// ********************************************************************************************************************

/*
// Example of Returning an Object in function:
function getUser() {
    return { name: "Shivam", age: 22 };
}
let user = getUser();
console.log(user.name);
console.log(user.age);
console.log(user);
*/

// ********************************************************************************************************************

/*
// Function with no return:
function sum(a, b) {
    console.log("Function has no return statement:");
}
let result = sum(5, 5);
console.log(result); // Output: undefined
*/

// ********************************************************************************************************************

/*
//Example of Named Function Expression 
const multiply = function multiplyNumbers(a, b) {
    return a * b;
};
console.log(multiply(4, 2)); // Output: 8
console.log(multiplyNumbers(4, 2)); // multiplyNumbers Not Defined
*/

// ********************************************************************************************************************

/*
// Example of Factorial 
function factorial(n) {
    if (n === 0) {
        return 1;
    }
    return n * factorial(n - 1);
}
console.log(factorial(5));

// OR

function factorial(n) {
    if (n === 0) {
        return 1;
    }

    let result = n * factorial(n - 1);
    console.log(n + ":  " + result);
    return result;
}
console.log("Final Result:", factorial(6));
*/

// ********************************************************************************************************************

/*
// Create Private Variables in JavaScript Using IIFE (Immediately Invoked Function expression):
const counter = (function () {
    let count = 0; // Private variable

    return {
        increment: function () {
            count++;
            console.log("Count:", count);
        },
        decrement: function () {
            count--;
            console.log("Count:", count);
        },
        getCount: function () {
            return count; // Access private variable
        }
    };
})();
// Calling methods from the returned object
counter.increment(); // Count: 1
counter.increment(); // Count: 2
counter.decrement(); // Count: 1

console.log(counter.getCount()); // Output: 1
console.log(counter.count); // Undefined (count is private)
*/

// ********************************************************************************************************************

/*
// Create Bank Account with Private Balance Using IIFE (Immediately Invoked Function expression) in JavaScript:
const bankAccount = (function () {
    let balance = 1000; // Private variable
    return {
        deposit: function (amount) {
            if (amount > 0) {
                balance = balance + amount; // balance += amount;
                console.log(`Deposited: Rs.${amount}, New Balance: Rs.${balance}`);
            } else {
                console.log("Deposit amount must be greater than zero.");
            }
        },
        withdraw: function (amount) {
            if (amount > 0 && amount <= balance) {
                balance = balance - amount; // balance -= amount;
                console.log(`Withdrawn: Rs.${amount}, Remaining Balance: Rs.${balance}`);
            } else {
                console.log("Insufficient funds or invalid amount.");
            }
        },
        checkBalance: function () {
            return `Your current balance is: Rs.${balance}`;
        }
    };
})();
// Using the bankAccount object
bankAccount.deposit(500); // Deposited: Rs.500, New Balance: Rs.1500
bankAccount.withdraw(200); // Withdrawn: Rs.200, Remaining Balance: Rs.1300
console.log(bankAccount.checkBalance()); // Your current balance is: Rs.1300
console.log(bankAccount.balance); // Undefined (balance is private)
*/

// ********************************************************************************************************************

/*
// Example of concat() method in an array: 
let a = ["Shivam"];
let b = ["Maurya"];
let newName = a.concat(b);
console.log(a);
console.log(b);
console.log(newName);
*/

// ********************************************************************************************************************

/*
// example of Join() in an array:
let Name = ["shivam", "kumar", "maurya"];
let fullName = Name.join(" ");
console.log(fullName);
*/

// ********************************************************************************************************************

/*
// Function declaration is hoisting
sayHi();
function sayHi() {
    console.log("Hello guys....")
}
*/

// ********************************************************************************************************************

/*
// Lexical Scope in JavaScript:
// A function can access a variable from its parent or the global scope where it is defined:
function outer() {
    let message = "Message from parent function:"

    function inner() {
        console.log(message);// parent function variable can be accessed inside its child function.
    }
    inner();
    console.log(message); // it can be accessed inside that function where it is defined:
}
outer();
//console.log(message); // But, it can not be accessed outside that function / scope where it is defined:
*/

// ********************************************************************************************************************

/*
// Closure in JavaScript :-
function outer() {
    let count = 0;

    function inner() {
        count++; // Increment count value 
        console.log(count); // Accessing variable form outer function 
    }
    return inner; //calling inner() function as return value of outer function 
}
let counter = outer();
counter();
counter();
counter();
counter();
counter();
for (let i = 1; i <= 5; i++) {
    counter();
}
*/

// ********************************************************************************************************************

/*
//Higher Order Function Taking a Function as an Argument
function greet(name, callbackFn) {
    console.log("Hello, " + name);
    callbackFn();
}

function sayHi() {
    console.log("How Are You ?");
}

greet("Shivam", sayHi);
*/

// ********************************************************************************************************************

/*
//Higher Order Function with Returning a Function
function multiplier(a) {
    return function (b) {
        return a * b;
    };
}

const double = multiplier(3);
console.log(double(5));
*/

// ********************************************************************************************************************

/*
// Higher Order Function with callback in javascript :
function a(b) {
    console.log("hiii")
    console.log(b)
    b();
}
a(function () {
    console.log("I am from call back function.");
});
*/

// ********************************************************************************************************************

/*
// setTimeout() function:
console.log("Start");
const a = setTimeout(function () {
    console.log("Hello after 1 seconds!");
}, 1000);

console.log("End");
clearTimeout(a);
*/

// ********************************************************************************************************************

/*
// setInterval() function :
let count = 0;
let intervalID = setInterval(function () {
    console.log("Started Running...");
    count++;
    console.log(count);

    if (count === 3) {
        clearInterval(intervalID); // Stops after 3 runs
        console.log("Stopped Running!");
    }
}, 1000);
*/

// ********************************************************************************************************************

/*
// Canceling a Delayed "SetTimeout()" Function using "Cleartimeout()" function 
let timeoutID = setTimeout(function () {
    console.log("This message will not appear!");
}, 1000);

// Stop the timeout before it runs:
clearTimeout(timeoutID);
console.log("Timeout was canceled.");

// Example 2: Stopping setTimeout() Based on User Action
let timeoutID = setTimeout(function () {
    console.log("Hello, this was delayed!");
}, 3000);

document.getElementById("cancelButton").addEventListener("click", function () {
    clearTimeout(timeoutID);
    console.log("Timeout was canceled.");
});
*/

// ********************************************************************************************************************

/*
// Stopping a Repeating Function "SetInterval()" function using "ClearInterval()" function 
let count = 0;

let intervalID = setInterval(function () {
    count++;
    console.log(`Repeated ${count} times`);

    // Stop the interval after 5 executions
    if (count === 5) {
        clearInterval(intervalID);
        console.log("Interval stopped after 5 times.");
    }
}, 1000);
*/

// ********************************************************************************************************************

/*
// Example: Stopping setInterval() on Button Click
let intervalID = setInterval(function () {
    console.log("This will keep repeating...");
}, 2000);

document.getElementById("stopButton").addEventListener("click", function () {
    clearInterval(intervalID);
    console.log("Interval was stopped.");
});
*/

// ********************************************************************************************************************

/*
// Example of Arrow Function in JavaScript :
const add = (a, b) => a + b
console.log(add(3, 4))
*/

// ********************************************************************************************************************

/*
// Argument object in regular function:
function sum() {
    console.log(arguments); // Outputs all passed arguments
}
sum(1, 2, 3); // Output: { '0': 1, '1': 2, '2': 3 }
*/

// ********************************************************************************************************************

/*
// No Argument object in Arrow function but we can use (...args) rest parameters instead of Argument object: 
const sum1 = (...num) => console.log(num);
sum1(1, 2, 3); // Output: [1, 2, 3]
*/

// ********************************************************************************************************************

/*
//Example of .map() array method using regular function:
let num = [1, 2, 3, 4, 5];
let doubleOfNum = num.map(function (num1) {
    return num1 * 2;
});
console.log("Original array:", num);// Original array:
console.log("Transformed array:", doubleOfNum);// transformed array:
*/

// ********************************************************************************************************************

/*
//Example of .map() array method using Arrow function:
let array = [1, 2, 3, 4, 5];
let doubleOfArray = array.map((arr) => arr * 2);
console.log("Original array:", array); // Original array:
console.log("Transformed array:", doubleOfArray);// transformed array:
*/

// ********************************************************************************************************************

/*
// Sum of all num using  .reduce() array method using Arrow function:
let array = [1, 2, 3, 4, 5];
let sum = array.reduce((acc, num) => {
    return acc + num;
}, 0);
console.log(sum);

// OR

let array1 = [1, 2, 3, 4, 5];
let sum1 = array1.reduce((acc, num) => acc + num, 0);
console.log(sum1);
*/

// ********************************************************************************************************************

/*
// Example of ".Some()" Array method to find even number in an array using Arrow function:
let array = [1, 3, 5, 7, 8];
let even = array.some((num) => {
    return num % 2 == 0;
});
console.log(even); output: [8]
*/

// ********************************************************************************************************************

/*
//Example of Expands numbers into an array up to individual elements
let numbers = [1, 2, 3];
let newNumbers = [...numbers, 4, 5]; // Expands numbers into individual elements
console.log(newNumbers); // Output: [1, 2, 3, 4, 5]
console.log(numbers)
*/

// ********************************************************************************************************************

/*
//example of the Comma Operator (,) in JavaScript.
function add() {
    console.log("Add")
    return 100 + 100;
}

function sub() {
    console.log("Subtract")
    return 200 - 200;
}

function sub1() {
    console.log("multiply");
    return 400 * 400;
}

let a = (add(), sub(), sub1());
console.log(a)
*/

// ********************************************************************************************************************

/*
//Renaming variable in Destructuring in javascript..
const user = { name: "Shivam", age: 22 };
const { name: username, age: userAge } = user;
console.log(`name:`, username, `Age:`, userAge);
console.log(`name: ${username} Age: ${userAge}`);
console.log(age)
*/

// ********************************************************************************************************************

/*
//Destructuring in Function Parameters
const user = {
    name: "John",
    address: {
        city: "New York",
        country: "USA"
    }
};
const { name, address, address: { city, country } } = user;
console.log(name);
console.log(city);
console.log(country);
console.log(address);
*/

// ********************************************************************************************************************

/*
//Destructuring in Function parameter in Javascript: 
function showUser({ name, age }) {
    console.log(`User: ${name}, Age: ${age}`);
}
showUser({ name: "Michael", age: 35 });
*/

//*********************************************  Star Pattern *****************************************************//

/*
//Print stars Vertically
let size = 5;
for (let i = 0; i < size; i++) {
    console.log("*");
}
//Output:-
*
*
*
*
*
*/

// ------------------------------------------------------------------------------------------------------------------

/*
//Print stars horizontally
let size = 5;
console.log("*".repeat(size));
//Output:-
******
*/

// -----------------------------------------------------------------------------------------------------------------------

/*
//Prints a square shape of stars
    let size = 5;
for (let i = 0; i < size; i++) {
    console.log("*".repeat(size));
}
//Output:-
*****
*****
*****
*****
*****
*/

// -----------------------------------------------------------------------------------------------------------------------

/*
    //Print a right-angled triangle of stars
    let size = 5;
for (let i = 0; i < size; i++) {
    console.log("*".repeat(i + 1));
}
//Output:- 
*
**
***
****
*****
*/

// -----------------------------------------------------------------------------------------------------------------------

/*
//print an inverted right-angled triangle
let size1 = 5;
for (let i = 0; i < size1; i++) {
    let count = size1 - i;
    console.log("*".repeat(count));
}
//Output:-
*****
****
***
**
*

// OR

//print an inverted right-angled triangle 
let size = 5;
for (let i = size; i > 0; i--) {
    console.log("*".repeat(i));
}
//Output:-
*****
****
***
**
*
*/

// -----------------------------------------------------------------------------------------------------------------------

/*
//Print Right-Aligned Inverted Right-Angled Triangle or Right-Aligned Descending Triangle.
let size1 = 5;
for (let i = 0; i < size1; i++) {
    let count = size1 - i;
    console.log(" ".repeat(i) + "*".repeat(count));
}
//Output:-
*****
 ****
  ***
   **
    *
*/

// -----------------------------------------------------------------------------------------------------------------------

/*
// print a left-aligned pyramid-like pattern or left-aligned right-angled triangle
let size1 = 5;
for (let i = 0; i < size1; i++) {
    let count = size1 - i - 1;
    console.log(" ".repeat(count) + "*".repeat(i + 1));
}
//Output:-
    *
   **
  ***
 ****
*****
*/

// -----------------------------------------------------------------------------------------------------------------------

/*
//Print a pyramid
let size1 = 5;
for (let i = 0; i < size1; i++) {
    let count = size1 - i - 1;
    console.log(" ".repeat(count) + "*".repeat(2 * i + 1));
}
//Output:-
    *
   ***
  *****
 *******
*********
*/
// -----------------------------------------------------------------------------------------------------------------------

/*
//Print a Reversed Pyramid
let size1 = 5;
for (let i = size1; i > 0; i--) {
    let count = size1 - i;
    console.log(" ".repeat(count) + "*".repeat(2 * i - 1));
}
//Output:-
*********
 *******
  *****
   ***
    *
*/

// -----------------------------------------------------------------------------------------------------------------------

/*
// Print a Diamond Star Pattern or Rhombus Star Pattern.
let size = 5;
// Upper Pyramid
for (let i = 0; i < size; i++) {
    let count = size - i - 1;
    console.log(" ".repeat(count) + "*".repeat(2 * i + 1));
}
// Lower Inverted Pyramid (start from size - 2 to avoid duplicate middle row)
for (let i = size - 2; i >= 0; i--) {
    let count = size - i - 1;
    console.log(" ".repeat(count) + "*".repeat(2 * i + 1));
}
//Output:-
    *    
   ***   
  *****  
 ******* 
*********
 ******* 
  *****  
   ***   
    *
*/

// -----------------------------------------------------------------------------------------------------------------------

/*
//Print Double Diamond Pattern
let size = 5;
// Upper Pyramid
for (let i = 0; i < size; i++) {
    let count = size - i - 1;
    let stars = "*".repeat(2 * i + 1);
    let spacesBetween = "  ".repeat(i * 2); // Adjusting middle spaces
    console.log("  ".repeat(count * 2) + stars + spacesBetween + stars);
}
// Lower Inverted Pyramid
for (let i = size - 2; i >= 0; i--) {
    let count = size - i - 1;
    let stars = "*".repeat(2 * i + 1);
    let spacesBetween = "  ".repeat(i * 2); // Adjusting middle spaces
    console.log("  ".repeat(count * 2) + stars + spacesBetween + stars);
}
//Output:-
                 **
             ***    ***
         *****        *****
     *******            *******
 *********                *********
     *******            *******
         *****        *****
             ***    ***
                 **
                 
*/

// -----------------------------------------------------------------------------------------------------------------------

/*
//Print square with a diamond-shaped empty space
let size = 5;

let squareSize = size * 2; // Ensures a full square width

for (let i = 0; i < squareSize; i++) {
    let row = "";
    for (let j = 0; j < squareSize; j++) {
        // Condition to create the diamond space inside the square
        if (j >= size - i && j <= size + i - 1 && j >= i - size + 1 && j <= 3 * size - i - 2) {
            row += " "; // Space for the diamond shape
        } else {
            row += "*"; // Filling the square
        }
    }
    console.log(row);
}
//Output:-
***** *****  
****   ****  
***     ***  
**       **  
*         *  
**       **  
***     ***  
****   ****  
***** *****
*/

//********************************************************************************************************************

/*
// Example of promise in JavaScript:
function fetchData() {
    return new Promise((resolve, reject) => {
        // Simulating network delay
        setTimeout(() => {
            let success = true;

            if (success) {
                resolve("✅ Data fetched successfully!");
            } else {
                reject("❌ Failed to fetch data.");
            }
        }, 2000); // 2 seconds delay
    });
}
*/

//********************************************************************************************************************

/*
// .then() & .catch() in Promise
fetchData()
    .then(response => {
        console.log(response); // Output if resolved
    })
    .catch(error => {
        console.log(error); // Output if rejected
    });
*/

//********************************************************************************************************************

/*
// chaining in promises in js
let multiply = new Promise(function (resolve, reject) {
    resolve(5);
});

multiply
    .then(result => {
        console.log("Step 1:", result); // 5
        return result * 2;
    })
    .then(result => {
        console.log("Step 2:", result); // 10
        return result * 3;
    })
    .then(result => {
        console.log("Step 3:", result); // 30
    })
    .catch(error => {
        console.log("Something went wrong:", error);
    });
*/

