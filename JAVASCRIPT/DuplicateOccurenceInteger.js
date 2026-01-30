function printDuplicateIntegers(arr) {
  const occurrence = new Map();

  for (let num of arr) {
    occurrence.set(num, (occurrence.get(num) || 0) + 1);
  }

  for (let [value, count] of occurrence.entries()) {
    if (count > 1) {
      console.log(`Value: ${value} Count: ${count}`);
    }
  }
}

// Driver
const arr = [10,12,10,23,34,55,44,55,33,44,55,12,13,16,1];
printDuplicateIntegers(arr);


function printDuplicateIntegers(arr) {
  const freq = {};

  for (let num of arr) {
    freq[num] = (freq[num] || 0) + 1;
  }

  for (let key in freq) {
    if (freq[key] > 1) {
      console.log(`Value: ${key} Count: ${freq[key]}`);
    }
  }
}


function printDuplicateIntegers(arr) {
  const freq = arr.reduce((acc, num) => {
    acc[num] = (acc[num] || 0) + 1;
    return acc;
  }, {});

  Object.entries(freq).forEach(([key, count]) => {
    if (count > 1) {
      console.log(`Value: ${key} Count: ${count}`);
    }
  });
}


function printDuplicateIntegers(arr) {
  const duplicates = arr.filter(
    (num, index) => arr.indexOf(num) !== index
  );

  [...new Set(duplicates)].forEach(num => {
    const count = arr.filter(n => n === num).length;
    console.log(`Value: ${num} Count: ${count}`);
  });
}


function printDuplicateIntegers(arr) {
  arr.sort((a, b) => a - b);

  let count = 1;
  for (let i = 1; i <= arr.length; i++) {
    if (arr[i] === arr[i - 1]) {
      count++;
    } else {
      if (count > 1) {
        console.log(`Value: ${arr[i - 1]} Count: ${count}`);
      }
      count = 1;
    }
  }
}


function printDuplicateIntegers(arr) {
  const seen = new Set();

  for (let num of arr) {
    if (!seen.has(num)) {
      const count = arr.filter(n => n === num).length;
      if (count > 1) {
        console.log(`Value: ${num} Count: ${count}`);
      }
      seen.add(num);
    }
  }
}


| Method         | Time       | Space | Interview Rating |
| -------------- | ---------- | ----- | ---------------- |
| Map / Object   | O(n)       | O(n)  | ⭐⭐⭐⭐⭐            |
| reduce         | O(n)       | O(n)  | ⭐⭐⭐              |
| Sorting        | O(n log n) | O(1)  | ⭐⭐               |
| filter/indexOf | O(n²)      | O(1)  | ❌                |
