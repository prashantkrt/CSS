/*

Strings are immutable in JS No changes can be made to the String
Whenever we try to make any change to the string it will create a new string and old one remains the same

*/

// ** String Methods **

// 1. Trim method : trims the whitespace from both the end and returns new string

let msg = "      Hello World   ";
let trimMsg = msg.trim();
console.log(msg);
console.log(trimMsg);

// 2. toUpperCase() and toLowerCase()

let str = "Random String";

let upperString = str.toUpperCase();
let lowerString = str.toLowerCase();

console.log(str);
console.log(upperString);
console.log(lowerString);

// 3. indexOf returns the first index occurrence

{
  let str = "ILoveCoding";
  console.log(str.indexOf("Love")); //1
  console.log(str.indexOf("i")); // 8
  console.log(str.indexOf("o")); //2
}

// 4. Method Chaining

{
  let msg = "    Hello   ";
  let newMsg = msg.toUpperCase().trim();
  console.log(msg);
  console.log(newMsg);
}

// 5. slice([Inclusive , Exclusive}) , slice(startIndex) method

{
  let str = "ILoveCoding";
  let slicedStr = str.slice(0, 2); //IL
  console.log(slicedStr);

  slicedStr = str.slice(1, 5);
  console.log(slicedStr); //Love

  // str.slice(3,str.length);
  slicedStr = str.slice(3); //veCoding
  console.log(slicedStr);

  // -ve value represents str.length - ve value
  // str.length -1
  slicedStr = str.slice(-1);
  console.log(slicedStr);
}

// 6. Replace(will only replace the first occurrence) and Repeat(Returns a string with number of copies of a string) Method
{
  let msg = "ILoveLoveCoding";

  let replaceExp = msg.replace("Love", "Hate");
  console.log(msg); //  ILoveLoveCoding
  console.log(replaceExp); //IHateLoveCoding

  let str = "Apple";
  let repeatedStr = str.repeat(3);
  console.log(repeatedStr); //AppleAppleApple
}

// 7. charAt

{
  let letters = "Hello-World";
  console.log(letters[2]); // l
  console.log(letters.charAt(0)); // H
  console.log(letters.charCodeAt(0)); // ascii value of char at index 0 72
}
