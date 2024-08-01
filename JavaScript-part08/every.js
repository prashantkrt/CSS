// Returns true if every element of array gives true for some function.Else returns false

let ans = [1,2,3,4].every((i)=>(i%2==0));
console.log(ans); // false

ans = [2,4,6,8].every((element)=>(element%2==0));
console.log(ans); // true
