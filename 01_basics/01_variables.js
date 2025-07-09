const accountId= 14453;
let accountEmail = "adan@gmail.com";
var accountPassword = "1234";
accountCity ="Lahore";
let accountState;

// accountId =2;

/*

Prefer not to use var due to funtional and block scope.
const--> global scope, can't be updated or re-assigned.
let-->block scope, can be updated but not re-assigned.

*/
accountEmail="maham@gmail.com";
accountPassword="123";
accountCity="Islamabad";

console.table([accountId,accountEmail,accountPassword,accountCity, accountState]);