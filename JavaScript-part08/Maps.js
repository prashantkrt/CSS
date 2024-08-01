let num = [1, 2, 3, 4];

// gives new array not make changes on the original array
let numDouble = num.map(function (element) {
  return element * 2;
});

numDouble.forEach((element) => {
  console.log(element);
});

let numSquare = num.map((element) => element * element);

for (n of numSquare) {
  console.log(n);
}


let StudentObj = [
    {
      stuName: "Rohan",
      marks: 92,
    },
    {
      stuName: "Rakesh",
      marks: 91,
    },
    {
      stuName: "Bijendra",
      marks: 95,
    },
    {
      stuName: "John",
      marks: 90,
    },
  ];

  let gpaCalulater = StudentObj.map((element)=>{
         return  element.marks/10;
  });


  gpaCalulater.forEach((element)=>console.log(element));
