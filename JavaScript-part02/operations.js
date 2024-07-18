//Arithmetic 

let a = 30;
let b = 20; 

console.log(a+b);
console.log(a-b);
console.log(a*b);
console.log(a/b);
console.log(a%b);
a=2;
b=3;
console.log(a**b);

//Unary Operator

let val = 20;

console.log(val++);
console.log(++val);
console.log(val--);
console.log(--val);


//Assignments

a=20;
b=10;

a+=20;
b-=2;
a/=2;
a%=2;

//comparison 
let age = 19;
console.log(age>18);//true
console.log(age>=18);//true
console.log(age<18);//false
console.log(age<=18);//false
console.log(age==18);//false
console.log(age!=18);//true


let value1 = 5
console.log(typeof value1); // number
let value2 ='5'
console.log(typeof value2);  // string

console.log(value1==value2)// true  , since it's only check the values not the type
console.log(value1===value2) // false , here it's check type as well as the value 


console.log(0==' ') // true
console.log(0===' ') // false
console.log(0==false) //true
console.log(1==true) //true
console.log(1===true) //false 
console.log(0===false) //false
console.log(null==undefined) // true
console.log(null===undefined)// false


//comparison for non numbers

// 'a' -> 97 
// 'b' -> 98 . . .  so on
// 'A' -> 65
// 'B' -> 66 . . . so on

console.log('a'<'A'); // false 97 < 65
console.log('A'<'a'); // true 65 < 97


let char = "a"; 
console.log(char.charCodeAt(0), "ASCII value for 'a'");


