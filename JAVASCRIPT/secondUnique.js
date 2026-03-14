  const secondUnique = (str) => {
    const freq = {};
    for (let char of str) {
      freq[char] = (freq[char] || 0) + 1;
    }
    let lastUniqueCount = 0;
    for (let char in freq) {
      if (freq[char] === 1) {
        lastUniqueCount++;
        if (lastUniqueCount === 2) return char;
      }
    }
    return "Not Found";
  };
  console.log(secondUnique("madxamcu"));
