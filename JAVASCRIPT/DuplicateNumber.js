function duplicateNumber(nums) {
  const set = new Set();

  for (let num of nums) {
    if (set.has(num)) {
      return num;
    } else {
      set.add(num);
    }
  }
  return -1;
}

// Driver code
const nums = [2, 3, 4, 5, 6, 7, 5, 4, 9, 10];
console.log(duplicateNumber(nums)); // 5


function duplicateNumber(nums) {
  const freq = {};

  for (let num of nums) {
    if (freq[num]) {
      return num;
    }
    freq[num] = 1;
  }
  return -1;
}

console.log(duplicateNumber([2,3,4,5,6,7,5,4,9,10])); // 5


function duplicateNumber(nums) {
  nums.sort((a, b) => a - b);

  for (let i = 1; i < nums.length; i++) {
    if (nums[i] === nums[i - 1]) {
      return nums[i];
    }
  }
  return -1;
}

console.log(duplicateNumber([2,3,4,5,6,7,5,4,9,10])); // 4


function duplicateNumber(nums) {
  return nums.filter((num, index) => nums.indexOf(num) !== index)[0] ?? -1;
}

console.log(duplicateNumber([2,3,4,5,6,7,5,4,9,10]));


function duplicateNumber(nums) {
  const n = nums.length;
  const expectedSum = (n * (n + 1)) / 2;
  const actualSum = nums.reduce((a, b) => a + b, 0);

  return actualSum - expectedSum;
}


function duplicateNumber(nums) {
  let xor = 0;

  for (let i = 0; i < nums.length; i++) {
    xor ^= nums[i];
    xor ^= i + 1;
  }
  return xor;
}
