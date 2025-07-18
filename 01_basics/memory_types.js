//<---------Stack(Primtive DataTypes)-------------->
//The stack stores primitive values directly. When you create a primitive variable, the actual value is stored in the stack memory location.

{
  let x = 10;
  let y = x; //Creates a copt of x at new stack location.
  x = 20;
  console.log(x); // x and y are independent.
  console.log(y);
}



// <--------Heap(Non-Primitive)-------->
// The heap stores objects and their data, while the stack holds references (addresses) pointing to those objects in the heap.
{
  let person1 = {
    name: "Adan",
    age: 2
  };

  let person2 = person1; //Copy reference of heap in stack.

  person1.name = "Maham"; //Both objects are affected.
}

// Memory management img: https://excalidraw.com/#json=fr_rdrRr9Wi-0I5RNHToT,s5-ejdmmyk9adnKvswb_XQ

