function removeDuplicate(str) {
  let result = "";
  const set = new Set();

  for (let ch of str) {
    if (!set.has(ch)) {
      set.add(ch);
      result += ch;
    }
  }

  console.log(result);
}

removeDuplicate("aarrhghdfgrthetfr");


function removeDuplicate(str) {
  return [...new Set(str)].join("");
}

console.log(removeDuplicate("aarrhghdfgrthetfr"));


function removeDuplicate(str) {
  return str
    .split("")
    .filter((ch, index) => str.indexOf(ch) === index)
    .join("");
}


function removeDuplicate(str) {
  const seen = {};
  let result = "";

  for (let ch of str) {
    if (!seen[ch]) {
      seen[ch] = true;
      result += ch;
    }
  }
  return result;
}


function removeDuplicate(str) {
  return str.split("").reduce((acc, ch) => {
    if (!acc.includes(ch)) acc += ch;
    return acc;
  }, "");
}


function removeDuplicate(str) {
  return str
    .split("")
    .sort()
    .filter((ch, i, arr) => ch !== arr[i - 1])
    .join("");
}


function removeDuplicate(str, result = "", seen = {}) {
  if (!str.length) return result;

  const ch = str[0];
  if (!seen[ch]) {
    seen[ch] = true;
    result += ch;
  }
  return removeDuplicate(str.slice(1), result, seen);
}

console.log(removeDuplicate("aarrhghdfgrthetfr"));



| Approach       | Time       | Space | Interview Rating |
| -------------- | ---------- | ----- | ---------------- |
| Set + loop     | O(n)       | O(n)  | ⭐⭐⭐⭐⭐            |
| Spread + Set   | O(n)       | O(n)  | ⭐⭐⭐⭐⭐            |
| Object         | O(n)       | O(n)  | ⭐⭐⭐⭐             |
| filter/indexOf | O(n²)      | O(1)  | ❌                |
| Sorting        | O(n log n) | O(n)  | ⚠️               |
