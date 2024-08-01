let nums = [2, 3, 1, 6, 8, 9, 11, 12,15,40];

// creates new array and returns based on the filter
let evenList = nums.filter((element)=>{
       return element%2==0;
});


evenList.forEach((i)=>console.log(i));