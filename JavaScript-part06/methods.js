// Actions that can be performed on an object

const calculator = {
  add: function (a, b) {
    return a + b;
  },
  sub: function (a, b) {
    return a - b;
  },
  mul: function (a, b) {
    return a * b;
  },
};

console.log(calculator.add(3, 4));
console.log(calculator.sub(4, 3));
console.log(calculator.mul(5, 4));

// Methods Shorthand

const calculator2 = {
  add(a, b) {
    return a + b;
  },
  sub(a, b) {
    return a - b;
  },
  mul(a,b){
    return a*b;
  }
};

console.log(calculator.add(4,5));
