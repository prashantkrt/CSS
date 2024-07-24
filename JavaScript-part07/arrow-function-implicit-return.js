// only return the 
// no calculation 

// like 
const mul = (a,b) => (
    a*b // Implicit return
);

const cube = n => (
     Math.pow(n,3) // Implicit return
)
console.log(mul(2,3));

const simple = ()=>console.log("Hello");
simple();

const returnSimple = () => { return "print simple"};
console.log(returnSimple());

const check = n=>(n*n*n);
console.log(check(4));

const checkSample = (n) => n*n;
console.log(checkSample(4));

const values = n => n*n;
console.log(values(2));