let students = ["Aman", "Shanky", "Dhruv", "Murli", "Vijay"];

console.log(students);
console.log(students[0]);
console.log(students.length);

console.log(typeof students); // objects

let myArray = []; // empty array;

let marks = [23, 45, 67, 12, 90];

let names = ["Boby", "Rony", "John"];

let info = ["Aman", 23, 45, "Roshan", 4.5, 9n]; // mixed array
console.log(info);
console.log(info[0][0]); // A
console.log(info[0].length);

// Arrays are mutable
let fruits = ["apple", "orange", "banana", "pineapple"];
fruits[0] = "Guava";
console.log(fruits);

fruits[10] = "Grapes"; // increases the length to length 11
console.log(fruits.length);
console.log(fruits);

// Arrays Methods

// Push : add to end
// Pop : delete from the end
// Unshift : add to start
// Shift : delete from start

let cars = ["Audi", "BMW", "Hyundai", "Tata", "Suzuki"];

console.log(cars.push("Mahindra")); // 6
cars.push("Citrozen"); // 7
console.log(cars);

cars.pop(); //returns the last deleted element
console.log(cars.pop());
console.log(cars);

console.log(cars.unshift("Ford")); // 6
console.log(cars);

cars.shift(); // returns the first deleted element
console.log(cars.shift());
console.log(cars);

// indexOf: if present then returns index else -1 and inclues: returns true or false

console.log(cars); // [ 'BMW', 'Hyundai', 'Tata', 'Suzuki' ]
console.log(cars.indexOf("Hyundai")); // 1
console.log(cars.indexOf("Kia")); // -1
console.log(cars.includes("Tata")); // true
console.log(cars.includes("Kia")); // false

// concat gives new concatinated array and reverse : It reverses the array

let primary = ["red", "yellow", "blue"];
let secondary = ["orange", "green", "violet"];

let newArray = primary.concat(secondary); // won't change the original array
console.log(primary); // ["red", "yellow", "blue"]
console.log(secondary); // ["orange", "green", "violet"]
console.log(newArray); // [ 'red', 'yellow', 'blue', 'orange', 'green', 'violet' ]

primary.reverse(); // reverses the original array
console.log(primary); // [ 'blue', 'yellow', 'red' ]
primary.reverse();

// slice : copies the portion of the array, won't change the original array
// ["red", "yellow", "blue"]
console.log(primary.slice()); //get the copy of entire array
console.log(primary.slice(2));
console.log(primary);

console.log(primary.slice(0, 2));
console.log(primary.slice(-1)); // primary.length -1 = 3 - 1 = 2

// splice  : removes / replaces / add element in place in the original array
// splice(start , deleteCount , add elements item0...itemN);

{
  let color = ["red", "blue", "green", "white", "black", "violet", "pink"];
  console.log(color.splice(1)); // removes all the elements including index 1 and returns the array of removed elements
  console.log(color); // ["red"]
}

{
  let color = ["red", "blue", "green", "white", "black", "violet", "pink"];
  color.splice(1, 0, "Yellow", "Orange");
  console.log(color);
}
{
  let color = ["red", "blue", "green", "white", "black", "violet", "pink"];
  console.log(color.splice(1, 2, "Grey", "Purple")); // removes and add ,  returns the list of removed elements [ 'blue', 'green' ]
  console.log(color);
}

//sort
console.log(primary);
primary.sort();
console.log(primary);

// descending order 
primary.sort();
primary.reverse();


