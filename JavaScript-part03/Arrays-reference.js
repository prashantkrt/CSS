console.log("name"=="name"); // true
console.log("name"==="name") // true

//Array stores the reference not the array values
console.log([1]==[1]) // false
// console.log([1]===[1]) // false
console.log([]==[]) // false



let arr = [1,2];
let arrNew = arr; // since it stores the same array reference of arr pointing to
arrNew.push(3);

console.log(arr);

console.log(arr==arrNew); //true
