// PART A
let str = prompt("Enter a string")
function words(str){
    return str.split(' ')
}
let w = words(str)
console.log(w)



// PART B
// function validateUSN(usn) {
    
//     var pattern = /^1[Nv][Ts][0-9]{2}[A-Za-z]{2}[0-9]{3}$/;

//     if (pattern.test(usn)) {
//       alert("Valid USN");
//     } else {
//       alert("Invalid USN");
//     }
// }
// let usn = prompt('Rnter USN')
// validateUSN(usn)