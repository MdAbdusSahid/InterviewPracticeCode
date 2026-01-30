function twoSum(nums, target) {
  const map = {}; // number -> index

  for (let i = 0; i < nums.length; i++) {
    const rem = target - nums[i];
    if (map[rem] !== undefined) {
      return [map[rem], i];
    }
    map[nums[i]] = i;
  }
  return [];
}

// Driver
const nums = [2, 7, 11, 15];
const target = 26;
const result = twoSum(nums, target);

if (result.length === 2) {
  console.log("Indices:", result);
} else {
  console.log("No solution found.");
}


function twoSum(nums, target) {
  const map = new Map();

  for (let i = 0; i < nums.length; i++) {
    const rem = target - nums[i];
    if (map.has(rem)) return [map.get(rem), i];
    map.set(nums[i], i);
  }

  return [];
}

console.log(twoSum([2, 7, 11, 15], 26)); // [2,3]


function twoSum(nums, target) {
  const map = new Map();

  for (let i = 0; i < nums.length; i++) {
    const rem = target - nums[i];
    if (map.has(rem)) return [map.get(rem), i];
    map.set(nums[i], i);
  }

  return [];
}

console.log(twoSum([2, 7, 11, 15], 26)); // [2,3]


function twoSum(nums, target) {
  const map = new Map();

  for (const [i, num] of nums.entries()) {
    const rem = target - num;
    if (map.has(rem)) return [map.get(rem), i];
    map.set(num, i);
  }

  return [];
}

console.log(twoSum([2, 7, 11, 15], 26));


function twoSum(nums, target) {
  for (let i = 0; i < nums.length; i++) {
    const j = nums.findIndex((n, idx) => idx !== i && n + nums[i] === target);
    if (j !== -1) return [i, j];
  }
  return [];
}

console.log(twoSum([2, 7, 11, 15], 26));


function twoSum(nums, target) {
  let left = 0, right = nums.length - 1;

  const indexed = nums.map((num, idx) => [num, idx]);
  indexed.sort((a,b) => a[0] - b[0]);

  while (left < right) {
    const sum = indexed[left][0] + indexed[right][0];
    if (sum === target) return [indexed[left][1], indexed[right][1]];
    else if (sum < target) left++;
    else right--;
  }
  return [];
}

console.log(twoSum([2,7,11,15],26));


| Approach          | Time       | Space | Interview Rating |
| ----------------- | ---------- | ----- | ---------------- |
| Hash Map / Object | O(n)       | O(n)  | ⭐⭐⭐⭐⭐            |
| Map               | O(n)       | O(n)  | ⭐⭐⭐⭐             |
| Brute Force       | O(n²)      | O(1)  | ⭐⭐               |
| Two Pointers      | O(n log n) | O(n)  | ⭐⭐               |
| findIndex         | O(n²)      | O(1)  | ⚠️               |
