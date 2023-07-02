// PART A 
// const button1 = document.querySelector('.click')
// let sentence = ""
// button1.addEventListener('click', ()=>{
//     sentence = prompt('Enter your sentence')
    
//     let dateRegexG = /[0-9]{1,2}\/[0-9]{1,2}\/[0-9]{4}/g;
//     let res = sentence.match(dateRegexG)
//     console.log(res)
//     alert(res)
// })

// PART B
// Store values into a map
// const user1 = new Map();
// user1.set('id', 1);
// user1.set('name', 'Mohan');

// console.log(user1.get('id'));

// let iterator = user1.entries();

// console.log(iterator.next().value);
// console.log(iterator.next().value);

//iteration over a map collection
let userIDs = new Map();
let user1 = {name: 'John'}, user2 = {name: 'Mohan'}, user3 = {name: 'Kumar'};
userIDs.set(user1, 1) .set(user2, 2) .set(user3, 3);

// Method 1
for (let [name, id] of userIDs) {
  console.log(name);
  console.log(id);
}

// Method 2
userIDs.forEach((id, name) => {
  console.log(name);
  console.log(id);
});

// To convert an object to a map
let obj = {
    'name': 'John',
    id: 1,
  }
  
let map = new Map(Object.entries(obj));

console.log(map.get('name'));