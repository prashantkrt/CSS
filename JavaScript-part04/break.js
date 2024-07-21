const favMovie = "avatar";

let guessUserInput = prompt("Enter the movie name");

while (guessUserInput !== favMovie && guessUserInput !== "quit") {
  guessUserInput = prompt(
    "Wrong choice !!! please enter again or type quit to break"
  );
}

if (guessUserInput === favMovie)
  console.log("Great Choice Congratulation you won free movie ticket");
else console.log("You guit the guess game!!! sorry to say good bye");
