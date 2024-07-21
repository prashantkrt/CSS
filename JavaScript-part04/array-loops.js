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

fruits.push("StawBerry");
fruits.unshift("BlackBerry");

for (let i = 0; i < fruits.length; i++) {
  console.log(fruits[i]);
}

console.log();

let heros = [
  ["IronMan", "SpiderMan", "Thor"],
  ["Superman", "Wonderwomen", "flash"],
  ["Shaktiman", "Krrish"],
];

for (let i = 0; i < heros.length; i++) {
  for (let j = 0; j < heros[i].length; j++) {
    console.log(heros[i][j]);    
  }
  console.log();
}
