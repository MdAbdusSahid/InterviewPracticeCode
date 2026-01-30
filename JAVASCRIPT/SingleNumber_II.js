function singleNumberII(nums) {
  let one = 0, two = 0;

  for (let num of nums) {
    one = (one ^ num) & ~two;
    two = (two ^ num) & ~one; // careful: must use ~one here, not ~two
  }

  return one;
}

// Driver
const nums = [4, 4, 4, 6, 6, 6, 2, 2, 2, 1];
console.log(singleNumberII(nums)); // 1


function singleNumberII(nums) {
  const count = {};

  for (let num of nums) {
    count[num] = (count[num] || 0) + 1;
  }

  for (let num in count) {
    if (count[num] === 1) return Number(num);
  }
}

// Driver
console.log(singleNumberII([4,4,4,6,6,6,2,2,2,1])); // 1


function singleNumberII(nums) {
  const map = new Map();

  for (let num of nums) {
    map.set(num, (map.get(num) || 0) + 1);
  }

  for (let [key, value] of map.entries()) {
    if (value === 1) return key;
  }
}


function singleNumberII(nums) {
  const freq = nums.reduce((acc, num) => {
    acc[num] = (acc[num] || 0) + 1;
    return acc;
  }, {});

  return Number(Object.keys(freq).find(k => freq[k] === 1));
}


function singleNumberII(nums) {
  for (let i = 0; i < nums.length; i++) {
    let count = 0;
    for (let j = 0; j < nums.length; j++) {
      if (nums[i] === nums[j]) count++;
    }
    if (count === 1) return nums[i];
  }
}


function singleNumberII(nums) {
  nums.sort((a,b) => a - b);

  for (let i = 0; i < nums.length; i += 3) {
    if (nums[i] !== nums[i+1]) return nums[i];
  }
}


| Approach    | Time       | Space | Interview Rating |
| ----------- | ---------- | ----- | ---------------- |
| Bitwise     | O(n)       | O(1)  | ⭐⭐⭐⭐⭐            |
| Map/Object  | O(n)       | O(n)  | ⭐⭐⭐⭐             |
| Sorting     | O(n log n) | O(1)  | ⭐⭐               |
| Brute Force | O(n²)      | O(1)  | ❌                |
