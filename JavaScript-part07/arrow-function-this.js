// this with arrow functions
// major difference

/*

Like in normal functions this returns the calling object
but in arrow functions it checks for lexical scope parent -> call scope

*/

const Employee = {
  employeeName: "Raghav",
  marks: 95,
  prop: this, // global scope window object
  getName: function () {
    console.log(this); // current object
    return this.employeeName;
  },
  getMarks: () => {
    console.log(this); // parent scode -> employee and employee scope is Window
    return this.marks; // undefined
  },

  getInfo1: function () {
    setTimeout(() => {
      console.log(this); // Employee, as arrow function parent is getInfo1 function 
    }, 2000);
  },
  getInfo2: function () {
    setTimeout(function () {
      console.log(this); // window , normal function this uses same object which call so setTimeout is called by WindoW Object
    }, 2000);
  },
};

console.log(Employee); // Employee Object
console.log(Employee.getName()); // Raghav
console.log(Employee.getMarks()); // undefined
