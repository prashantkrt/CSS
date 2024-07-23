function sum(a, b) {
  return a + b;
}
console.log(sum(2, 3));

function multiply(a, b) {
  return a * b;
}
console.log(multiply(sum(2, 3), 2));

function isAdult(age) {
  if (age >= 18 && age < 60) return "adult";
  else if (age >= 60) return "senior citizen";
  else return "Under 18";
}

console.log(isAdult(14));

// function to return sum of number from 1 to n

function sum1toN(n) {
  return ((n + 1) * n) / 2;
}

console.log(sum1toN(4));

// function that returns the concatenation of the strings in a array
let str = ["hi", "hello", "bye", "hurray", "master"];

function concatString(str) {
  let result = "";
  for (let i = 0; i < str.length; i++) {
    result += str[i];
  }
  return result;
}

console.log(concatString(str));
