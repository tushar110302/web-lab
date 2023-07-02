// PART A
// let str = prompt('Enter a string')
// function capital_letter(str) 
// {
//     str = str.split(" ");

//     for (var i = 0, x = str.length; i < x; i++) {
//         str[i] = str[i][0].toUpperCase() + str[i].substr(1);
//     }

//     return str.join(" ");
// }
// console.log(capital_letter(str));

// PART B
function out() {
    var e = document.getElementById('out');
    e.style.display = 'none';
}
function hov() {
    let e = document.getElementById('hover');
    e.style.display='none'
}
function myFunction() {
    document.getElementById("demo").style.color = "yellow";
}
function clickHandler() {
    alert('Hi there!');
}
