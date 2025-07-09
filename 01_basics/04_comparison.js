// Basic Conversion
// console.log(2 > 1);
// console.log(2 >= 1);
// console.log(2 < 1);
// console.log(2 == 1);
// console.log(2 != 1);

// Can't compare two different datatypes.
console.log("2" > 1); // Perform type conversion. 2 > 1 so true.
console.log("02" > 1);


// For comparison operators, null is converted to 0. For equity, it is equal to undefined
console.log(null > -1); // null --> 0
console.log(null == 0); // null --> undefined
console.log(null >= 0); //null --> 0
console.log(null == undefined); 

// Undefined always gives false. Undefined is loosely equal to null.
console.log(undefined == 0);
console.log(undefined > 0); // undefine --> NaN
console.log(undefined == null);

// Strick Check
console.log("2" == 2); // Performs conversion, so true.
console.log("2" === 2); // No conersion. Compares values and also datatypes.

// Avoid the following comparison. Clean code is key.

console.log(undefined == 0);
console.log(undefined == null);
console.log(null > -1);
console.log(null == 0); 
console.log(null >= 0);
console.log(null == undefined);


