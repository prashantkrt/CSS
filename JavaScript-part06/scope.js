/*
<----Scopes--->
-  global 
-  Function
-  Block 
-  Lexical
*/

// Global scope
let carName = "Volvo";
const data = "myData";

{
  // Block Scope only for let and const(let and const cannot accessed to this block)
  let x = 2;
  var y = 25; // this can be accessed outside this block
}
console.log(y);

// Function Scope
function calculateSum(a, b) {
  let sum = a + b;
  // local to function
  // function scope
}

// lexical scope
// basically applies within nested function
function outerFunction() {
  let x = 10;
  let y = 20;
  function innerFunction() {
    console.log(x, " ", y); //lexical scope
  }
  innerFunction();
}

outerFunction();
