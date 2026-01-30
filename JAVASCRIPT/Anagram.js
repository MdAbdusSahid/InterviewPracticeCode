function isAnagram(str1, str2) {
  if (str1.length !== str2.length) return false;

  const sorted1 = str1.split("").sort().join("");
  const sorted2 = str2.split("").sort().join("");

  return sorted1 === sorted2;
}

// Example
console.log(isAnagram("listen", "silent")); // true
console.log(isAnagram("hello", "bello"));   // false

function isAnagram(str1, str2) {
  if (str1.length !== str2.length) return false;

  const freq = {};

  for (let ch of str1) freq[ch] = (freq[ch] || 0) + 1;
  for (let ch in str2) {
    if (!freq[ch]) return false; // char missing or extra
    freq[ch]--;
  }

  return true;
}

console.log(isAnagram("listen", "silent")); // true
console.log(isAnagram("hello", "bello"));   // false


function isAnagram(str1, str2) {
  if (str1.length !== str2.length) return false;

  const map = new Map();

  for (let ch of str1) map.set(ch, (map.get(ch) || 0) + 1);
  for (let ch of str2) {
    if (!map.has(ch)) return false;
    map.set(ch, map.get(ch) - 1);
    if (map.get(ch) === 0) map.delete(ch);
  }

  return map.size === 0;
}

console.log(isAnagram("listen", "silent")); // true


function isAnagram(str1, str2) {
  if (str1.length !== str2.length) return false;

  const count = new Array(26).fill(0);
  const aCode = "a".charCodeAt(0);

  for (let ch of str1) count[ch.charCodeAt(0) - aCode]++;
  for (let ch of str2) {
    count[ch.charCodeAt(0) - aCode]--;
    if (count[ch.charCodeAt(0) - aCode] < 0) return false;
  }

  return true;
}

console.log(isAnagram("listen", "silent")); // true


function isAnagram(str1, str2) {
  if (str1.length !== str2.length) return false;

  const count = new Array(26).fill(0);
  const aCode = "a".charCodeAt(0);

  for (let ch of str1) count[ch.charCodeAt(0) - aCode]++;
  for (let ch of str2) {
    count[ch.charCodeAt(0) - aCode]--;
    if (count[ch.charCodeAt(0) - aCode] < 0) return false;
  }

  return true;
}

console.log(isAnagram("listen", "silent")); // true


function isAnagram(str1, str2) {
  if (str1.length !== str2.length) return false;

  const freq1 = [...str1].reduce((acc, ch) => (acc[ch] = (acc[ch] || 0) + 1, acc), {});
  const freq2 = [...str2].reduce((acc, ch) => (acc[ch] = (acc[ch] || 0) + 1, acc), {});

  return Object.keys(freq1).every(ch => freq1[ch] === freq2[ch]);
}

console.log(isAnagram("listen", "silent")); // true


| Method              | Time       | Space | Notes                        |
| ------------------- | ---------- | ----- | ---------------------------- |
| Sort & Compare      | O(n log n) | O(n)  | Simple, easy to code         |
| Frequency Map       | O(n)       | O(n)  | Best for general use         |
| Map                 | O(n)       | O(n)  | Modern JS, works for Unicode |
| Char Code Array     | O(n)       | O(1)  | Efficient, lowercase only    |
| Reduce / Functional | O(n)       | O(n)  | Less readable in interviews  |
