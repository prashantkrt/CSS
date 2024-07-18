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
