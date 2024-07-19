let students = ["Aman","Shanky","Dhruv","Murli","Vijay"];

console.log(students);
console.log(students[0]);
console.log(students.length);

console.log(typeof students); // objects


let myArray = [] // empty array;

let marks = [23,45,67,12,90];

let names = ["Boby","Rony","John"];

let info =["Aman", 23, 45, "Roshan", 4.5, 9n]; // mixed array
console.log(info);
console.log(info[0][0]) // A
console.log(info[0].length);

// Arrays are mutable
let fruits = ["apple","orange","banana","pineapple"];
fruits[0]="Guava";
console.log(fruits);

fruits[10]="Grapes"; // increases the length to length 11
console.log(fruits.length);
console.log(fruits);


// Arrays Methods 

// Push : add to end 
// Pop : delete from the end
// Unshift : add to start
// Shift : delete from start

let cars =["Audi","BMW","Hyundau","Tata","Suzuki"];

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






