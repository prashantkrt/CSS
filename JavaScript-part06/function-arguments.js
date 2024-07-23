function printName(name, age) {
  console.log(name, " ", age);
}

printName("Karan", 21);

function sum(a, b) {
  console.log(a + b);
}

sum(2, 3);

function average(a, b, c) {
  let average = (a + b + c) / 3;
  console.log(average);
  console.log(Math.floor(average));
  console.log(Math.round(average));
  console.log(Math.ceil(average));
}

average(7, 3, 4);

// as per your return type you can choose
// let integerPart = Math.floor(avg);
// Use Math.ceil(avg) to always round up
// let integerPart = Math.ceil(avg);
// Use Math.round(avg); to round to the nearest integer

// Function to print the multiplcation table

console.log();
function printTable(num) {
  let j = 1;
  for (let i = num; i <= num * 10; i += 5) {
    console.log(num, "*", j++, "=", i);
  }
}

printTable(5);
