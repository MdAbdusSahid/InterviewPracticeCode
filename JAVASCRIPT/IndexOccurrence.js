function indexOfOcc(haystack, needle) {
  const occurrence = [];

  for (let i = 0; i <= haystack.length - needle.length; i++) {
    if (
      haystack[i] === needle[0] &&
      haystack.startsWith(needle, i)
    ) {
      occurrence.push(i);
    }
  }
  return occurrence;
}

// Driver code
const haystack = "badsadbadsad";
const needle = "sad";

const occurrence = indexOfOcc(haystack, needle);
console.log(occurrence.length ? occurrence : -1);
// Output: [3, 10]

function indexOfOcc(haystack, needle) {
  const result = [];
  let index = haystack.indexOf(needle);

  while (index !== -1) {
    result.push(index);
    index = haystack.indexOf(needle, index + 1);
  }

  return result.length ? result : -1;
}

console.log(indexOfOcc("badsadbadsad", "sad"));


function indexOfOcc(haystack, needle) {
  const result = [];

  for (let i = 0; i <= haystack.length - needle.length; i++) {
    if (haystack.substring(i, i + needle.length) === needle) {
      result.push(i);
    }
  }
  return result.length ? result : -1;
}

console.log(indexOfOcc("badsadbadsad", "sad"));


function indexOfOcc(haystack, needle) {
  const result = [];

  for (let i = 0; i <= haystack.length - needle.length; i++) {
    if (haystack.slice(i, i + needle.length) === needle) {
      result.push(i);
    }
  }
  return result.length ? result : -1;
}


function indexOfOcc(haystack, needle) {
  const result = [];
  const regex = new RegExp(needle, "g");
  let match;

  while ((match = regex.exec(haystack)) !== null) {
    result.push(match.index);
  }

  return result.length ? result : -1;
}

console.log(indexOfOcc("badsadbadsad", "sad"));


function indexOfOcc(haystack, needle) {
  const parts = haystack.split(needle);
  if (parts.length === 1) return -1;

  let index = 0;
  const result = [];

  for (let i = 0; i < parts.length - 1; i++) {
    index += parts[i].length;
    result.push(index);
    index += needle.length;
  }
  return result;
}


| Approach          | Time   | Interview Use |
| ----------------- | ------ | ------------- |
| Loop + startsWith | O(n×m) | ✅ Safe        |
| indexOf loop      | O(n×m) | ⭐ Best        |
| substring / slice | O(n×m) | ✅ Clear       |
| RegExp            | O(n)   | ⚠️ Advanced   |
| split             | O(n)   | ❌ Avoid       |
