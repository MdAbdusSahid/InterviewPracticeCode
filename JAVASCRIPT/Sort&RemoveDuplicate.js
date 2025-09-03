const s = [0, 1, 3, 4, 2, 0, 1];
const sortAndRemoveDuplicates = (arr) => {
  // Bubble sort
  for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < arr.length - 1; j++) {
      if (arr[j] > arr[j + 1]) {
        let temp = arr[j];
        arr[j] = arr[j + 1];
        arr[j + 1] = temp;
      }
    }
  }

  // Remove duplicates
  const result = [];
  for (let i = 0; i < arr.length; i++) {
    if (result[result.length - 1] !== arr[i]) {
      result.push(arr[i]);
    }
  }

  return result;
};

console.log(sortAndRemoveDuplicates([0, 1, 3, 4, 2, 0, 1]));

const uniqueSorted = [...new Set([0, 1, 3, 4, 2, 0, 1])].sort((a, b) => a - b);
console.log(uniqueSorted);
