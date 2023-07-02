// Using an object
let myObj = {};
 
// Adding keys
console.time("object-add");
for (let i = 0; i < 100000; i++) {
   myObj[i] = "value";
}
console.timeEnd("object-add");
 
// Removing keys
console.time("object-remove");
for (let i = 0; i < 100000; i++) {
   delete myObj[i];
}
console.timeEnd("object-remove");
 
// Using a map
let myMap = new Map();
 
// Adding keys
console.time("map-add");
for (let i = 0; i < 100000; i++) {
   myMap.set(i, "value");
}
console.timeEnd("map-add");
 
// Removing keys
console.time("map-remove");
for (let i = 0; i < 100000; i++) {
   myMap.delete(i);
}
console.timeEnd("map-remove");
 