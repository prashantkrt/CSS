// forEach
let arr = [1, 2, 3, 4, 5, 6, 7];

function print(element) {
  console.log(element);
}

arr.forEach(print);

// or
arr.forEach(function (element) {
  console.log(element);
});

// or
arr.forEach((element) => {
  console.log(element);
});

let arrObj = [
  {
    stuName: "Rohan",
    marks: 32,
  },
  {
    stuName: "Rakesh",
    marks: 21,
  },
  {
    stuName: "Bijendra",
    marks: 45,
  },
  {
    stuName: "John",
    marks: 30,
  },
];

arrObj.forEach((stu)=>{
   console.log(stu.marks);
})
