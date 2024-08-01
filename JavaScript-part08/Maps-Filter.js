let num =[1,2,3,4];

// gives new array not make changes on the original array
let numDouble = num.map(function(element){
    return element*2;
})

numDouble.forEach((element)=>{
 console.log(element);
})