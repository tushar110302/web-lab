// PART  A
// let n1 = Number(prompt('Enter first number'))
// let n2 = Number(prompt('Enter second number'))
// let sum = n1+n2
// alert('Sum of numbers : ' + sum)

// PART B
let n = Number(prompt('Enter number to reverse'))
const rev = (n)=>{
    let r = 0;
    while(n!=0){
        let rem = n%10;
        r = r*10+rem;
        n = Math.trunc(n/10);
    }
    console.log(r);
}
rev(n);