/*
- Takes generally one or more functions as a parameter
- returns a function
*/

function multipleGreet(func, n) {
  for (let i = 0; i < n; i++) {
    func();
  }
}

let greet = function () {
  console.log("Good Morning Developers!!!!!");
};

multipleGreet(greet, 4);

multipleGreet(function () {
  console.log("Hello Good Night Developers!!!!");
}, 2);
