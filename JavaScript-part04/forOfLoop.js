let fruits = [
  "mango",
  "banana",
  "pineapple",
  "apple",
  "litchi",
  "orangle",
  "guava",
  "watermilon",
];

for (fruit of fruits) {
  console.log(fruit);
}
console.log();

let coderName = "Prashant Shekar";

for (val of coderName) {
  console.log(val);
}

console.log();

let heros = [
  ["IronMan", "SpiderMan", "Thor"],
  ["Superman", "Wonderwomen", "flash"],
  ["Shaktiman", "Krrish"],
];

for (hero of heros) {
  for (heroName of hero) {
    console.log(heroName);
  }
}
