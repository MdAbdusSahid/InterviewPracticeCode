function findSingleChar(str) {
  const freq = {};

  // count frequency
  for (let char of str) {
    freq[char] = (freq[char] || 0) + 1;
  }

  // find char that appears once
  for (let char of str) {
    if (freq[char] === 1) {
      return char;
    }
  }
}

console.log(findSingleChar("abcacbs")); // b

function findSingleChar(str) {
  for (let char of str) {
    if (str.indexOf(char) === str.lastIndexOf(char)) {
      return char;
    }
  }
}

console.log(findSingleChar("abcacbs")); // b


function findAllSingleChars(str) {
  const freq = {};
  const result = [];

  for (let char of str) {
    freq[char] = (freq[char] || 0) + 1;
  }

  for (let char in freq) {
    if (freq[char] === 1) {
      result.push(char);
    }
  }

  return result;
}

console.log(findAllSingleChars("abcacbs")); // ["b"]
