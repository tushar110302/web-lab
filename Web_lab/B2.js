// Using an array
let myArray = [];
 
// Adding values
for (let i = 0; i < 100000; i++) {
   myArray.push(i);
}
 
// Searching for a value
console.time("array-search");
let isValuePresent = myArray.includes(50000);
console.timeEnd("array-search");
 
// Using a set
let mySet = new Set();
 
// Adding values
for (let i = 0; i < 100000; i++) {
   mySet.add(i);
}
 
// Searching for a value
console.time("set-search");
isValuePresent = mySet.has(50000);
console.timeEnd("set-search");
 