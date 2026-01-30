function removeDuplicateLetters(str) {
  let result = "";
  const set = new Set();
  const occurrences = new Map();

  for (let ch of str) {
    if (!set.has(ch)) {
      set.add(ch);
      result += ch;
    } else {
      occurrences.set(ch, (occurrences.get(ch) || 0) + 1);
    }
  }

  console.log("Duplicate character occurrences:");
  for (let [ch, count] of occurrences.entries()) {
    console.log(`${ch}: ${count} times`);
  }

  return result;
}

// Driver
const input = "abracadabra";
const output = removeDuplicateLetters(input);

console.log("Original string:", input);
console.log("String after removing duplicates:", output);


function removeDuplicateLetters(str) {
  let result = "";
  const seen = {};
  const occurrences = {};

  for (let ch of str) {
    if (!seen[ch]) {
      seen[ch] = true;
      result += ch;
    } else {
      occurrences[ch] = (occurrences[ch] || 0) + 1;
    }
  }

  console.log("Duplicate character occurrences:");
  for (let ch in occurrences) {
    console.log(`${ch}: ${occurrences[ch]} times`);
  }

  return result;
}


function removeDuplicateLetters(str) {
  const occurrences = {};
  const result = str.split("").reduce((acc, ch) => {
    if (!acc.seen.has(ch)) {
      acc.seen.add(ch);
      acc.result.push(ch);
    } else {
      occurrences[ch] = (occurrences[ch] || 0) + 1;
    }
    return acc;
  }, { seen: new Set(), result: [] });

  console.log("Duplicate character occurrences:", occurrences);
  return result.result.join("");
}


function removeDuplicateLetters(str) {
  return [...new Set(str)].join("");
}

function duplicateOccurrences(str) {
  const freq = {};
  for (let ch of str) {
    freq[ch] = (freq[ch] || 0) + 1;
  }

  for (let ch in freq) {
    if (freq[ch] > 1) {
      console.log(`${ch}: ${freq[ch] - 1} times`);
    }
  }
}

const input = "abracadabra";
console.log("Result:", removeDuplicateLetters(input));
duplicateOccurrences(input);


vfunction removeDuplicateLetters(str) {
  const occurrences = {};
  const result = str
    .split("")
    .filter((ch, index) => {
      if (str.indexOf(ch) !== index) {
        occurrences[ch] = (occurrences[ch] || 0) + 1;
        return false;
      }
      return true;
    })
    .join("");

  console.log("Duplicate character occurrences:", occurrences);
  return result;
}


function removeDuplicateLetters(str, seen = new Set(), occurrences = {}) {
  if (!str.length) {
    console.log("Duplicate character occurrences:", occurrences);
    return "";
  }

  const ch = str[0];
  if (!seen.has(ch)) {
    seen.add(ch);
    return ch + removeDuplicateLetters(str.slice(1), seen, occurrences);
  } else {
    occurrences[ch] = (occurrences[ch] || 0) + 1;
    return removeDuplicateLetters(str.slice(1), seen, occurrences);
  }
}

console.log(removeDuplicateLetters("abracadabra"));


| Approach       | Time  | Space | Interview Rating |
| -------------- | ----- | ----- | ---------------- |
| Set + Map      | O(n)  | O(n)  | ⭐⭐⭐⭐⭐            |
| Object         | O(n)  | O(n)  | ⭐⭐⭐⭐⭐            |
| Set spread     | O(n)  | O(n)  | ⭐⭐⭐⭐             |
| filter/indexOf | O(n²) | O(1)  | ❌                |
| Recursive      | O(n)  | O(n)  | ⚠️               |
