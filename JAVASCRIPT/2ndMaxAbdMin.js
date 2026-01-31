const arr = [5, 1, 9, 2, 8];

arr.sort((a, b) => a - b);

const secondMin = arr[1];
const secondMax = arr[arr.length - 2];

console.log(secondMin, secondMax);

const arr = [5, 1, 9, 2, 8];

let min = Infinity;
let secondMin = Infinity;
let max = -Infinity;
let secondMax = -Infinity;

for (let num of arr) {
  // 2nd min
  if (num < min) {
    secondMin = min;
    min = num;
  } else if (num > min && num < secondMin) {
    secondMin = num;
  }

  // 2nd max
  if (num > max) {
    secondMax = max;
    max = num;
  } else if (num < max && num > secondMax) {
    secondMax = num;
  }
}

console.log(secondMin, secondMax);



const arr = [5, 1, 9, 2, 8, 9];

const unique = [...new Set(arr)].sort((a, b) => a - b);

const secondMin = unique[1];
const secondMax = unique[unique.length - 2];

console.log(secondMin, secondMax);


const arr = [5, 1, 9, 2, 8];

const max = Math.max(...arr);
const min = Math.min(...arr);

const secondMax = Math.max(...arr.filter(n => n !== max));
const secondMin = Math.min(...arr.filter(n => n !== min));

console.log(secondMin, secondMax);



const arr = [5, 1, 9, 2, 8];

const result = arr.reduce(
  (acc, num) => {
    if (num < acc.min) {
      acc.secondMin = acc.min;
      acc.min = num;
    } else if (num > acc.min && num < acc.secondMin) {
      acc.secondMin = num;
    }

    if (num > acc.max) {
      acc.secondMax = acc.max;
      acc.max = num;
    } else if (num < acc.max && num > acc.secondMax) {
      acc.secondMax = num;
    }

    return acc;
  },
  { min: Infinity, secondMin: Infinity, max: -Infinity, secondMax: -Infinity }
);

console.log(result.secondMin, result.secondMax);


