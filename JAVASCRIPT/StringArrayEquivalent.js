function helper(words) {
  return words.join(""); // concatenate all strings
}

const str1 = ["abc", "xyz"];
const str2 = ["abc", "xyz"];

console.log(helper(str1) === helper(str2)); // true


function helper(words) {
  return words.reduce((acc, word) => acc + word, "");
}

const str1 = ["abc", "xyz"];
const str2 = ["abc", "xyz"];

console.log(helper(str1) === helper(str2)); // true

function helper(words) {
  let result = "";
  for (let word of words) {
    result += word;
  }
  return result;
}

const str1 = ["abc", "xyz"];
const str2 = ["abc", "xyz"];

console.log(helper(str1) === helper(str2)); // true


const str1 = ["abc", "xyz"];
const str2 = ["abc", "xyz"];

console.log(str1.join("") === str2.join("")); // true


const str1 = ["abc", "xyz"];
const str2 = ["abc", "xyz"];

console.log([].concat(...str1).join("") === [].concat(...str2).join("")); // true


function arraysEquivalent(a, b) {
  if (a.length !== b.length) return false;
  return a.every((word, i) => word === b[i]);
}

const str1 = ["abc", "xyz"];
const str2 = ["abc", "xyz"];

console.log(arraysEquivalent(str1, str2)); // true


const str1 = ["abc", "xyz"];
const str2 = ["abc", "xyz"];

console.log(
  str1.map(s => s).join("") === str2.map(s => s).join("")
); // true


