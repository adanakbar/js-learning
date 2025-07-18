// JavaScript is dynamically typed language. The type is determined at runtime based on the value you assign.

/*Primitive DataTypes are 7:
1. Numbers --> Range: 2 power something
2. Strings --> ""
3. Boolean --> True/False
4. Undefine --> The values isn't defined
5. Null --> A stand alone value. It's datatype is Object.
6. BigInt --> Used to store large values
7. Symbol -->Identify uniqueness of componenets
*/

// Symbol- Symbol(description) creates a new unique symbol every time — regardless of the description.
let id = Symbol("123"); // return type of Symbol is symbol.
let anotherId = Symbol("123");
console.log(id === anotherId);

//bigInt

let bigNumber = 300000000000000000000000n;

/* Non-Primitive (Reference) DataTypes are 3:
1. Arrays
2. Objects
3. Functions

Return type of all these are object.
Function return  Function Object.
*/

// Funtion
const obj = function () {
  console.log("Adan");
}
obj();
console.log(typeof obj);

// Array
const names = ["Adan", "Maham"];
console.log(typeof names);

// Object
const student = {
  name: "Adan",
  cgpa: 3.0
};
console.log(typeof student);

// Return Type of DataTypes:
// 1. Numbers --> number
// 2. Strings --> string
// 3. Boolean --> boolean
// 4. Undefine --> undefined
// 5. Null --> object
// 6. BigInt --> bigint
// 7. Symbol --> symbol
// 8. Array -->  object
// 9. Object --> object
// 10. Function --> function which is a function object



