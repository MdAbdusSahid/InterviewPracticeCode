function checkPermutation(s1, s2) {
  const sorted = s1.split('').sort().join('');

  for (let i = 0; i <= s2.length - s1.length; i++) {
    let substring = s2.slice(i, i + s1.length);

    if (substring.split('').sort().join('') === sorted) {
      return true;
    }
  }

  return false;
}

console.log(checkPermutation("ab","eidbaooo")); // true
