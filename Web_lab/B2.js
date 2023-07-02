let arr = [], set = new Set();
let users = ["John", "Mohan", "Kumar", "Karthik", "Kiran", "John"];
for (let i = 0; i < users.length; i++) {
  arr.push(users[i]);
  set.add(users[i]);
}
let result;

console.time('Array'); 
result = arr.indexOf("Mohan") !== -1; 
console.timeEnd('Array');

console.time('Set'); 
result = set.has("Mohan"); 
console.timeEnd('Set');
