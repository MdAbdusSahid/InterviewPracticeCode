const s = "sam is a programmer";
const lengthOfLastWord = (str) => {
  let length = 0;
  let i = str.length - 1;

  // Skip trailing spaces
  while (i >= 0 && str[i] === " ") i--;

  // Count last word
  while (i >= 0 && str[i] !== " ") {
    length++;
    i--;
  }

  return length;
};

console.log(lengthOfLastWord("sam is a programmer")); // 10

const lengthOfLastWord2 = (str) => str.trim().split(" ").pop().length;

console.log(lengthOfLastWord2("sam is a programmer")); // 10
