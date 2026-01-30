function lengthOfLastWord(str) {
  let word = str;
  str = str.trim();

  let count = 0;
  for (let i = str.length - 1; i >= 0; i--) {
    if (word[i] !== ' ')
      count++;
    else
      break;
  }
  console.log(count);
}

lengthOfLastWord("Hi, Love to watch anime"); // 5


function lengthOfLastWord(str) {
  let count = 0;
  str = str.trim();

  for (let i = str.length - 1; i >= 0; i--) {
    if (str[i] !== ' ') count++;
    else break;
  }
  return count;
}

console.log(lengthOfLastWord("Hi, Love to watch anime"));




function lengthOfLastWord(str) {
  const words = str.trim().split(" ");
  return words[words.length - 1].length;
}

console.log(lengthOfLastWord("Hi, Love to watch anime"));

function lengthOfLastWord(str) {
  const match = str.trim().match(/\S+$/);
  return match ? match[0].length : 0;
}

console.log(lengthOfLastWord("Hi, Love to watch anime"));


function lengthOfLastWord(str) {
  let i = str.length - 1;
  let count = 0;

  // Skip trailing spaces
  while (i >= 0 && str[i] === ' ') i--;

  // Count last word
  while (i >= 0 && str[i] !== ' ') {
    count++;
    i--;
  }

  return count;
}

console.log(lengthOfLastWord("Hi, Love to watch anime"));


function lengthOfLastWord(str) {
  let started = false;

  return [...str].reduceRight((count, char) => {
    if (char !== ' ' && !started) return count + 1;
    if (char !== ' ') started = true;
    return count;
  }, 0);
}

console.log(lengthOfLastWord("Hi, Love to watch anime"));


| Method        | Time | Space | Verdict     |
| ------------- | ---- | ----- | ----------- |
| Loop from end | O(n) | O(1)  | ⭐ Best      |
| split         | O(n) | O(n)  | ✅ Simple    |
| Regex         | O(n) | O(1)  | ⚠️ Advanced |
| reduce        | O(n) | O(n)  | ❌ Avoid     |

