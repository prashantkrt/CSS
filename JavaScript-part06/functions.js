function hello() {
  console.log("Hello");
}

hello();

function printName() {
  console.log("My Name is Prashant !!!! ");
}

printName();

//Write a function to roll a dice to print the nunber 1 to 6

function dice() {
  return Math.floor(Math.random() * 6) + 1;
}

function playGame() {
  for (let i = 1; i <= 10; i++) {
    console.log(dice());
  }
}

playGame();
