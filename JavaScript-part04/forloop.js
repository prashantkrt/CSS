let array = [1, 2, 3, 4, 5, 6, 7, 8, 9];

for (let index = 0; index < array.length; index++) {
  console.log(array[index]);
}
console.log();

//print all the odd numbers  1 to 15

for (let i = 1; i <= 15; i++) {
  if (i % 2 != 0) {
    console.log(i);
  }
}
console.log();

//print all even number

for (let i = 2; i <= 10; i += 2) {
  console.log(i);
}
console.log();

// multiplication table of 5

for (let i = 5; i <= 50; i += 5) {
  console.log(i);
}
console.log();

//nested

for (let i = 1; i <= 3; i++) {
  for (j = 1; j <= 3; j++) {
    console.log(j);
  }
}
