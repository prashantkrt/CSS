// Reduces array to the single value
let sum = [1, 2, 3, 4].reduce((result, element) => result + element);
console.log(sum);

// Finding the maximum element in the array
let nums = [2, 3, 4, 1, 7, 8, 11, 19, 30, 32, 56, 0, 12];

let maxElement = nums.reduce((max, element) => {
  if (element > max) {
    return element;
  } else {
    return max;
  }
});

console.log(maxElement);
