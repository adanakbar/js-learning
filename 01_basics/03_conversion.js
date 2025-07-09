
/*

{
  let score = 33;
  console.log(typeof score);
}



{
  let score = "33";
  console.log(typeof score);
}




{
  let score = "33";
  let valueInNumber = Number(score);
  console.log(typeof valueInNumber);
}


{
  //Why number, even it is not a number? 33aa

  let score = "33aa";
  console.log(typeof score);
  let valueInNumber = Number(score);
  console.log(valueInNumber);
  console.log(typeof valueInNumber);
  
}




{
  let score = null;
  let valueInNumber = Number(score);
  console.log(valueInNumber)
  console.log(typeof valueInNumber);
}


{
  let score = true;
  let valueInNumber = Number(score);
  console.log(valueInNumber)
  console.log(typeof valueInNumber);
}



{
  let score = false;
  let valueInNumber = Number(score);
  console.log(valueInNumber)
  console.log(typeof valueInNumber);
}



{
  let score = 1;
  let valueInBoolean = Boolean(score);
  console.log(valueInBoolean)
  console.log(typeof valueInBoolean);
}



{
  let score = false;
  let valueInBoolean = Boolean(score);
  console.log(valueInBoolean)
  console.log(typeof valueInBoolean);
}



{
  let score = "";
  let valueInBoolean = Boolean(score);
  console.log(valueInBoolean)
  console.log(typeof valueInBoolean);
}



{
  let score = "adan";
  let valueInBoolean = Boolean(score);
  console.log(valueInBoolean)
  console.log(typeof valueInBoolean);
}




{
  let score = 33;
  let valueInString = String(score);
  console.log(valueInString)
  console.log(typeof valueInString);
}

*/





// "33" -> 33
// "33aa" -> Nan-> It's type is Number.
// true -> 1
// false -> 0
// 1 -> true
// 0 -> false
// "" -> false
// "adan" -> true
// 33 -> "33"

// < --------------------------Operations------------------------->
  
// let value = 3;
// let negativeValue = -value;
// console.log(negativeValue);

// console.log(2 + 2);
// console.log(2 - 2);
// console.log(2 * 2);
// console.log(2 ** 3);
// console.log(2 / 3);
// console.log(2 % 3);

// let str1 = "Adan";
// let str2 = " Akbar";
// let str3 = str1 + str2;
// console.log(str3);

// console.log("1" + 2);
// console.log(1 + "2");
// console.log("1" + "2");
// console.log("1" + 2 + 2);
// console.log(1 + 2 + "2");

// console.log(+true);
// console.log(+"");

// let num1, num2, num3;

// num1 = num2, num3 = 2 + 2;


//This increments first and then return so we get an updated value.
{
  let gameCounter = 100;
  let gameIncrement = ++gameCounter;
  console.log(gameIncrement);
}

//This returns the value first and then increments so we get an original value.
{
  let gameCounter = 100;
  let gameIncrement = gameCounter++;
  console.log(gameIncrement);
}





