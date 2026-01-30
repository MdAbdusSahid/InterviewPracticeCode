function findFirstLastPosition(nums, target) {
  const arr = [-1, -1];

  for (let i = 0; i < nums.length; i++) {
    if (nums[i] === target) {
      arr[0] = i;

      if (i < nums.length - 1 && nums[i + 1] === target) {
        i++;
        arr[1] = i;
        break;
      }
    }
  }
  return arr;
}

// Driver code
const nums = [2, 3, 4, 5, 6, 7, 8, 23, 45, 67, 89, 99];
console.log(findFirstLastPosition(nums, 4)); // [2, 2]

function findFirstLastPosition(nums, target) {
  return [nums.indexOf(target), nums.lastIndexOf(target)];
}

console.log(findFirstLastPosition([2,3,4,4,4,5], 4)); // [2, 4]


function findFirstLastPosition(nums, target) {
  let first = -1;
  let last = -1;

  for (let i = 0; i < nums.length; i++) {
    if (nums[i] === target) {
      if (first === -1) first = i;
      last = i;
    }
  }
  return [first, last];
}

console.log(findFirstLastPosition([2,3,4,4,4,5], 4)); // [2, 4]

function findFirstLastPosition(nums, target) {
  return nums.reduce(
    (acc, val, idx) => {
      if (val === target) {
        if (acc[0] === -1) acc[0] = idx;
        acc[1] = idx;
      }
      return acc;
    },
    [-1, -1]
  );
}

console.log(findFirstLastPosition([2,3,4,4,4,5], 4));

function findFirstLastPosition(nums, target) {
  const first = binarySearch(nums, target, true);
  const last = binarySearch(nums, target, false);
  return [first, last];
}

function binarySearch(nums, target, findFirst) {
  let start = 0, end = nums.length - 1;
  let ans = -1;

  while (start <= end) {
    let mid = Math.floor((start + end) / 2);

    if (nums[mid] === target) {
      ans = mid;
      if (findFirst) end = mid - 1;
      else start = mid + 1;
    } else if (nums[mid] < target) {
      start = mid + 1;
    } else {
      end = mid - 1;
    }
  }
  return ans;
}

console.log(findFirstLastPosition([2,3,4,4,4,5], 4)); // [2, 4]
