// Everything in JS is true or false (in boolean context)
// They can be treated as true or false if taken in boolean context

// Falsy
// false , 0 , -0 , undefined , NaN , null ,"", 0n(BigInt value)

if (!(0 && -0 && undefined && NaN && null && "" && " " && 0n)) {
  console.log(
    "false , 0 , -0 , undefined , NaN , null ,'', 0n has value as false in boolean context"
  );
}
else{
    console.log("not false in boolean context");
}

//Truthy
//Everything else is true
