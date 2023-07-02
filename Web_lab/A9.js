// PART A
// function findLeapYears(startYear, endYear) {
//   var leapYears = [];

//   for (var year = startYear; year <= endYear; year++) {
//     if (year % 4 === 0 && (year % 100 !== 0 || year % 400 === 0)) {
//       leapYears.push(year);
//     }
//   }

//   return leapYears;
// }

// // Prompt the user to enter the range of years
// var startYear = parseInt(prompt("Enter the start year:"));
// var endYear = parseInt(prompt("Enter the end year:"));

// // Find the leap years in the given range
// var leapYearsInRange = findLeapYears(startYear, endYear);

// // Display the leap years
// if (leapYearsInRange.length === 0) {
//   console.log("No leap years found in the given range.");
// } else {
//   console.log("Leap years in the range " + startYear + " to " + endYear + ":");
//   console.log(leapYearsInRange);
// }


// PART B
var mySet = new Set();
 
// Add values to the Set
mySet.add(10);
mySet.add("Hello");
mySet.add(true);
mySet.add(10); // Adding duplicate value, which will be ignored
 
// Retrieve value from the Set
var value = "Hello";
if (mySet.has(value)) {
  console.log(value + " is present in the Set.");
} else {
  console.log(value + " is not present in the Set.");
}

mySet.forEach((val)=> console.log(val));