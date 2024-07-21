const employee = {
  firstName: "Prashant",
  lastName: "Kumar",
  city: "New Delhi",
  designation: "Software Engineer",
  skills: ["Java", "Python", "Javascript"],
};

console.log(employee);
console.log(employee.firstName);
console.log(employee["firstName"]);

//add and update 
employee["firstName"] = "Rajat";
employee["lastName"] = "Garg";
employee.company="ABC Limited"; // automatically adds this property in the employee object

console.log(employee);
console.log(employee.skills[0]);

// This we can't do since we declared employee as const
// employee = {
//   firstName: "Mihir",
//   lastName: "Singh",
//   city: "New Delhi",
//   designation: "Software Engineer",
// };

const post = {
  username: "@hero",
  content: "#mypost",
  likes: 150,
  reposts: 5,
  tags: 34,
};

console.log(post["username"]);
console.log(post.username);

//Javascript automatically convert all the keys in String
const obj = {
  1: "one",
  2: "two",
  true: "three",
  undefined: "four",
  null: "five",
};

console.log(obj);
console.log(obj["1"]);
console.log(obj[1]);
console.log(obj.true);
console.log(obj[true]);
console.log(obj["true"]);
console.log(obj["undefined"]);
console.log(obj[undefined]);
console.log(obj.undefined);
console.log(obj.null);
