let age = 13;

if (age >= 18) {
  console.log("Eligible to vote");
} else {
  console.log("Your are not eligible");
}

let stringA = "Bird";
let stringB = "bird";

if (stringA.toUpperCase() === stringB.toUpperCase()) {
  console.log("The strings have the same characters.");
} else {
  console.log("The strings ain't the same.");
}

let marks = 80;

if (marks >= 90) {
  console.log("A+");
} else if (marks >= 75) {
  console.log("A");
} else if (marks >= 60) {
  console.log("B");
} else if (marks >= 40) {
  console.log("C");
} else {
  console.log("Fail");
}

if (marks >= 33) {
  console.log("Pass");
  if (marks >= 80) {
    console.log("Grade A+");
  } else if (marks >= 75) {
    console.log("A");
  } else if (marks >= 60) {
    console.log("B");
  } else if (marks >= 40) {
    console.log("C");
  }
} else {
  console.log("fail");
}

//Logical Operators : && , || , != , !

let a = 10;
let b = 20;
let c = 30;

if (a < b && a < c) {
  console.log("A is the smallest");
}

if (a < c || b < 3) {
  console.log("a or b is not smaller");
}

let num = 12;
if (num % 3 === 0 && (num + 1 == 15 || num - 1 == 11)) {
  console.log("safe");
} else {
  console.log("not safe");
}

let letter = "Prashant";

if (letter.charAt(0) === "P") {
  console.log("Letter starts with P");
}
