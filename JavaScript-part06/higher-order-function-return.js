function oddEvenTest(request) {
  if (request === "odd") {
    return function (n) {
      console.log(n % 2 != 0);
    };
  } else if (request === "even") {
    return function (n) {
      console.log(n % 2 == 0);
    };
  } else {
    return function () {
      console.log("wrong request");
    };
  }
}

let oddChecker = oddEvenTest("odd");
oddChecker(3);

let evenChecker = oddEvenTest("even");
evenChecker(4);
