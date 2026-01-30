function printDuplicateCharacters(arr) {
  const occurrence = new Map();

  for (let ch of arr) {
    occurrence.set(ch, (occurrence.get(ch) || 0) + 1);
  }

  for (let [char, count] of occurrence.entries()) {
    if (count > 1) {
      console.log(`Character: ${char} Count: ${count}`);
    }
  }
}

// Driver
const arr = ['a', 'b', 'c', 'b', 'a', 'd', 'd'];
printDuplicateCharacters(arr);

function printDuplicateCharacters(arr) {
  const freq = {};

  for (let ch of arr) {
    freq[ch] = (freq[ch] || 0) + 1;
  }

  for (let ch in freq) {
    if (freq[ch] > 1) {
      console.log(`Character: ${ch} Count: ${freq[ch]}`);
    }
  }
}


function printDuplicateCharacters(str) {
  const freq = {};

  for (let ch of str) {
    freq[ch] = (freq[ch] || 0) + 1;
  }

  Object.entries(freq).forEach(([ch, count]) => {
    if (count > 1) {
      console.log(`Character: ${ch} Count: ${count}`);
    }
  });
}

printDuplicateCharacters("abcbadd");


function printDuplicateCharacters(arr) {
  const freq = arr.reduce((acc, ch) => {
    acc[ch] = (acc[ch] || 0) + 1;
    return acc;
  }, {});

  Object.entries(freq).forEach(([ch, count]) => {
    if (count > 1) {
      console.log(`Character: ${ch} Count: ${count}`);
    }
  });
}


function printDuplicateCharacters(arr) {
  const duplicates = arr.filter(
    (ch, index) => arr.indexOf(ch) !== index
  );

  [...new Set(duplicates)].forEach(ch => {
    const count = arr.filter(c => c === ch).length;
    console.log(`Character: ${ch} Count: ${count}`);
  });
}


function printDuplicateCharacters(arr) {
  arr.sort();

  let count = 1;
  for (let i = 1; i <= arr.length; i++) {
    if (arr[i] === arr[i - 1]) {
      count++;
    } else {
      if (count > 1) {
        console.log(`Character: ${arr[i - 1]} Count: ${count}`);
      }
      count = 1;
    }
  }
}



function printDuplicateCharacters(arr) {
  const seen = new Set();

  for (let ch of arr) {
    if (!seen.has(ch)) {
      const count = arr.filter(c => c === ch).length;
      if (count > 1) {
        console.log(`Character: ${ch} Count: ${count}`);
      }
      seen.add(ch);
    }
  }
}


| Approach       | Time       | Space | Interview Rating |
| -------------- | ---------- | ----- | ---------------- |
| Map / Object   | O(n)       | O(n)  | ⭐⭐⭐⭐⭐            |
| reduce         | O(n)       | O(n)  | ⭐⭐⭐              |
| Sorting        | O(n log n) | O(1)  | ⭐⭐               |
| filter/indexOf | O(n²)      | O(1)  | ❌                |
