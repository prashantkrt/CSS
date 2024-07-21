let num = Math.random(); // any random number between 0 to 1 ->  0.452356
num = num*10; // 4.52356
num = Math.floor(num); // 4
num=num+1; // 5 

console.log(num);
console.log();

for(let i = 0 ;i<=10;i++)
{
    // let n = Math.random();

    // Returns a random integer from 1 to 10:
    // n=Math.floor(n*10)+1;
 
    console.log(Math.floor(Math.random()*10)+1);
}
// Returns a random integer from 0 to 9:
Math.floor(Math.random() * 10);

// Returns a random integer from 0 to 10:
Math.floor(Math.random() * 11);

// Returns a random integer from 0 to 99:
Math.floor(Math.random() * 100);

// Returns a random integer from 0 to 100:
Math.floor(Math.random() * 101);

// Returns a random integer from 1 to 10:
Math.floor(Math.random() * 10) + 1;

// Returns a random integer from 1 to 100:
Math.floor(Math.random() * 100) + 1;

// This JavaScript function always returns a random number between min (included) and max (excluded):
// Math.floor(Math.random() * (max - min) ) + min;

// This JavaScript function always returns a random number between min and max (both included):
// Math.floor(Math.random() * (max - min + 1) ) + min;


