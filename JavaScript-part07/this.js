const Student = {
  studnetName: "Rakesh",
  age: 24,
  english: 90,
  maths: 80,
  physics: 78,
  getAverage() {
    console.log(this);
    return Math.floor((this.age + this.english + this.maths) / 3);
  },
};

console.log(Student.getAverage());

function getAverage() {
  console.log(this); // window object
  let marks = [23, 23, 45, 100];
  let sum = 0;
  for (mark of marks) {
    sum += mark;
  }
  console.log(Math.round(sum/marks.length));
}

getAverage();
window.getAverage();


alert("Hello World");
window.alert("Hello World");
