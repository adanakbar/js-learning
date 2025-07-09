console.log(2 > 1);
console.log(2 >= 1);
console.log(2 < 1);
console.log(2 == 1);
console.log(2 != 1);

// Can't compare two different datatypes.
console.log("2" > 1);
console.log("02" > 1);


// For comparison operators, null is converted to 0. For equity, it is equal to undefined
console.log(null > -1); // null --> 0
console.log(null == 0); // null --> undefined
console.log(null >= 0); //null --> 0
console.log(null == undefined); 

// Undefined always gives false. Undefined is loosely equal to null.
console.log(undefined == 0);
console.log(undefined == null);


