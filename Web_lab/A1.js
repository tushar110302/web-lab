// PART  A
// let n1 = Number(prompt('Enter first number'))
// let n2 = Number(prompt('Enter second number'))
// let sum = n1+n2
// alert('Sum of numbers : ' + sum)

// PART B
let n = prompt('Enter number to reverse');
const rev = (n)=>{
    return n.split('').reverse().join('');
}
n= rev(n);
console.log(n)