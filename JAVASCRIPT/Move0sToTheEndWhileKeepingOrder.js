const nums = [0, 1, 0, 3, 12];
const moveZeroes = (arr) => {
  const result = [];
  let zeroCount = 0;

  // Collect non-zero
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] !== 0) {
      result.push(arr[i]);
    } else {
      zeroCount++;
    }
  }

  // Append zeros at end
  for (let i = 0; i < zeroCount; i++) {
    result.push(0);
  }

  return result;
};

console.log(moveZeroes([0, 1, 0, 3, 12])); // [1, 3, 12, 0, 0]

const moveZeroes2 = (arr) => {
  return arr.filter((x) => x !== 0).concat(arr.filter((x) => x === 0));
};

console.log(moveZeroes2([0, 1, 0, 3, 12])); // [1, 3, 12, 0, 0]
