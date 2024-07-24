const sum = (a, b) => {
  return a + b;
};

console.log(sum(1, 2));

const printCube = (n) => {
  console.log(Math.pow(n, 3));
};

// we can also write this way
const cube = n => {
  return Math.pow(n, 3);
};

printCube(3);
