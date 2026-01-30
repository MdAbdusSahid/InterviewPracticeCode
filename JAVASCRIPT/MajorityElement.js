function majorityElement(nums) {
  let majorityElement = 0;
  let count = 0;

  for (let num of nums) {
    if (count === 0) {
      majorityElement = num;
      count++;
    } else if (num === majorityElement) {
      count++;
    } else {
      count--;
    }
  }

  // Verification step
  let occurrence = 0;
  for (let num of nums) {
    if (num === majorityElement) occurrence++;
  }

  return occurrence >= Math.floor(nums.length / 2)
    ? majorityElement
    : null;
}

// Driver
console.log(
  majorityElement([2,3,4,5,6,4,5,3,4,2,3,3,2,2,3,2,2,2,2,2,2])
);

function majorityElement(nums) {
  const map = {};
  const limit = Math.floor(nums.length / 2);

  for (let num of nums) {
    map[num] = (map[num] || 0) + 1;
    if (map[num] > limit) return num;
  }
  return null;
}

function majorityElement(nums) {
  const map = new Map();
  const limit = Math.floor(nums.length / 2);

  for (let num of nums) {
    map.set(num, (map.get(num) || 0) + 1);
    if (map.get(num) > limit) return num;
  }
  return null;
}


function majorityElement(nums) {
  nums.sort((a, b) => a - b);
  const mid = Math.floor(nums.length / 2);

  let count = 0;
  for (let num of nums) {
    if (num === nums[mid]) count++;
  }

  return count > mid ? nums[mid] : null;
}


function majorityElement(nums) {
  const freq = nums.reduce((acc, num) => {
    acc[num] = (acc[num] || 0) + 1;
    return acc;
  }, {});

  const limit = Math.floor(nums.length / 2);
  for (let key in freq) {
    if (freq[key] > limit) return Number(key);
  }
  return null;
}


function majorityElement(nums) {
  const limit = Math.floor(nums.length / 2);

  for (let i = 0; i < nums.length; i++) {
    let count = 0;
    for (let j = 0; j < nums.length; j++) {
      if (nums[i] === nums[j]) count++;
    }
    if (count > limit) return nums[i];
  }
  return null;
}


| Approach    | Time       | Space | Interview Rating |
| ----------- | ---------- | ----- | ---------------- |
| Boyer–Moore | O(n)       | O(1)  | ⭐⭐⭐⭐⭐            |
| Hash Map    | O(n)       | O(n)  | ⭐⭐⭐⭐             |
| Sorting     | O(n log n) | O(1)  | ⭐⭐⭐              |
| Reduce      | O(n)       | O(n)  | ⚠️               |
| Brute Force | O(n²)      | O(1)  | ❌                |


