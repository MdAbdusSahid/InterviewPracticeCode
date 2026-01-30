function missingNumber(nums) {
  const n = nums.length + 1;
  const expectedTotal = (n * (n + 1)) / 2;

  let total = 0;
  for (let num of nums) {
    total += num;
  }

  return expectedTotal - total;
}

// Driver
console.log(missingNumber([1,2,3,4,5,6,7,8,9,10])); // 11

function missingNumber(nums) {
  const n = nums.length + 1;
  const expectedSum = (n * (n + 1)) / 2;
  const actualSum = nums.reduce((sum, num) => sum + num, 0);

  return expectedSum - actualSum;
}

function missingNumber(nums) {
  let xor = 0;

  for (let i = 1; i <= nums.length + 1; i++) {
    xor ^= i;
  }

  for (let num of nums) {
    xor ^= num;
  }

  return xor;
}

function missingNumber(nums) {
  nums.sort((a, b) => a - b);

  for (let i = 0; i < nums.length; i++) {
    if (nums[i] !== i + 1) {
      return i + 1;
    }
  }
  return nums.length + 1;
}

function missingNumber(nums) {
  const set = new Set(nums);
  const n = nums.length + 1;

  for (let i = 1; i <= n; i++) {
    if (!set.has(i)) return i;
  }
}


function missingNumber(nums) {
  const n = nums.length + 1;

  for (let i = 1; i <= n; i++) {
    if (!nums.includes(i)) return i;
  }
}
| Method       | Time       | Space | Verdict |
| ------------ | ---------- | ----- | ------- |
| Math formula | O(n)       | O(1)  | ⭐⭐⭐⭐    |
| XOR          | O(n)       | O(1)  | ⭐⭐⭐⭐⭐   |
| Set          | O(n)       | O(n)  | ⭐⭐⭐     |
| Sort         | O(n log n) | O(1)  | ⭐⭐      |
| Brute force  | O(n²)      | O(1)  | ❌       |
