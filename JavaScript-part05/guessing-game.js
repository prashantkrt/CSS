const max = prompt("Enter the max number");
console.log(max);

while (true) {
  let guessNumber = prompt("please enter the randow number to guess the number");
  // [1 to max]
  const randomNumber = Math.floor(Math.random() * max + 1);
  if (randomNumber == guessNumber) {
    console.log(guessNumber,"Matched!!!");
    console.log("Congratulations you won!!!!");
    break;
  }
  console.log(guessNumber," mismatchs ",randomNumber);  
}
