function firstNonRepeatedChar(str) {
  const freq = {};

  // Count frequency of each character
  for (let ch of str) {
    freq[ch] = (freq[ch] || 0) + 1;
  }

  // Find first character with count 1
  for (let ch of str) {
    if (freq[ch] === 1) return ch;
  }

  return null; // if no non-repeated character
}

// Example
const inputString = "abcbad";
console.log(firstNonRepeatedChar(inputString)); // Output: "c"
