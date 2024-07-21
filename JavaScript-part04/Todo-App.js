let todo = [];

let choice = prompt("please enter your choice/request to add into todo");

while (true) {
  let i = 0;
  if (choice.toLowerCase() === "quit") {
    console.log("quitting the todo application");
    break;
  } else if (choice.toLowerCase() === "showlist") {
    console.log("----------------------");
    for (list of todo) {
      console.log(`S.no.${i++}`, list);
    }
    console.log("----------------------");
  } else if (choice.toLowerCase() === "add") {
    let task = prompt("please enter the task to add");
    todo.push(task);
    console.log("task added");
  } else if (choice.toLowerCase() === "delete") {
    let idx = prompt("please enter the index of the task to delete");
    todo.splice(idx, 1);
    console.log("task deleted");
  } else {
    console.log("Invalid choice please enter the correct choice!!! :(");
  }
  choice = prompt("Please enter your choice/request");
}
