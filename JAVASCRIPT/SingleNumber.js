function findSingleNumber(nums) {
  let xor = 0;
  for (let num of nums) {
    xor ^= num;
  }
  return xor;
}

// Driver
const nums = [1,1,2,3,4,5,5,4,3];
console.log(findSingleNumber(nums)); // 2

function findSingleNumber(nums) {
  const freq = {};

  for (let num of nums) {
    freq[num] = (freq[num] || 0) + 1;
  }

  for (let num in freq) {
    if (freq[num] === 1) {
      return Number(num);
    }
  }
}

function findSingleNumber(nums) {
  const map = new Map();

  for (let num of nums) {
    map.set(num, (map.get(num) || 0) + 1);
  }

  for (let [key, value] of map.entries()) {
    if (value === 1) return key;
  }
}


function findSingleNumber(nums) {
  return nums.filter(
    n => nums.indexOf(n) === nums.lastIndexOf(n)
  )[0];
}

function findSingleNumber(nums) {
  const set = new Set();

  for (let num of nums) {
    if (set.has(num)) {
      set.delete(num);
    } else {
      set.add(num);
    }
  }

  return [...set][0];
}


function findSingleNumber(nums) {
  nums.sort((a, b) => a - b);

  for (let i = 0; i < nums.length; i += 2) {
    if (nums[i] !== nums[i + 1]) {
      return nums[i];
    }
  }
}


function findSingleNumber(nums) {
  for (let i = 0; i < nums.length; i++) {
    let count = 0;
    for (let j = 0; j < nums.length; j++) {
      if (nums[i] === nums[j]) count++;
    }
    if (count === 1) return nums[i];
  }
}


| Method       | Time       | Space | Interview Score |
| ------------ | ---------- | ----- | --------------- |
| XOR          | O(n)       | O(1)  | ⭐⭐⭐⭐⭐           |
| reduce + XOR | O(n)       | O(1)  | ⭐⭐⭐⭐⭐           |
| Map/Object   | O(n)       | O(n)  | ⭐⭐⭐⭐            |
| Set          | O(n)       | O(n)  | ⭐⭐⭐             |
| Sort         | O(n log n) | O(1)  | ⭐⭐              |
| Brute Force  | O(n²)      | O(1)  | ❌               |
