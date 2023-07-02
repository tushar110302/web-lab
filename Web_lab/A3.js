// PART A
// let s = prompt('Enter a string')

// function count(str){
//     let c=0;
//     for(let i = 0;i<str.length;i++){
//         if(str[i] === 'a' || str[i] ==='e' || str[i] ==='i' || str[i] ==='o' || str[i] === 'u'){
//             c++;
//         }
//     }
//     return c;
// }
// alert('Vowels = ' + count(s));

// PART B
let s = prompt('Enter a string')
function arrange(s){
    return s.split('').sort().join('')
}
console.log(arrange(s));