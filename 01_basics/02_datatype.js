"use strict"; // treat all JS code as newer version
// 
//alert(3+3); we are using node.js, not browser - 

let name="Adan";
let cgpa=3.06;
let isPass=true;
let comments= null; //Object
let age; //Undefines
let friend= Symbol("Maham");
let salary =BigInt("10000000");

/*
Primitive DataTypes are 7:
1. Numbers --> Range: 2 power something
2. Strings --> ""
3. Boolean --> True/False
4. Undefine --> The values isn't defined
5. Null --> A stand alone value. It's datatype is Object.
6. BigInt --> Used to store large values
7. Symbol -->Identify uniqueness of componenets
*/

console.table(typeof age);
console.table(typeof comments);



/*
Non-Primitive DataType:
1. Object --> Collection of values

*/

const student = {
    name: "Adan",
    age:21,
    cgpa:3.06,
    semester:7

};

console.log(student.age);
console.log(student["age"]);
console.log(typeof student.age);

//Values of object can be changes even if it's declared as const. Yes, to change the whole object itself is not possible.
student["age"] = student["age"] + 1
console.log(student["age"]);
                
                
                
                
                
                
                
                
                
                
              