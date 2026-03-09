function canFormPalindrome(str) {
  const freq = {};
  let oddCount = 0;

  for (let char of str) {
    freq[char] = (freq[char] || 0) + 1;
  }

  for (let key in freq) {
    if (freq[key] % 2 !== 0) oddCount++;
  }

  return oddCount <= 1;
}

console.log(canFormPalindrome("carrace")); // true
