const jumpSearch = (arr, x) => {
    const n = arr.length;
    const jumpSize = Math.floor(Math.sqrt(n));
    let left = 0;
    let right = 0;
  
    while (right < n && arr[right] < x) {
      left = right;
      right += jumpSize;
    }
  
    right = Math.min(right, n);
  
    while (left < right) {
      if (arr[left] === x) {
        return true;
      }
      left++;
    }
  
    return false;
  };
  
  const key = parseInt(prompt("Enter the key:"));
  const nums = prompt("Enter a list of numbers separated by commas:").split(",").map(num => parseInt(num));
  
  const result = jumpSearch(nums, key);
  
  if (result) {
    console.log(`Success! The key ${key} was found in the list.`);
  } else {
    console.log(`Failure! The key ${key} was not found in the list.`);
  }