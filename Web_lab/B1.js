// //Map vs Object Performance
let obj = {}, map = new Map();
let users = ["John", "mohan", "kumar", "tg", "Ram", "laksh"];

for (let i = 0; i < users.length; i++) {
  obj[i]=users[i];
  map.set(i, users[i]);
}
obj['demo'] = 'TEsst';
map.set('demo','TEsst'); 
let result; 
console.log(obj); 
console.log(map); 
console.time('Object'); 
result = obj.hasOwnProperty(3)
console.timeEnd('Object'); 
console.log(result)
console.time('Map'); 
result = map.has(3);
console.timeEnd('Map'); 
console.log(result)

