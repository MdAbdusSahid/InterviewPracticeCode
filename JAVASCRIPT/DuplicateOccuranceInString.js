function printDuplicateOccurrences(arr) {
  const occurrence = new Map();

  for (let str of arr) {
    occurrence.set(str, (occurrence.get(str) || 0) + 1);
  }

  for (let [key, value] of occurrence.entries()) {
    if (value > 1) {
      console.log(`String: ${key} Count: ${value}`);
    }
  }
}

// Driver
const arr = ["apple", "banana", "orange", "banana", "apple", "grape", "grape"];
console.log("Duplicate occurrences in the array:");
printDuplicateOccurrences(arr);


function printDuplicateOccurrences(arr) {
  const freq = {};

  for (let str of arr) {
    freq[str] = (freq[str] || 0) + 1;
  }

  for (let key in freq) {
    if (freq[key] > 1) {
      console.log(`String: ${key} Count: ${freq[key]}`);
    }
  }
}



function printDuplicateOccurrences(arr) {
  const freq = arr.reduce((acc, str) => {
    acc[str] = (acc[str] || 0) + 1;
    return acc;
  }, {});

  Object.entries(freq).forEach(([key, value]) => {
    if (value > 1) {
      console.log(`String: ${key} Count: ${value}`);
    }
  });
}




function printDuplicateOccurrences(arr) {
  const duplicates = arr.filter(
    (item, index) => arr.indexOf(item) !== index
  );

  const uniqueDuplicates = [...new Set(duplicates)];

  uniqueDuplicates.forEach(item => {
    const count = arr.filter(val => val === item).length;
    console.log(`String: ${item} Count: ${count}`);
  });
}




function printDuplicateOccurrences(arr) {
  const seen = new Set();

  for (let item of arr) {
    if (!seen.has(item)) {
      const count = arr.filter(v => v === item).length;
      if (count > 1) {
        console.log(`String: ${item} Count: ${count}`);
      }
      seen.add(item);
    }
  }
}



function printDuplicateOccurrences(arr) {
  arr.sort();

  let count = 1;
  for (let i = 1; i <= arr.length; i++) {
    if (arr[i] === arr[i - 1]) {
      count++;
    } else {
      if (count > 1) {
        console.log(`String: ${arr[i - 1]} Count: ${count}`);
      }
      count = 1;
    }
  }
}



| Method         | Time       | Space | Interview Rating |
| -------------- | ---------- | ----- | ---------------- |
| Map / Object   | O(n)       | O(n)  | ⭐⭐⭐⭐⭐            |
| reduce         | O(n)       | O(n)  | ⭐⭐⭐              |
| Sorting        | O(n log n) | O(1)  | ⭐⭐               |
| filter/indexOf | O(n²)      | O(1)  | ❌                |
