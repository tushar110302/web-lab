let nums = prompt("Enter a list of numbers separated by commas:").split(",").map(num => parseInt(num));
let key = Number(prompt("Enter a number to search"));

function binsearch(arr,key){
    let s = 0;
    let e = arr.length;
    while(s<=e){
        let mid = Math.trunc((s+e)/2);
        if(arr[mid]===key){
            return `Element found at index ${mid}`;
        }
        else if(arr[mid]>key){
            e=mid-1;
        }
        else{
            s=mid+1;
        }
    }
    return `Element not Found`;
}

alert(binsearch(nums,key));