const convert_to_lbs = (wtInKg) => {
    let lbs = wtInKg*2.2;
    if(lbs > 150) return `${lbs}lbs : obese`;
    else if(lbs>=100 && lbs<=150) return `${lbs}lbs : you are ok`;
    else return `${lbs}lbs : underweight`;
}
let kg = Number(prompt("Enter wieght in kg"))
let result = convert_to_lbs(kg);
console.log(result)
alert(result)