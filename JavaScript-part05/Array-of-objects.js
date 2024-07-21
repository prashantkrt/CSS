const classInfo = [
  {
    studentName: "Aman",
    grade: "A+",
    city: "Jabalpur",
  },
  {
    studentName: "Rajat",
    grade: "A",
    city: "Asansol",
  },
  {
    studentName: "Siply",
    grade: "C",
    city: "Kolkata",
  },
];

classInfo[0].gender = "Male";
classInfo[1].gender = "Male";
classInfo[2].gender = "Female";

for (obj of classInfo) {
  console.log(obj);
}
