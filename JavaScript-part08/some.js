// Returns true if some element of the array gives true for condition. Else returns false


let ans = [1,2,3,4].some((element)=>(element%2==0));
console.log(ans); // true

ans = [2,4,6].some((element)=>(element%2!=0));
console.log(ans); // false