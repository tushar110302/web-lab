function asyncFunction1() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log("Async Function 1 completed");
      resolve();
    }, 1000);
  });
 }
  
  
 function asyncFunction2() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log("Async Function 2 completed");
      resolve();
    }, 2000);
  });
 }
  
 function asyncFunction3() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log("Async Function 3 completed");
      resolve();
    }, 3000);
  });
 }
  
 asyncFunction1()
  .then(() => {
    return asyncFunction2();
  })
  .then(() => {
    return asyncFunction3();
  })
  .then(() => {
    console.log("All functions completed");
  })
  .catch((error) => {
    console.log(error);
  });

// PART B
// Prompt the user to enter a number
// var number = prompt("Enter a number:");
 
// // Convert the input string to a number
// number = parseInt(number);
 
// // Check if the number is divisible by 2
// if (number % 2 === 0) {
//  alert(number + " is an even number.");
// } else {
//  alert(number + " is an odd number.");
// }